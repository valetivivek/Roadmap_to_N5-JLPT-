'use client'

import { useEffect, useState } from 'react'
import WeekCapsule from '@/components/WeekCapsule'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useProgressStore } from '@/stores/useProgressStore'
import { RoadmapWeek } from '@/types'
import { BookOpen, Target, Calendar, Award } from 'lucide-react'

// Mock data for the complete 20-week roadmap
const generateMockRoadmap = (): RoadmapWeek[] => {
  const weeks: RoadmapWeek[] = []
  
  for (let week = 1; week <= 20; week++) {
    const isHiraganaWeek = week <= 10
    const isKatakanaWeek = week > 10
    
    let weekTitle = ''
    if (isHiraganaWeek) {
      const hiraganaGroups = [
        'a-o', 'ka-ko', 'sa-so', 'ta-to', 'na-no',
        'ha-ho', 'ma-mo', 'ya-yo', 'ra-ro', 'wa-n'
      ]
      weekTitle = `Week ${week}: Hiragana ${hiraganaGroups[week - 1]}`
    } else {
      const katakanaGroups = [
        'a-o', 'ka-ko', 'sa-so', 'ta-to', 'na-no',
        'ha-ho', 'ma-mo', 'ya-yo', 'ra-ro', 'wa-n'
      ]
      weekTitle = `Week ${week}: Katakana ${katakanaGroups[week - 11]}`
    }

    const days = []
    for (let day = 1; day <= 7; day++) {
      const dayTitle = `Day ${day}: ${isHiraganaWeek ? 'Hiragana' : 'Katakana'} ${getDayContent(week, day)}`
      
      const tasks = []
      for (let task = 1; task <= 10; task++) {
        const categories = ['hiragana', 'katakana', 'vocab', 'grammar', 'listening', 'reading']
        const category = isHiraganaWeek ? 'hiragana' : 'katakana'
        const points = Math.floor(Math.random() * 3) + 1
        
        tasks.push({
          id: `${week}-${day}-${task}`,
          day_id: `${week}-${day}`,
          label: `Task ${task}: Learn ${isHiraganaWeek ? 'hiragana' : 'katakana'} character`,
          category: category as any,
          points,
          created_at: '',
          updated_at: ''
        })
      }

      days.push({
        id: `${week}-${day}`,
        week_id: `${week}`,
        day_number: day,
        title: dayTitle,
        tasks,
        created_at: '',
        updated_at: ''
      })
    }

    weeks.push({
      id: `${week}`,
      title: weekTitle,
      order: week,
      days,
      created_at: '',
      updated_at: ''
    })
  }

  return weeks
}

const getDayContent = (week: number, day: number): string => {
  if (week <= 10) {
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
    return hiraganaGroups[week - 1]?.[day - 1] || 'あ-お'
  } else {
    const katakanaGroups = [
      ['ア-オ', 'カ-コ', 'サ-ソ', 'タ-ト', 'ナ-ノ', 'ハ-ホ', 'マ-モ'],
      ['ヤ-ヨ', 'ラ-ロ', 'ワ-ン', 'ガ-ゴ', 'ザ-ゾ', 'ダ-ド', 'バ-ボ'],
      ['パ-ポ', 'キャ-キョ', 'シャ-ショ', 'チャ-チョ', 'ニャ-ニョ', 'ヒャ-ヒョ', 'ミャ-ミョ'],
      ['リャ-リョ', 'ギャ-ギョ', 'ジャ-ジョ', 'ビャ-ビョ', 'ピャ-ピョ', 'ク-ク', 'グ-グ'],
      ['ス-ス', 'ズ-ズ', 'ツ-ツ', 'ヅ-ヅ', 'ヌ-ヌ', 'フ-フ', 'ブ-ブ'],
      ['プ-プ', 'ム-ム', 'ユ-ユ', 'ヨ-ヨ', 'ル-ル', 'ワ-ワ', 'ヲ-ヲ'],
      ['ン-ン', 'ッ-ッ', 'ー-ー', '、-、', '。-。', '？-？', '！-！'],
      ['ア-オ', 'カ-コ', 'サ-ソ', 'タ-ト', 'ナ-ノ', 'ハ-ホ', 'マ-モ'],
      ['ヤ-ヨ', 'ラ-ロ', 'ワ-ン', 'ガ-ゴ', 'ザ-ゾ', 'ダ-ド', 'バ-ボ'],
      ['パ-ポ', 'キャ-キョ', 'シャ-ショ', 'チャ-チョ', 'ニャ-ニョ', 'ヒャ-ヒョ', 'ミャ-ミョ']
    ]
    return katakanaGroups[week - 11]?.[day - 1] || 'ア-オ'
  }
}

export default function RoadmapPage() {
  const { isDemo, toggleTask, loadDemoData } = useProgressStore()
  const [roadmap, setRoadmap] = useState<RoadmapWeek[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadDemoData()
    // Generate mock roadmap data
    setRoadmap(generateMockRoadmap())
    setIsLoading(false)
  }, [loadDemoData])

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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Study Roadmap</h1>
              <p className="text-gray-600 mt-2">
                Your complete 20-week journey to JLPT N5 mastery
              </p>
            </div>
            <div className="flex items-center gap-4">
              {isDemo && (
                <Badge variant="outline" className="bg-blue-50 text-blue-700">
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
              Follow this structured 20-week curriculum to master all JLPT N5 topics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">20</div>
                <div className="text-sm text-muted-foreground">Weeks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">140</div>
                <div className="text-sm text-muted-foreground">Days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">1,400</div>
                <div className="text-sm text-muted-foreground">Tasks</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Phase Indicators */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Study Phases</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  Phase 1: Hiragana (Weeks 1-10)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Master the hiragana syllabary, basic vocabulary, and essential grammar patterns.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-green-200 bg-green-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="h-5 w-5 text-green-600" />
                  Phase 2: Katakana (Weeks 11-20)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Learn katakana, advanced vocabulary, and prepare for the JLPT N5 exam.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Week Capsules */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-6">Study Weeks</h2>
          {roadmap.map((week) => (
            <WeekCapsule
              key={week.id}
              week={week}
              isDemo={isDemo}
              onTaskToggle={handleTaskToggle}
            />
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="text-center py-12">
            <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of students who have successfully passed the JLPT N5 
              using our structured roadmap. Start today and track your progress!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <BookOpen className="h-5 w-5 mr-2" />
                Start Learning
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
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
