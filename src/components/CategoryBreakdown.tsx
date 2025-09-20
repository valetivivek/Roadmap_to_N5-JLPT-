'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'
import { PieChart as PieChartIcon } from 'lucide-react'
import { UserProgress, TaskCategory } from '@/types'
import { getCategoryColor, getCategoryLabel } from '@/lib/utils'

interface CategoryBreakdownProps {
  userProgress: UserProgress
  className?: string
  chartType?: 'pie' | 'bar'
}

export default function CategoryBreakdown({ 
  userProgress, 
  className = "",
  chartType = 'pie'
}: CategoryBreakdownProps) {
  const data = userProgress.categoryProgress.map(category => ({
    name: getCategoryLabel(category.category),
    value: category.completed,
    total: category.total,
    percentage: category.percentage,
    category: category.category
  }))

  const colors = {
    hiragana: '#3b82f6',
    katakana: '#10b981',
    vocab: '#8b5cf6',
    grammar: '#f59e0b',
    listening: '#ec4899',
    reading: '#6366f1'
  }

  const pieData = data.map(item => ({
    ...item,
    fill: colors[item.category as TaskCategory]
  }))

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="rounded-lg border bg-background p-3 shadow-md">
          <p className="font-medium">{data.name}</p>
          <p className="text-sm text-muted-foreground">
            Completed: {data.value}/{data.total} tasks
          </p>
          <p className="text-sm text-muted-foreground">
            Progress: {data.percentage}%
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center gap-2">
          <PieChartIcon className="h-5 w-5 text-purple-600" />
          <CardTitle className="text-lg">Progress by Category</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === 'pie' ? (
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  formatter={(value, entry) => (
                    <span style={{ color: entry.color }}>
                      {value}
                    </span>
                  )}
                />
              </PieChart>
            ) : (
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" fill="#3b82f6" />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
        
        {/* Category list */}
        <div className="mt-4 space-y-2">
          {data.map((item) => (
            <div key={item.category} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div 
                  className="h-3 w-3 rounded-full" 
                  style={{ backgroundColor: colors[item.category as TaskCategory] }}
                />
                <span className="text-sm font-medium">{item.name}</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">{item.value}/{item.total}</div>
                <div className="text-xs text-muted-foreground">{item.percentage}%</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
