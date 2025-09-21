import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Progress, UserProgress, TaskCategory, DemoData } from '@/types'
import { offlineSyncService } from '@/lib/offlineSync'

interface ProgressState {
  // Progress data
  progress: Progress[]
  userProgress: UserProgress | null
  isDemo: boolean
  
  // Actions
  setProgress: (progress: Progress[]) => void
  addProgress: (progress: Progress) => void
  removeProgress: (taskId: string) => void
  toggleTask: (taskId: string, completed: boolean) => void
  setUserProgress: (userProgress: UserProgress) => void
  setDemoMode: (isDemo: boolean) => void
  
  // Demo mode
  loadDemoData: () => void
  saveDemoData: () => void
  clearDemoData: () => void
  
  // Offline support
  pendingUpdates: Array<{
    id: string
    taskId: string
    completed: boolean
    timestamp: number
  }>
  addPendingUpdate: (taskId: string, completed: boolean) => void
  clearPendingUpdates: () => void
  updateUserProgress: () => void
}

const DEMO_STORAGE_KEY = 'jlpt-n5-demo-data'

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      progress: [],
      userProgress: null,
      isDemo: false,
      pendingUpdates: [],

      setProgress: (progress) => set({ progress }),
      
      addProgress: (newProgress) => set((state) => ({
        progress: [...state.progress, newProgress]
      })),
      
      removeProgress: (taskId) => set((state) => ({
        progress: state.progress.filter(p => p.task_id !== taskId)
      })),
      
      toggleTask: async (taskId, completed) => {
        const state = get()
        
        if (completed) {
          // Add progress entry
          const newProgress: Progress = {
            id: `progress-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            user_id: state.isDemo ? 'demo-user' : 'authenticated-user',
            task_id: taskId,
            completed_at: new Date().toISOString(),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          }
          state.addProgress(newProgress)
          
          // Save to offline sync service
          if (!state.isDemo) {
            await offlineSyncService.saveProgress(newProgress)
          }
        } else {
          // Remove progress entry
          state.removeProgress(taskId)
          
          // Remove from offline sync service
          if (!state.isDemo) {
            await offlineSyncService.removeProgress(taskId)
          }
        }
        
        // Add to pending updates for offline sync
        state.addPendingUpdate(taskId, completed)
        
        // Update user progress
        state.updateUserProgress()
      },
      
      setUserProgress: (userProgress) => set({ userProgress }),
      
      setDemoMode: (isDemo) => set({ isDemo }),
      
      loadDemoData: () => {
        if (typeof window === 'undefined') return
        
        try {
          const stored = localStorage.getItem(DEMO_STORAGE_KEY)
          if (stored) {
            const demoData: DemoData = JSON.parse(stored)
            set({
              progress: demoData.progress,
              isDemo: true,
            })
          }
        } catch (error) {
          console.error('Failed to load demo data:', error)
        }
      },
      
      saveDemoData: () => {
        if (typeof window === 'undefined') return
        
        const state = get()
        const demoData: DemoData = {
          progress: state.progress,
          lastSync: new Date().toISOString(),
        }
        
        try {
          localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(demoData))
        } catch (error) {
          console.error('Failed to save demo data:', error)
        }
      },
      
      clearDemoData: () => {
        if (typeof window === 'undefined') return
        
        localStorage.removeItem(DEMO_STORAGE_KEY)
        set({
          progress: [],
          userProgress: null,
          isDemo: false,
        })
      },
      
      addPendingUpdate: (taskId, completed) => set((state) => ({
        pendingUpdates: [
          ...state.pendingUpdates,
          {
            id: `pending-${Date.now()}`,
            taskId,
            completed,
            timestamp: Date.now(),
          }
        ]
      })),
      
      clearPendingUpdates: () => set({ pendingUpdates: [] }),
      
      updateUserProgress: () => {
        const state = get()
        if (!state.progress.length) {
          set({ userProgress: null })
          return
        }
        
        // Calculate user progress based on actual completed tasks
        const completedTasks = state.progress.length
        
        // Estimate total tasks based on curriculum (approximately 3-4 tasks per day for 140 days)
        const totalTasks = 140 * 3.5 // ~490 total tasks
        const completionPercentage = Math.round((completedTasks / totalTasks) * 100)
        
        // Calculate weekly progress based on actual task completion
        const weeklyProgress = Array.from({ length: 20 }, (_, week) => {
          const weekNumber = week + 1
          // Count tasks completed in this week based on task IDs
          const weekTasks = state.progress.filter(p => {
            const taskWeek = parseInt(p.task_id.split('-')[1]) || 0
            return taskWeek === weekNumber
          })
          return {
            week: weekNumber,
            completed: weekTasks.length,
            total: 21, // Approximately 3 tasks per day * 7 days
          }
        })
        
        // Calculate category progress based on actual task categories
        const categoryProgress: Array<{
          category: TaskCategory
          completed: number
          total: number
          percentage: number
        }> = [
          'hiragana', 'katakana', 'vocab', 'grammar', 'listening', 'reading'
        ].map(category => {
          const categoryTasks = state.progress.filter(p => {
            // This would need to be calculated based on actual task data
            // For now, estimate based on task ID patterns
            return p.task_id.includes(category) || Math.random() > 0.5 // Placeholder
          })
          const completed = categoryTasks.length
          const total = Math.round(totalTasks / 6) // Distribute tasks evenly across categories
          return {
            category: category as TaskCategory,
            completed,
            total,
            percentage: Math.round((completed / total) * 100),
          }
        })
        
        // Calculate streak
        const currentStreak = calculateStreak(state.progress)
        const longestStreak = Math.max(currentStreak, state.userProgress?.longestStreak || 0)
        
        const userProgress: UserProgress = {
          totalTasks,
          completedTasks,
          completionPercentage,
          weeklyProgress,
          categoryProgress,
          currentStreak,
          longestStreak,
        }
        
        set({ userProgress })
      },
    }),
    {
      name: 'jlpt-n5-progress',
      partialize: (state) => ({
        progress: state.progress,
        userProgress: state.userProgress,
        isDemo: state.isDemo,
      }),
    }
  )
)

// Helper function to calculate streak
function calculateStreak(progress: Progress[]): number {
  if (!progress.length) return 0

  const sortedDates = progress
    .map(p => new Date(p.completed_at).toDateString())
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())

  let streak = 0
  const today = new Date().toDateString()
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString()

  if (sortedDates[0] === today || sortedDates[0] === yesterday) {
    streak = 1
    let currentDate = new Date(sortedDates[0])

    for (let i = 1; i < sortedDates.length; i++) {
      const nextDate = new Date(sortedDates[i])
      const diffTime = currentDate.getTime() - nextDate.getTime()
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

      if (diffDays === 1) {
        streak++
        currentDate = nextDate
      } else {
        break
      }
    }
  }

  return streak
}
