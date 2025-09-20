'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronRight, Star } from 'lucide-react'
import { RoadmapDay, TaskCategory } from '@/types'
import { getCategoryColor, getCategoryLabel } from '@/lib/utils'

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
  
  const completedCount = day.tasks.filter(task => completedTasks.has(task.id)).length
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

  const handleTaskToggle = (taskId: string, completed: boolean) => {
    if (onTaskToggle) {
      onTaskToggle(taskId, completed)
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
                    {tasks.filter(t => completedTasks.has(t.id)).length}/{tasks.length}
                  </Badge>
                </div>
                
                <div className="space-y-2 pl-4">
                  {tasks.map((task) => {
                    const isCompleted = completedTasks.has(task.id)
                    return (
                      <div
                        key={task.id}
                        className="flex items-center gap-3 rounded-md p-2 hover:bg-muted/50"
                      >
                        <Checkbox
                          checked={isCompleted}
                          onCheckedChange={(checked) => 
                            handleTaskToggle(task.id, checked as boolean)
                          }
                          disabled={!onTaskToggle}
                        />
                        <span className={`flex-1 text-sm ${isCompleted ? 'line-through text-muted-foreground' : ''}`}>
                          {task.label}
                        </span>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: task.points }, (_, i) => (
                            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
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
