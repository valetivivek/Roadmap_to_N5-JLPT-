import { createClient } from '@/lib/supabase'
import { Progress } from '@/types'

interface SyncStatus {
  isOnline: boolean
  lastSync: string | null
  pendingChanges: number
  isSyncing: boolean
}

class OfflineSyncService {
  private supabase = createClient()
  private syncStatus: SyncStatus = {
    isOnline: typeof window !== 'undefined' ? navigator.onLine : true,
    lastSync: null,
    pendingChanges: 0,
    isSyncing: false
  }
  private listeners: Array<(status: SyncStatus) => void> = []
  private syncInterval: NodeJS.Timeout | null = null

  constructor() {
    // Only initialize browser-specific features on client side
    if (typeof window !== 'undefined') {
      // Listen for online/offline events
      window.addEventListener('online', () => {
        this.syncStatus.isOnline = true
        this.notifyListeners()
        this.syncPendingChanges()
      })

      window.addEventListener('offline', () => {
        this.syncStatus.isOnline = false
        this.notifyListeners()
      })

      // Periodic sync when online
      this.syncInterval = setInterval(() => {
        if (this.syncStatus.isOnline && this.syncStatus.pendingChanges > 0) {
          this.syncPendingChanges()
        }
      }, 30000) // Sync every 30 seconds
    }
  }

  // Cleanup method
  destroy() {
    if (this.syncInterval) {
      clearInterval(this.syncInterval)
      this.syncInterval = null
    }
  }

  // Subscribe to sync status changes
  subscribe(listener: (status: SyncStatus) => void) {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener)
    }
  }

  // Get current sync status
  getStatus(): SyncStatus {
    return { ...this.syncStatus }
  }

  // Save progress locally and queue for sync
  async saveProgress(progress: Progress): Promise<void> {
    try {
      // Only save to localStorage on client side
      if (typeof window !== 'undefined') {
        // Save to localStorage immediately
        const localProgress = this.getLocalProgress()
        const existingIndex = localProgress.findIndex(p => p.task_id === progress.task_id)
        
        if (existingIndex >= 0) {
          localProgress[existingIndex] = progress
        } else {
          localProgress.push(progress)
        }
        
        localStorage.setItem('jlpt-n5-progress', JSON.stringify(localProgress))
      }
      
      // Add to pending changes
      this.syncStatus.pendingChanges++
      this.notifyListeners()
      
      // Try to sync immediately if online
      if (this.syncStatus.isOnline) {
        await this.syncProgress(progress)
      }
    } catch (error) {
      console.error('Failed to save progress locally:', error)
    }
  }

  // Remove progress locally and queue for sync
  async removeProgress(taskId: string): Promise<void> {
    try {
      // Only remove from localStorage on client side
      if (typeof window !== 'undefined') {
        // Remove from localStorage
        const localProgress = this.getLocalProgress()
        const filteredProgress = localProgress.filter(p => p.task_id !== taskId)
        localStorage.setItem('jlpt-n5-progress', JSON.stringify(filteredProgress))
      }
      
      // Add to pending changes
      this.syncStatus.pendingChanges++
      this.notifyListeners()
      
      // Try to sync immediately if online
      if (this.syncStatus.isOnline) {
        await this.syncRemoveProgress(taskId)
      }
    } catch (error) {
      console.error('Failed to remove progress locally:', error)
    }
  }

  // Get all progress from localStorage
  getLocalProgress(): Progress[] {
    try {
      if (typeof window === 'undefined') {
        return []
      }
      const stored = localStorage.getItem('jlpt-n5-progress')
      return stored ? JSON.parse(stored) : []
    } catch (error) {
      console.error('Failed to get local progress:', error)
      return []
    }
  }

  // Sync all pending changes
  async syncPendingChanges(): Promise<void> {
    if (this.syncStatus.isSyncing || !this.syncStatus.isOnline) {
      return
    }

    this.syncStatus.isSyncing = true
    this.notifyListeners()

    try {
      const localProgress = this.getLocalProgress()
      
      // Get user session
      const { data: { session } } = await this.supabase.auth.getSession()
      if (!session?.user) {
        console.log('No user session, skipping sync')
        return
      }

      // Sync all progress
      for (const progress of localProgress) {
        await this.syncProgress(progress)
      }

      // Update sync status
      this.syncStatus.lastSync = new Date().toISOString()
      this.syncStatus.pendingChanges = 0
      this.syncStatus.isSyncing = false
      this.notifyListeners()

      console.log('Sync completed successfully')
    } catch (error) {
      console.error('Sync failed:', error)
      this.syncStatus.isSyncing = false
      this.notifyListeners()
    }
  }

  // Sync individual progress item
  private async syncProgress(progress: Progress): Promise<void> {
    try {
      const { error } = await this.supabase
        .from('progress')
        .upsert({
          id: progress.id,
          user_id: progress.user_id,
          task_id: progress.task_id,
          completed_at: progress.completed_at,
          note: progress.note,
          created_at: progress.created_at,
          updated_at: progress.updated_at
        })

      if (error) {
        throw error
      }
    } catch (error) {
      console.error('Failed to sync progress:', error)
      throw error
    }
  }

  // Sync progress removal
  private async syncRemoveProgress(taskId: string): Promise<void> {
    try {
      const { data: { session } } = await this.supabase.auth.getSession()
      if (!session?.user) return

      const { error } = await this.supabase
        .from('progress')
        .delete()
        .eq('user_id', session.user.id)
        .eq('task_id', taskId)

      if (error) {
        throw error
      }
    } catch (error) {
      console.error('Failed to sync progress removal:', error)
      throw error
    }
  }

  // Load progress from server
  async loadProgress(): Promise<Progress[]> {
    try {
      const { data: { session } } = await this.supabase.auth.getSession()
      if (!session?.user) {
        return this.getLocalProgress()
      }

      const { data, error } = await this.supabase
        .from('progress')
        .select('*')
        .eq('user_id', session.user.id)
        .order('completed_at', { ascending: false })

      if (error) {
        throw error
      }

      // Update local storage with server data
      if (data && typeof window !== 'undefined') {
        localStorage.setItem('jlpt-n5-progress', JSON.stringify(data))
        this.syncStatus.lastSync = new Date().toISOString()
        this.notifyListeners()
      }

      return data || []
    } catch (error) {
      console.error('Failed to load progress from server:', error)
      return this.getLocalProgress()
    }
  }

  // Notify listeners of status changes
  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.syncStatus))
  }

  // Force sync (for manual sync button)
  async forceSync(): Promise<void> {
    if (this.syncStatus.isOnline) {
      await this.syncPendingChanges()
    }
  }

  // Clear all local data
  clearLocalData(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('jlpt-n5-progress')
    }
    this.syncStatus.pendingChanges = 0
    this.syncStatus.lastSync = null
    this.notifyListeners()
  }
}

// Export singleton instance
export const offlineSyncService = new OfflineSyncService()
