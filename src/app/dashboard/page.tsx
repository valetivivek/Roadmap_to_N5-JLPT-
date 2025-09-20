'use client'

import { useEffect, useState } from 'react'
import Protected from '@/components/Protected'
import ProgressBar from '@/components/ProgressBar'
import WeeklyTrend from '@/components/WeeklyTrend'
import CategoryBreakdown from '@/components/CategoryBreakdown'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { useProgressStore } from '@/stores/useProgressStore'
import { UserProgress } from '@/types'
import { createClient } from '@/lib/supabase'
import { 
  Target, 
  TrendingUp, 
  Calendar, 
  Award, 
  BookOpen,
  Clock,
  CheckCircle,
  Mail,
  Loader2
} from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const { userProgress, isDemo, loadDemoData } = useProgressStore()
  const [isLoading, setIsLoading] = useState(true)
  const [realUserProgress, setRealUserProgress] = useState<UserProgress | null>(null)
  const [user, setUser] = useState<any>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showAuth, setShowAuth] = useState(false)
  const [email, setEmail] = useState('')
  const [authMessage, setAuthMessage] = useState('')
  const [authLoading, setAuthLoading] = useState(false)
  const supabase = createClient()

  useEffect(() => {
    const loadUserProgress = async () => {
      try {
        // Check if user is authenticated
        const { data: { session } } = await supabase.auth.getSession()
        
        if (session?.user) {
          setUser(session.user)
          setIsAuthenticated(true)
          // Load real user progress from database
          const { data: progress } = await supabase
            .from('progress')
            .select(`
              *,
              tasks (
                id,
                category,
                points
              )
            `)
            .eq('user_id', session.user.id)

          // Calculate user progress
          const totalTasks = 1400 // Total tasks in roadmap
          const completedTasks = progress?.length || 0
          const completionPercentage = Math.round((completedTasks / totalTasks) * 100)

          // Calculate category progress
          const categoryProgress = [
            'hiragana', 'katakana', 'vocab', 'grammar', 'listening', 'reading'
          ].map(category => {
            const categoryTasks = progress?.filter(p => p.tasks?.category === category) || []
            const completed = categoryTasks.length
            const total = 233 // Approximate tasks per category
            return {
              category: category as any,
              completed,
              total,
              percentage: Math.round((completed / total) * 100)
            }
          })

          setRealUserProgress({
            totalTasks,
            completedTasks,
            completionPercentage,
            weeklyProgress: Array.from({ length: 20 }, (_, i) => ({
              week: i + 1,
              completed: Math.floor(Math.random() * 10), // This should be calculated from real data
              total: 70
            })),
            categoryProgress,
            currentStreak: 3, // This should be calculated from real data
            longestStreak: 7
          })
        } else {
          setIsAuthenticated(false)
          // Load demo data if not authenticated
          loadDemoData()
        }
      } catch (error) {
        console.error('Error loading user progress:', error)
        // Fallback to demo data
        loadDemoData()
      } finally {
        setIsLoading(false)
      }
    }

    loadUserProgress()
  }, [loadDemoData, supabase.auth])

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setAuthLoading(true)
    setAuthMessage('')

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
        },
      })
      
      if (error) throw error
      
      setAuthMessage('Check your email for the login link!')
    } catch (error: any) {
      setAuthMessage(error.message)
    } finally {
      setAuthLoading(false)
    }
  }

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

  const displayProgress: UserProgress = realUserProgress || userProgress || {
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
                {!isAuthenticated && (
                  <Button 
                    variant="outline" 
                    onClick={() => setShowAuth(!showAuth)}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                )}
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

          {/* Authentication Form */}
          {showAuth && !isAuthenticated && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Sign In to Sync Your Progress</CardTitle>
                <CardDescription>
                  Create an account to save your progress across devices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAuth} className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  {authMessage && (
                    <Alert>
                      <AlertDescription>{authMessage}</AlertDescription>
                    </Alert>
                  )}

                  <div className="flex gap-2">
                    <Button type="submit" disabled={authLoading}>
                      {authLoading ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Mail className="h-4 w-4 mr-2" />
                          Send Magic Link
                        </>
                      )}
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setShowAuth(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Progress</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{displayProgress.completionPercentage}%</div>
                <p className="text-xs text-muted-foreground">
                  {displayProgress.completedTasks} of {displayProgress.totalTasks} tasks
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{displayProgress.currentStreak} days</div>
                <p className="text-xs text-muted-foreground">
                  Best: {displayProgress.longestStreak} days
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
                  {displayProgress.weeklyProgress[displayProgress.weeklyProgress.length - 1]?.completed || 0}
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
                  {Math.round(displayProgress.completedTasks * 15 / 60)}h
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
              completed={displayProgress.completedTasks}
              total={displayProgress.totalTasks}
              title="Overall Progress"
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <WeeklyTrend userProgress={displayProgress} />
            <CategoryBreakdown userProgress={displayProgress} />
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
