'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import WeekCapsule from '@/components/WeekCapsule'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useProgressStore } from '@/stores/useProgressStore'
import { RoadmapWeek } from '@/types'
import Link from 'next/link'
import { BookOpen, Target, Clock, Users } from 'lucide-react'

// Mock data for demo purposes
const mockWeeks: RoadmapWeek[] = [
  {
    id: '1',
    title: 'Week 1: Hiragana Basics (a-o)',
    order: 1,
    days: [
      {
        id: '1-1',
        week_id: '1',
        day_number: 1,
        title: 'Day 1: Hiragana あ-お',
        tasks: [
          { id: '1-1-1', day_id: '1-1', label: 'Learn hiragana あ (a)', category: 'hiragana', points: 1, created_at: '', updated_at: '' },
          { id: '1-1-2', day_id: '1-1', label: 'Learn hiragana い (i)', category: 'hiragana', points: 1, created_at: '', updated_at: '' },
          { id: '1-1-3', day_id: '1-1', label: 'Learn hiragana う (u)', category: 'hiragana', points: 1, created_at: '', updated_at: '' },
          { id: '1-1-4', day_id: '1-1', label: 'Learn hiragana え (e)', category: 'hiragana', points: 1, created_at: '', updated_at: '' },
          { id: '1-1-5', day_id: '1-1', label: 'Learn hiragana お (o)', category: 'hiragana', points: 1, created_at: '', updated_at: '' },
          { id: '1-1-6', day_id: '1-1', label: 'Practice writing あ-お', category: 'hiragana', points: 2, created_at: '', updated_at: '' },
          { id: '1-1-7', day_id: '1-1', label: 'Learn basic greetings', category: 'vocab', points: 1, created_at: '', updated_at: '' },
          { id: '1-1-8', day_id: '1-1', label: 'Learn numbers 1-10', category: 'vocab', points: 1, created_at: '', updated_at: '' },
          { id: '1-1-9', day_id: '1-1', label: 'Practice pronunciation', category: 'listening', points: 1, created_at: '', updated_at: '' },
          { id: '1-1-10', day_id: '1-1', label: 'Read simple sentences', category: 'reading', points: 1, created_at: '', updated_at: '' },
        ],
        created_at: '',
        updated_at: ''
      },
      {
        id: '1-2',
        week_id: '1',
        day_number: 2,
        title: 'Day 2: Hiragana か-こ',
        tasks: [
          { id: '1-2-1', day_id: '1-2', label: 'Learn hiragana か (ka)', category: 'hiragana', points: 1, created_at: '', updated_at: '' },
          { id: '1-2-2', day_id: '1-2', label: 'Learn hiragana き (ki)', category: 'hiragana', points: 1, created_at: '', updated_at: '' },
          { id: '1-2-3', day_id: '1-2', label: 'Learn hiragana く (ku)', category: 'hiragana', points: 1, created_at: '', updated_at: '' },
          { id: '1-2-4', day_id: '1-2', label: 'Learn hiragana け (ke)', category: 'hiragana', points: 1, created_at: '', updated_at: '' },
          { id: '1-2-5', day_id: '1-2', label: 'Learn hiragana こ (ko)', category: 'hiragana', points: 1, created_at: '', updated_at: '' },
          { id: '1-2-6', day_id: '1-2', label: 'Practice writing か-こ', category: 'hiragana', points: 2, created_at: '', updated_at: '' },
          { id: '1-2-7', day_id: '1-2', label: 'Learn family terms', category: 'vocab', points: 1, created_at: '', updated_at: '' },
          { id: '1-2-8', day_id: '1-2', label: 'Learn numbers 11-20', category: 'vocab', points: 1, created_at: '', updated_at: '' },
          { id: '1-2-9', day_id: '1-2', label: 'Practice listening exercises', category: 'listening', points: 1, created_at: '', updated_at: '' },
          { id: '1-2-10', day_id: '1-2', label: 'Read basic phrases', category: 'reading', points: 1, created_at: '', updated_at: '' },
        ],
        created_at: '',
        updated_at: ''
      }
    ],
    created_at: '',
    updated_at: ''
  },
  {
    id: '2',
    title: 'Week 2: Hiragana (ka-ko)',
    order: 2,
    days: [
      {
        id: '2-1',
        week_id: '2',
        day_number: 1,
        title: 'Day 1: Hiragana さ-そ',
        tasks: [
          { id: '2-1-1', day_id: '2-1', label: 'Learn hiragana さ (sa)', category: 'hiragana', points: 1, created_at: '', updated_at: '' },
          { id: '2-1-2', day_id: '2-1', label: 'Learn hiragana し (shi)', category: 'hiragana', points: 1, created_at: '', updated_at: '' },
          { id: '2-1-3', day_id: '2-1', label: 'Learn hiragana す (su)', category: 'hiragana', points: 1, created_at: '', updated_at: '' },
          { id: '2-1-4', day_id: '2-1', label: 'Learn hiragana せ (se)', category: 'hiragana', points: 1, created_at: '', updated_at: '' },
          { id: '2-1-5', day_id: '2-1', label: 'Learn hiragana そ (so)', category: 'hiragana', points: 1, created_at: '', updated_at: '' },
          { id: '2-1-6', day_id: '2-1', label: 'Practice writing さ-そ', category: 'hiragana', points: 2, created_at: '', updated_at: '' },
          { id: '2-1-7', day_id: '2-1', label: 'Learn colors', category: 'vocab', points: 1, created_at: '', updated_at: '' },
          { id: '2-1-8', day_id: '2-1', label: 'Learn basic verbs', category: 'vocab', points: 1, created_at: '', updated_at: '' },
          { id: '2-1-9', day_id: '2-1', label: 'Practice listening', category: 'listening', points: 1, created_at: '', updated_at: '' },
          { id: '2-1-10', day_id: '2-1', label: 'Read simple texts', category: 'reading', points: 1, created_at: '', updated_at: '' },
        ],
        created_at: '',
        updated_at: ''
      }
    ],
    created_at: '',
    updated_at: ''
  }
]

export default function HomePage() {
  const { loadDemoData, isDemo, toggleTask } = useProgressStore()

  useEffect(() => {
    loadDemoData()
  }, [loadDemoData])

  const handleTaskToggle = (taskId: string, completed: boolean) => {
    toggleTask(taskId, completed)
  }

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Demo Mode Notice */}
      {isDemo && (
        <div className="bg-blue-50 border-b border-blue-200 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">
                  Demo Mode - Your progress is saved locally
                </span>
              </div>
              <Button asChild size="sm" variant="outline">
                <Link href="/auth">Sign up to save progress</Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Roadmap Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              20-Week Study Roadmap
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow our structured curriculum designed by Japanese language experts. 
              Each week builds upon the previous one, ensuring steady progress.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader className="pb-2">
                <Target className="h-8 w-8 text-blue-600 mx-auto" />
                <CardTitle className="text-2xl">1,400</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Total Tasks</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="pb-2">
                <Clock className="h-8 w-8 text-green-600 mx-auto" />
                <CardTitle className="text-2xl">20</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Weeks</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="pb-2">
                <BookOpen className="h-8 w-8 text-purple-600 mx-auto" />
                <CardTitle className="text-2xl">6</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Categories</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="pb-2">
                <Users className="h-8 w-8 text-orange-600 mx-auto" />
                <CardTitle className="text-2xl">140</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Days</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Week Capsules Preview */}
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Study Weeks</h3>
              <Button asChild>
                <Link href="/roadmap">View Full Roadmap</Link>
              </Button>
            </div>
            
            {mockWeeks.map((week) => (
              <WeekCapsule
                key={week.id}
                week={week}
                isDemo={isDemo}
                onTaskToggle={handleTaskToggle}
              />
            ))}
            
            <Card className="border-dashed border-2 border-gray-300">
              <CardContent className="flex items-center justify-center py-8">
                <div className="text-center">
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-600 mb-2">
                    And 18 more weeks...
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Complete roadmap with hiragana, katakana, vocabulary, grammar, listening, and reading
                  </p>
                  <Button asChild>
                    <Link href="/roadmap">View Complete Roadmap</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Roadmap?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our curriculum is designed by Japanese language experts and tested by thousands of students.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Structured Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Each week builds upon the previous one, ensuring you master each concept before moving on.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Comprehensive Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Covers all JLPT N5 topics: hiragana, katakana, vocabulary, grammar, listening, and reading.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Visual charts and analytics help you stay motivated and track your improvement over time.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
