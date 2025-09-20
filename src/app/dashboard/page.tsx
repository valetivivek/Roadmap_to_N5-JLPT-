'use client'

import { useEffect, useState } from 'react'
import Protected from '@/components/Protected'
import ProgressBar from '@/components/ProgressBar'
import WeeklyTrend from '@/components/WeeklyTrend'
import CategoryBreakdown from '@/components/CategoryBreakdown'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useProgressStore } from '@/stores/useProgressStore'
import { UserProgress } from '@/types'
import { 
  Target, 
  TrendingUp, 
  Calendar, 
  Award, 
  BookOpen,
  Clock,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const { userProgress, isDemo, loadDemoData } = useProgressStore()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadDemoData()
    setIsLoading(false)
  }, [loadDemoData])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  const mockUserProgress: UserProgress = userProgress || {
    totalTasks: 1400,
    completedTasks: 45,
    completionPercentage: 3,
    weeklyProgress: Array.from({ length: 20 }, (_, i) => ({
      week: i + 1,
      completed: Math.floor(Math.random() * 10),
      total: 70
    })),
    categoryProgress: [
      { category: 'hiragana', completed: 20, total: 233, percentage: 9 },
      { category: 'katakana', completed: 0, total: 233, percentage: 0 },
      { category: 'vocab', completed: 15, total: 233, percentage: 6 },
      { category: 'grammar', completed: 5, total: 233, percentage: 2 },
      { category: 'listening', completed: 3, total: 233, percentage: 1 },
      { category: 'reading', completed: 2, total: 233, percentage: 1 },
    ],
    currentStreak: 3,
    longestStreak: 7
  }

  return (
    <Protected>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-2">
                  Track your JLPT N5 study progress
                </p>
              </div>
              <div className="flex items-center gap-4">
                {isDemo && (
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">
                    Demo Mode
                  </Badge>
                )}
                <Button asChild>
                  <Link href="/roadmap">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Continue Studying
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Progress</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockUserProgress.completionPercentage}%</div>
                <p className="text-xs text-muted-foreground">
                  {mockUserProgress.completedTasks} of {mockUserProgress.totalTasks} tasks
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockUserProgress.currentStreak} days</div>
                <p className="text-xs text-muted-foreground">
                  Best: {mockUserProgress.longestStreak} days
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">This Week</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {mockUserProgress.weeklyProgress[mockUserProgress.weeklyProgress.length - 1]?.completed || 0}
                </div>
                <p className="text-xs text-muted-foreground">
                  tasks completed
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Time Invested</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {Math.round(mockUserProgress.completedTasks * 15 / 60)}h
                </div>
                <p className="text-xs text-muted-foreground">
                  estimated study time
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Progress Bar */}
          <div className="mb-8">
            <ProgressBar
              completed={mockUserProgress.completedTasks}
              total={mockUserProgress.totalTasks}
              title="Overall Progress"
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <WeeklyTrend userProgress={mockUserProgress} />
            <CategoryBreakdown userProgress={mockUserProgress} />
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Recent Achievements
                </CardTitle>
                <CardDescription>
                  Your latest milestones and accomplishments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Award className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">First Week Complete!</p>
                      <p className="text-sm text-muted-foreground">
                        Completed all tasks in Week 1
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Target className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Hiragana Master</p>
                      <p className="text-sm text-muted-foreground">
                        Completed 20 hiragana tasks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="font-medium">3-Day Streak</p>
                      <p className="text-sm text-muted-foreground">
                        Keep up the great work!
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  Quick Actions
                </CardTitle>
                <CardDescription>
                  Continue your learning journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button asChild className="w-full justify-start">
                    <Link href="/roadmap">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Continue with Roadmap
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start">
                    <Link href="/profile">
                      <Target className="h-4 w-4 mr-2" />
                      View Profile
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start">
                    <Link href="/settings">
                      <Calendar className="h-4 w-4 mr-2" />
                      Settings
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Protected>
  )
}
