'use client'

import dynamic from 'next/dynamic'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PieChart as PieChartIcon } from 'lucide-react'
import { UserProgress } from '@/types'

// Dynamically import the chart component to avoid SSR issues
const CategoryBreakdownChart = dynamic(() => import('./CategoryBreakdown'), {
  ssr: false,
  loading: () => (
    <div className="h-64 w-full flex items-center justify-center">
      <div className="text-muted-foreground">Loading chart...</div>
    </div>
  )
})

interface DynamicCategoryBreakdownProps {
  userProgress: UserProgress
  className?: string
  chartType?: 'pie' | 'bar'
}

export default function DynamicCategoryBreakdown({ 
  userProgress, 
  className = "",
  chartType = 'pie'
}: DynamicCategoryBreakdownProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center gap-2">
          <PieChartIcon className="h-5 w-5 text-purple-600" />
          <CardTitle className="text-lg">Progress by Category</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CategoryBreakdownChart userProgress={userProgress} chartType={chartType} />
      </CardContent>
    </Card>
  )
}
