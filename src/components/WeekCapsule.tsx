'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { ChevronDown, ChevronRight, Calendar, Target } from 'lucide-react'
import { RoadmapWeek, UserProgress } from '@/types'
import DayTaskList from './DayTaskList'

interface WeekCapsuleProps {
  week: RoadmapWeek
  userProgress?: UserProgress
  isDemo?: boolean
  onTaskToggle?: (taskId: string, completed: boolean) => void
}

export default function WeekCapsule({ 
  week, 
  userProgress, 
  isDemo = false, 
  onTaskToggle 
}: WeekCapsuleProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  // Get completed task IDs for this week
  const completedTaskIds = new Set<string>()
  if (isDemo) {
    // In demo mode, get from localStorage or store
    const demoData = typeof window !== 'undefined' 
      ? localStorage.getItem('jlpt-n5-demo-data') 
      : null
    if (demoData) {
      try {
        const parsed = JSON.parse(demoData)
        parsed.progress?.forEach((p: any) => {
          week.days.forEach(day => {
            day.tasks.forEach(task => {
              if (task.id === p.task_id) {
                completedTaskIds.add(task.id)
              }
            })
          })
        })
      } catch (error) {
        console.error('Failed to parse demo data:', error)
      }
    }
  }

  // Calculate week progress
  const totalTasks = week.days.reduce((sum, day) => sum + day.tasks.length, 0)
  const completedTasks = completedTaskIds.size
  const progressPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0
  const isWeekCompleted = progressPercentage === 100

  const getWeekStatus = () => {
    if (isWeekCompleted) return 'completed'
    if (progressPercentage > 0) return 'in-progress'
    return 'not-started'
  }

  const status = getWeekStatus()
  const statusColors = {
    completed: 'bg-green-500',
    'in-progress': 'bg-blue-500',
    'not-started': 'bg-gray-300'
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader 
        className="cursor-pointer select-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`h-3 w-3 rounded-full ${statusColors[status]}`} />
            <CardTitle className="text-lg">{week.title}</CardTitle>
            <Badge variant="secondary" className="ml-2">
              Week {week.order}
            </Badge>
            {isWeekCompleted && (
              <Badge className="bg-green-100 text-green-800">
                ✓ Completed
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2">
            <div className="text-right">
              <div className="text-sm font-medium">
                {completedTasks}/{totalTasks} tasks
              </div>
              <div className="text-xs text-muted-foreground">
                {progressPercentage}% complete
              </div>
            </div>
            {isExpanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{week.days.length} days</span>
            <Target className="h-4 w-4 ml-2" />
            <span>{totalTasks} tasks</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="pt-0">
          <div className="space-y-4">
            {week.days.map((day) => (
              <DayTaskList
                key={day.id}
                day={day}
                completedTasks={completedTaskIds}
                isDemo={isDemo}
                onTaskToggle={onTaskToggle}
              />
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  )
}
