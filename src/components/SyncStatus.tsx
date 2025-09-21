'use client'

import { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Wifi, WifiOff, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react'
import { offlineSyncService } from '@/lib/offlineSync'

interface SyncStatus {
  isOnline: boolean
  lastSync: string | null
  pendingChanges: number
  isSyncing: boolean
}

export default function SyncStatus() {
  const [status, setStatus] = useState<SyncStatus>({
    isOnline: true,
    lastSync: null,
    pendingChanges: 0,
    isSyncing: false
  })

  useEffect(() => {
    const unsubscribe = offlineSyncService.subscribe(setStatus)
    return unsubscribe
  }, [])

  const handleForceSync = async () => {
    await offlineSyncService.forceSync()
  }

  const getStatusIcon = () => {
    if (status.isSyncing) {
      return <RefreshCw className="h-4 w-4 animate-spin" />
    }
    if (status.isOnline) {
      return status.pendingChanges > 0 ? 
        <AlertCircle className="h-4 w-4 text-yellow-500" /> : 
        <CheckCircle className="h-4 w-4 text-green-500" />
    }
    return <WifiOff className="h-4 w-4 text-red-500" />
  }

  const getStatusText = () => {
    if (status.isSyncing) return 'Syncing...'
    if (!status.isOnline) return 'Offline'
    if (status.pendingChanges > 0) return `${status.pendingChanges} pending`
    return 'Synced'
  }

  const getStatusColor = () => {
    if (status.isSyncing) return 'bg-blue-100 text-blue-800'
    if (!status.isOnline) return 'bg-red-100 text-red-800'
    if (status.pendingChanges > 0) return 'bg-yellow-100 text-yellow-800'
    return 'bg-green-100 text-green-800'
  }

  return (
    <div className="flex items-center gap-2">
      <Badge className={getStatusColor()}>
        {getStatusIcon()}
        <span className="ml-1">{getStatusText()}</span>
      </Badge>
      
      {status.isOnline && status.pendingChanges > 0 && (
        <Button
          size="sm"
          variant="outline"
          onClick={handleForceSync}
          disabled={status.isSyncing}
          className="h-6 px-2 text-xs"
        >
          <RefreshCw className={`h-3 w-3 mr-1 ${status.isSyncing ? 'animate-spin' : ''}`} />
          Sync
        </Button>
      )}
      
      {status.lastSync && (
        <span className="text-xs text-gray-500">
          Last sync: {new Date(status.lastSync).toLocaleTimeString()}
        </span>
      )}
    </div>
  )
}
