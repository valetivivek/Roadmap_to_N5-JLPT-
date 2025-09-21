'use client'

import { useEffect, useState, useCallback } from 'react'
import WeekCapsule from '@/components/WeekCapsule'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useProgressStore } from '@/stores/useProgressStore'
import { RoadmapWeek, TaskCategory } from '@/types'
import { BookOpen, Target, Calendar, Award } from 'lucide-react'

// Import the comprehensive JLPT N5 curriculum
import { completeJLPTN5Curriculum } from '@/data/jlptN5Curriculum'

// Convert curriculum to roadmap format
const generateRoadmap = (): RoadmapWeek[] => {
  return completeJLPTN5Curriculum.map(week => ({
    id: week.id,
    title: week.title,
    order: week.weekNumber,
    days: week.days.map(day => ({
      id: day.id,
      week_id: week.id,
      day_number: parseInt(day.id.split('-').pop() || '1'),
      title: day.title,
      tasks: day.tasks.map(task => ({
        id: task.id,
        day_id: day.id,
        label: task.label,
        category: task.category,
        points: task.points,
        created_at: '',
        updated_at: ''
      })),
      created_at: '',
      updated_at: ''
    })),
    created_at: '',
    updated_at: ''
  }))
}


// Group weeks in pairs for better organization
const groupWeeksInPairs = (weeks: RoadmapWeek[]) => {
  const groupedWeeks = []
  for (let i = 0; i < weeks.length; i += 2) {
    const week1 = weeks[i]
    const week2 = weeks[i + 1]
    
    groupedWeeks.push({
      id: `group-${Math.floor(i / 2) + 1}`,
      title: week2 ? `Weeks ${week1.order}-${week2.order}` : `Week ${week1.order}`,
      weeks: week2 ? [week1, week2] : [week1],
      phase: week1.order <= 10 ? 'Hiragana' : 'Katakana'
    })
  }
  return groupedWeeks
}

export default function RoadmapPage() {
  const { isDemo, toggleTask, loadDemoData } = useProgressStore()
  const [roadmap, setRoadmap] = useState<RoadmapWeek[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchRoadmapData = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)

      // If in demo mode, use generated data
      if (isDemo) {
        setRoadmap(generateRoadmap())
        setIsLoading(false)
        return
      }

      // Try to fetch real data from Supabase
      const { createClient } = await import('@/lib/supabase')
      const supabase = createClient()

      const { data: weeks, error: weeksError } = await supabase
        .from('roadmap_weeks')
        .select(`
          *,
          days:roadmap_days(
            *,
            tasks(*)
          )
        `)
        .order('order')

      if (weeksError) {
        console.error('Error fetching roadmap:', weeksError)
        // Fallback to generated data if database fetch fails
        setRoadmap(generateRoadmap())
      } else if (weeks && weeks.length > 0) {
        setRoadmap(weeks)
      } else {
        // No data in database, use generated data
        setRoadmap(generateRoadmap())
      }
    } catch (err: any) {
      console.error('Failed to fetch roadmap:', err)
      setError(err.message)
      // Fallback to generated data
      setRoadmap(generateRoadmap())
    } finally {
      setIsLoading(false)
    }
  }, [isDemo])

  useEffect(() => {
    loadDemoData()
    fetchRoadmapData()
  }, [loadDemoData, fetchRoadmapData, isDemo])

  const handleTaskToggle = (taskId: string, completed: boolean) => {
    toggleTask(taskId, completed)
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading roadmap...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-red-600">Error Loading Roadmap</CardTitle>
            <CardDescription>{error}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={fetchRoadmapData} className="w-full">
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const groupedWeeks = groupWeeksInPairs(roadmap)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">JLPT N5 Study Roadmap</h1>
              <p className="text-gray-600 mt-2">
                Complete 20-week curriculum covering all JLPT N5 areas: hiragana, katakana, grammar, vocabulary, reading, and listening
              </p>
            </div>
            <div className="flex items-center gap-4">
              {isDemo && (
                <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                  Demo Mode
                </Badge>
              )}
              <Button asChild>
                <a href="/dashboard">
                  <Target className="h-4 w-4 mr-2" />
                  View Dashboard
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Roadmap Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              Roadmap Overview
            </CardTitle>
            <CardDescription>
              Comprehensive 20-week JLPT N5 curriculum with progressive learning across all skill areas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">20</div>
                <div className="text-sm text-muted-foreground">Weeks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">140</div>
                <div className="text-sm text-muted-foreground">Days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">800+</div>
                <div className="text-sm text-muted-foreground">Grammar Tasks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">600+</div>
                <div className="text-sm text-muted-foreground">Vocabulary Tasks</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Study Phases */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Study Phases</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  Phase 1: Scripts (Weeks 1-4)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Master hiragana and katakana with proper stroke order and pronunciation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-green-200 bg-green-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="h-5 w-5 text-green-600" />
                  Phase 2: Grammar (Weeks 5-12)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Learn essential grammar patterns, particles, and sentence structures.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-purple-600" />
                  Phase 3: Skills (Weeks 13-16)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Develop reading and listening comprehension skills with practical exercises.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="h-5 w-5 text-orange-600" />
                  Phase 4: JLPT Prep (Weeks 17-20)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Final preparation with practice tests and comprehensive review.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Grouped Week Capsules */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6">Study Weeks</h2>
          {groupedWeeks.map((group) => (
            <Card key={group.id} className="overflow-hidden">
              <CardHeader className="bg-gray-50">
                <CardTitle className="flex items-center gap-2">
                  <div className={`h-3 w-3 rounded-full ${
                    group.phase === 'Hiragana' ? 'bg-blue-500' : 'bg-green-500'
                  }`} />
                  {group.title} - {group.phase}
                </CardTitle>
                <CardDescription>
                  {group.weeks.length === 2 
                    ? `Complete both weeks to master ${group.phase} fundamentals`
                    : `Final week of ${group.phase} mastery`
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {group.weeks.map((week) => (
                    <div key={week.id} className="border-r last:border-r-0">
                      <WeekCapsule
                        week={week}
                        isDemo={isDemo}
                        onTaskToggle={handleTaskToggle}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="text-center py-12">
            <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Pass JLPT N5?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Follow our comprehensive 20-week curriculum covering all JLPT N5 areas. 
              Master hiragana, katakana, grammar, vocabulary, reading, and listening!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="text-lg px-8 py-3">
                <BookOpen className="h-5 w-5 mr-2" />
                Start Learning
              </Button>
              <Button className="text-lg px-8 py-3 bg-white text-blue-600 border border-blue-200 hover:bg-blue-50">
                <Target className="h-5 w-5 mr-2" />
                View Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
