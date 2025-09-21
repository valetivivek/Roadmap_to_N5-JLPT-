'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronRight, Star } from 'lucide-react'
import { RoadmapDay, TaskCategory } from '@/types'
import { getCategoryColor, getCategoryLabel } from '@/lib/utils'
import { createClient } from '@/lib/supabase'
import { toast } from 'sonner'

interface DayTaskListProps {
  day: RoadmapDay
  completedTasks: Set<string>
  isDemo?: boolean
  onTaskToggle?: (taskId: string, completed: boolean) => void
}

export default function DayTaskList({ 
  day, 
  completedTasks, 
  isDemo = false, 
  onTaskToggle 
}: DayTaskListProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [localCompletedTasks, setLocalCompletedTasks] = useState(completedTasks)
  const [loadingTasks, setLoadingTasks] = useState<Set<string>>(new Set())
  const supabase = createClient()
  
  const completedCount = day.tasks.filter(task => localCompletedTasks.has(task.id)).length
  const totalTasks = day.tasks.length
  const progressPercentage = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0
  
  // Group tasks by category
  const tasksByCategory = day.tasks.reduce((acc, task) => {
    if (!acc[task.category]) {
      acc[task.category] = []
    }
    acc[task.category].push(task)
    return acc
  }, {} as Record<TaskCategory, typeof day.tasks>)

  const handleTaskToggle = async (taskId: string, completed: boolean) => {
    console.log('Task toggle:', { taskId, completed, isDemo })
    
    if (isDemo) {
      // For demo mode, just call the callback
      if (onTaskToggle) {
        onTaskToggle(taskId, completed)
      }
      return
    }

    setLoadingTasks(prev => new Set(prev).add(taskId))
    
    // Optimistic update
    setLocalCompletedTasks(prev => {
      const newSet = new Set(prev)
      if (completed) {
        newSet.add(taskId)
      } else {
        newSet.delete(taskId)
      }
      return newSet
    })

    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        throw new Error('Not authenticated')
      }

      if (completed) {
        // Insert progress
        const { error } = await supabase
          .from('progress')
          .upsert({
            user_id: session.user.id,
            task_id: taskId,
            completed_at: new Date().toISOString()
          }, {
            onConflict: 'user_id,task_id'
          })

        if (error) throw error
        toast.success('Task completed!')
      } else {
        // Delete progress
        const { error } = await supabase
          .from('progress')
          .delete()
          .eq('user_id', session.user.id)
          .eq('task_id', taskId)

        if (error) throw error
        toast.success('Task unchecked!')
      }
    } catch (error: any) {
      // Revert optimistic update
      setLocalCompletedTasks(completedTasks)
      toast.error(error.message || 'Failed to update task')
      console.error('Error updating task:', error)
    } finally {
      setLoadingTasks(prev => {
        const newSet = new Set(prev)
        newSet.delete(taskId)
        return newSet
      })
    }
  }

  return (
    <Card className="border-l-4 border-l-blue-500">
      <CardHeader 
        className="cursor-pointer select-none pb-3"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
              <CardTitle className="text-base">{day.title}</CardTitle>
            </div>
            <Badge variant="outline" className="text-xs">
              {completedCount}/{totalTasks}
            </Badge>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium">{progressPercentage}%</div>
            <div className="text-xs text-muted-foreground">complete</div>
          </div>
        </div>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="pt-0">
          <div className="space-y-4">
            {Object.entries(tasksByCategory).map(([category, tasks]) => (
              <div key={category} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${getCategoryColor(category)}`} />
                  <h4 className="text-sm font-medium text-muted-foreground">
                    {getCategoryLabel(category)}
                  </h4>
                  <Badge variant="secondary" className="text-xs">
                    {tasks.filter(t => localCompletedTasks.has(t.id)).length}/{tasks.length}
                  </Badge>
                </div>
                
                <div className="space-y-2 pl-4">
                  {tasks.map((task) => {
                    const isCompleted = localCompletedTasks.has(task.id)
                    const isLoading = loadingTasks.has(task.id)
                    return (
                      <div
                        key={task.id}
                        className="flex items-center gap-3 rounded-md p-2 hover:bg-muted/50"
                      >
                        <Checkbox
                          id={`task-${task.id}`}
                          checked={isCompleted}
                          onCheckedChange={(checked) => {
                            const isChecked = checked === true
                            handleTaskToggle(task.id, isChecked)
                          }}
                          disabled={isLoading || (!onTaskToggle && !isDemo)}
                          className="pointer-events-auto"
                        />
                        <label 
                          htmlFor={`task-${task.id}`}
                          className={`flex-1 text-sm cursor-pointer ${isCompleted ? 'line-through text-muted-foreground' : ''}`}
                        >
                          {task.label}
                        </label>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: task.points }, (_, i) => (
                            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
                          {isLoading && (
                            <div className="h-3 w-3 animate-spin rounded-full border border-blue-600 border-t-transparent" />
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
            
          </div>
        </CardContent>
      )}
    </Card>
  )
}
