'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { ChevronDown, ChevronRight, Calendar, Target } from 'lucide-react'
import { RoadmapWeek, UserProgress } from '@/types'
import DayTaskList from './DayTaskList'
import { completeJLPTN5Curriculum } from '@/data/jlptN5Curriculum'
import { ExternalLink, Globe, Video, FileText, FileDown } from 'lucide-react'
import { useProgressStore } from '@/stores/useProgressStore'

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
  
  // Get week resources from curriculum
  const weekData = completeJLPTN5Curriculum.find(w => w.weekNumber === week.order)
  const weekResources = weekData?.resources || []
  
  // Get completed task IDs from progress store
  const { progress, isDemo: storeIsDemo } = useProgressStore()
  const allCompletedTaskIds = new Set(progress.map(p => p.task_id))
  
  // Filter to only tasks in this week
  const weekTaskIds = new Set<string>()
  week.days.forEach(day => {
    day.tasks.forEach(task => {
      weekTaskIds.add(task.id)
    })
  })
  
  const completedTaskIds = new Set(
    Array.from(allCompletedTaskIds).filter(taskId => weekTaskIds.has(taskId))
  )

  // Calculate week progress
  const totalTasks = week.days.reduce((sum, day) => sum + day.tasks.length, 0)
  const completedTasks = completedTaskIds.size
  const progressPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0
  const isWeekCompleted = progressPercentage === 100

  const getWeekStatus = () => {
    if (isWeekCompleted) return 'completed'
    if (progressPercentage >= 50) return 'almost-complete'
    if (progressPercentage > 0) return 'in-progress'
    return 'not-started'
  }

  const status = getWeekStatus()
  const statusColors = {
    completed: 'bg-green-500',
    'almost-complete': 'bg-yellow-500',
    'in-progress': 'bg-blue-500',
    'not-started': 'bg-gray-300'
  }

  const statusLabels = {
    completed: 'Completed',
    'almost-complete': 'Almost Complete',
    'in-progress': 'In Progress',
    'not-started': 'Not Started'
  }

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'site': return <Globe className="h-4 w-4" />
      case 'video': return <Video className="h-4 w-4" />
      case 'pdf': return <FileText className="h-4 w-4" />
      case 'audio': return <FileDown className="h-4 w-4" />
      default: return <FileText className="h-4 w-4" />
    }
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
            <Badge className="ml-2 bg-gray-100 text-gray-800">
              Week {week.order}
            </Badge>
            <Badge className={`${
              status === 'completed' ? 'bg-green-100 text-green-800' :
              status === 'almost-complete' ? 'bg-yellow-100 text-yellow-800' :
              status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {status === 'completed' ? '✓ ' : ''}{statusLabels[status]}
            </Badge>
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
          {/* Week Resources */}
          {weekResources.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Week Resources</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {weekResources.map((resource, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    {getResourceIcon(resource.type)}
                    <div className="flex-1 min-w-0">
                      <h5 className="font-medium text-gray-900 truncate">{resource.title}</h5>
                      {resource.description && (
                        <p className="text-sm text-gray-600 truncate">{resource.description}</p>
                      )}
                    </div>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-1 hover:bg-gray-200 rounded"
                    >
                      <ExternalLink className="h-4 w-4 text-gray-500" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Daily Tasks */}
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
