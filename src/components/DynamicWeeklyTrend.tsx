'use client'

import dynamic from 'next/dynamic'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp } from 'lucide-react'
import { UserProgress } from '@/types'

// Dynamically import the chart component to avoid SSR issues
const WeeklyTrendChart = dynamic(() => import('./WeeklyTrend'), {
  ssr: false,
  loading: () => (
    <div className="h-64 w-full flex items-center justify-center">
      <div className="text-muted-foreground">Loading chart...</div>
    </div>
  )
})

interface DynamicWeeklyTrendProps {
  userProgress: UserProgress
  className?: string
}

export default function DynamicWeeklyTrend({ userProgress, className = "" }: DynamicWeeklyTrendProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-green-600" />
          <CardTitle className="text-lg">Weekly Progress Trend</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <WeeklyTrendChart userProgress={userProgress} />
      </CardContent>
    </Card>
  )
}
