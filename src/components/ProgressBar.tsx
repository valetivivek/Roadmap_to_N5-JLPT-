'use client'

import { Progress } from '@/components/ui/progress'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Target, CheckCircle } from 'lucide-react'

interface ProgressBarProps {
  completed: number
  total: number
  title?: string
  showPercentage?: boolean
  className?: string
}

export default function ProgressBar({ 
  completed, 
  total, 
  title = "Progress",
  showPercentage = true,
  className = ""
}: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-600" />
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          {showPercentage && (
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{percentage}%</div>
              <div className="text-sm text-muted-foreground">
                {completed} of {total} tasks
              </div>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <Progress value={percentage} className="h-3" />
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-muted-foreground">
                {completed} completed
              </span>
            </div>
            <div className="text-muted-foreground">
              {total - completed} remaining
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
