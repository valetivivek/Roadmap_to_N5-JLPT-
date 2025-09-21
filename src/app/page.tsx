'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useProgressStore } from '@/stores/useProgressStore'
import Link from 'next/link'
import { BookOpen, Target, Calendar, CheckCircle, Circle, ArrowRight, Award, Clock } from 'lucide-react'

// Generate 20 weeks with proper hiragana progression (8 per day)
const generateWeeks = () => {
  const weeks = []
  const hiraganaGroups = [
    ['あ-お', 'か-こ', 'さ-そ', 'た-と', 'な-の', 'は-ほ', 'ま-も'],
    ['や-よ', 'ら-ろ', 'わ-ん', 'が-ご', 'ざ-ぞ', 'だ-ど', 'ば-ぼ'],
    ['ぱ-ぽ', 'きゃ-きょ', 'しゃ-しょ', 'ちゃ-ちょ', 'にゃ-にょ', 'ひゃ-ひょ', 'みゃ-みょ'],
    ['りゃ-りょ', 'ぎゃ-ぎょ', 'じゃ-じょ', 'びゃ-びょ', 'ぴゃ-ぴょ', 'く-く', 'ぐ-ぐ'],
    ['す-す', 'ず-ず', 'つ-つ', 'づ-づ', 'ぬ-ぬ', 'ふ-ふ', 'ぶ-ぶ'],
    ['ぷ-ぷ', 'む-む', 'ゆ-ゆ', 'よ-よ', 'る-る', 'わ-わ', 'を-を'],
    ['ん-ん', 'っ-っ', 'ー-ー', '、-、', '。-。', '？-？', '！-！'],
    ['あ-お', 'か-こ', 'さ-そ', 'た-と', 'な-の', 'は-ほ', 'ま-も'],
    ['や-よ', 'ら-ろ', 'わ-ん', 'が-ご', 'ざ-ぞ', 'だ-ど', 'ば-ぼ'],
    ['ぱ-ぽ', 'きゃ-きょ', 'しゃ-しょ', 'ちゃ-ちょ', 'にゃ-にょ', 'ひゃ-ひょ', 'みゃ-みょ']
  ]

  for (let week = 1; week <= 20; week++) {
    const isHiraganaWeek = week <= 10
    const groupIndex = (week - 1) % 10
    const hiraganaGroup = hiraganaGroups[groupIndex]
    
    const weekTitle = isHiraganaWeek 
      ? `Week ${week}: Hiragana ${hiraganaGroup[0]}`
      : `Week ${week}: Katakana ${hiraganaGroup[0]}`

    weeks.push({
      id: week.toString(),
      title: weekTitle,
      order: week,
      hiraganaGroup: hiraganaGroup[0],
      isCompleted: false,
      progress: 0
    })
  }
  
  return weeks
}

export default function HomePage() {
  const { loadDemoData, isDemo, progress } = useProgressStore()
  const [weeks] = useState(generateWeeks())

  useEffect(() => {
    loadDemoData()
  }, [loadDemoData])

  // Calculate progress for each week
  const weeksWithProgress = weeks.map(week => {
    const weekTasks = 70 // 10 tasks per day × 7 days
    const completedTasks = progress.filter(p => 
      p.task_id.startsWith(`${week.id}-`)
    ).length
    const progressPercentage = Math.round((completedTasks / weekTasks) * 100)
    
    return {
      ...week,
      progress: progressPercentage,
      isCompleted: progressPercentage === 100
    }
  })

  const totalProgress = Math.round(
    weeksWithProgress.reduce((sum, week) => sum + week.progress, 0) / 20
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              JLPT N5 Study Roadmap
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Master Japanese in 20 weeks with 8 hiragana per day
            </p>
            
            {/* Overall Progress */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                <span className="text-sm font-medium text-gray-700">{totalProgress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${totalProgress}%` }}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/roadmap">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Start Learning
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/dashboard">
                  <Target className="h-5 w-5 mr-2" />
                  View Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Calendar */}
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-blue-600" />
              Study Progress Calendar
            </CardTitle>
            <CardDescription>
              Track your weekly progress through the 20-week curriculum
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {weeksWithProgress.map((week) => (
                <Card 
                  key={week.id} 
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    week.isCompleted 
                      ? 'bg-green-50 border-green-200' 
                      : week.progress > 0 
                        ? 'bg-blue-50 border-blue-200' 
                        : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      {week.isCompleted ? (
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      ) : week.progress > 0 ? (
                        <Circle className="h-6 w-6 text-blue-600" />
                      ) : (
                        <Circle className="h-6 w-6 text-gray-400" />
                      )}
                    </div>
                    <div className="text-sm font-medium text-gray-900 mb-1">
                      Week {week.order}
                    </div>
                    <div className="text-xs text-gray-600 mb-2">
                      {week.hiraganaGroup}
                    </div>
                    <div className="text-xs text-gray-500">
                      {week.progress}%
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-blue-600 mb-1">20</div>
              <div className="text-sm text-gray-600">Weeks</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-green-600 mb-1">140</div>
              <div className="text-sm text-gray-600">Days</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-purple-600 mb-1">1,120</div>
              <div className="text-sm text-gray-600">Hiragana Tasks</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-orange-600 mb-1">280</div>
              <div className="text-sm text-gray-600">Other Tasks</div>
            </CardContent>
          </Card>
        </div>

        {/* Demo Mode Notice */}
        {isDemo && (
          <Card className="mt-8 bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">
                    Demo Mode - Your progress is saved locally
                  </span>
                </div>
                <Button asChild size="sm" variant="outline">
                  <Link href="/auth/signup">Sign up to save progress</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
