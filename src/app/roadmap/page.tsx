'use client'

import { useEffect, useState } from 'react'
import WeekCapsule from '@/components/WeekCapsule'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useProgressStore } from '@/stores/useProgressStore'
import { RoadmapWeek } from '@/types'
import { BookOpen, Target, Calendar, Award } from 'lucide-react'

// Generate proper 20-week roadmap with 8 hiragana per day
const generateRoadmap = (): RoadmapWeek[] => {
  const weeks: RoadmapWeek[] = []
  
  // Hiragana characters organized by groups (8 per day)
  const hiraganaGroups = [
    ['あ', 'い', 'う', 'え', 'お'], // a-o
    ['か', 'き', 'く', 'け', 'こ'], // ka-ko
    ['さ', 'し', 'す', 'せ', 'そ'], // sa-so
    ['た', 'ち', 'つ', 'て', 'と'], // ta-to
    ['な', 'に', 'ぬ', 'ね', 'の'], // na-no
    ['は', 'ひ', 'ふ', 'へ', 'ほ'], // ha-ho
    ['ま', 'み', 'む', 'め', 'も'], // ma-mo
    ['や', 'ゆ', 'よ'], // ya-yu-yo
    ['ら', 'り', 'る', 'れ', 'ろ'], // ra-ro
    ['わ', 'を', 'ん'] // wa-wo-n
  ]

  // Katakana characters (same groups)
  const katakanaGroups = [
    ['ア', 'イ', 'ウ', 'エ', 'オ'], // a-o
    ['カ', 'キ', 'ク', 'ケ', 'コ'], // ka-ko
    ['サ', 'シ', 'ス', 'セ', 'ソ'], // sa-so
    ['タ', 'チ', 'ツ', 'テ', 'ト'], // ta-to
    ['ナ', 'ニ', 'ヌ', 'ネ', 'ノ'], // na-no
    ['ハ', 'ヒ', 'フ', 'ヘ', 'ホ'], // ha-ho
    ['マ', 'ミ', 'ム', 'メ', 'モ'], // ma-mo
    ['ヤ', 'ユ', 'ヨ'], // ya-yu-yo
    ['ラ', 'リ', 'ル', 'レ', 'ロ'], // ra-ro
    ['ワ', 'ヲ', 'ン'] // wa-wo-n
  ]

  for (let week = 1; week <= 20; week++) {
    const isHiraganaWeek = week <= 10
    const groupIndex = (week - 1) % 10
    const characters = isHiraganaWeek ? hiraganaGroups[groupIndex] : katakanaGroups[groupIndex]
    const scriptType = isHiraganaWeek ? 'Hiragana' : 'Katakana'
    
    const weekTitle = `Week ${week}: ${scriptType} ${characters[0]}-${characters[characters.length - 1]}`

    const days = []
    for (let day = 1; day <= 7; day++) {
      const dayTitle = `Day ${day}: ${scriptType} ${characters[0]}-${characters[characters.length - 1]}`
      
      const tasks = []
      
      // 8 hiragana/katakana tasks per day
      for (let i = 0; i < 8; i++) {
        const charIndex = i % characters.length
        const character = characters[charIndex]
        const romaji = getRomaji(character, isHiraganaWeek)
        
        tasks.push({
          id: `${week}-${day}-${i + 1}`,
          day_id: `${week}-${day}`,
          label: `Learn ${scriptType} ${character} (${romaji})`,
          category: isHiraganaWeek ? 'hiragana' : 'katakana',
          points: 1,
          created_at: '',
          updated_at: ''
        })
      }
      
      // 2 additional tasks (vocabulary, grammar, listening, reading)
      const additionalTasks = [
        { label: 'Practice writing exercises', category: isHiraganaWeek ? 'hiragana' : 'katakana', points: 2 },
        { label: 'Learn vocabulary words', category: 'vocab', points: 1 },
        { label: 'Practice pronunciation', category: 'listening', points: 1 },
        { label: 'Read simple sentences', category: 'reading', points: 1 }
      ]
      
      additionalTasks.forEach((task, index) => {
        tasks.push({
          id: `${week}-${day}-${8 + index + 1}`,
          day_id: `${week}-${day}`,
          label: task.label,
          category: task.category as any,
          points: task.points,
          created_at: '',
          updated_at: ''
        })
      })

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

// Helper function to get romaji for characters
const getRomaji = (character: string, isHiragana: boolean): string => {
  const hiraganaMap: { [key: string]: string } = {
    'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
    'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
    'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
    'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
    'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
    'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
    'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
    'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
    'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
    'わ': 'wa', 'を': 'wo', 'ん': 'n'
  }
  
  const katakanaMap: { [key: string]: string } = {
    'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o',
    'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko',
    'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so',
    'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to',
    'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no',
    'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho',
    'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo',
    'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo',
    'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro',
    'ワ': 'wa', 'ヲ': 'wo', 'ン': 'n'
  }
  
  return isHiragana ? hiraganaMap[character] || character : katakanaMap[character] || character
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

  useEffect(() => {
    loadDemoData()
    // Generate proper roadmap data
    setRoadmap(generateRoadmap())
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

  const groupedWeeks = groupWeeksInPairs(roadmap)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Study Roadmap</h1>
              <p className="text-gray-600 mt-2">
                Master Japanese in 20 weeks with 8 hiragana per day
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
              Structured 20-week curriculum with 8 hiragana/katakana per day
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
                <div className="text-3xl font-bold text-purple-600 mb-2">1,120</div>
                <div className="text-sm text-muted-foreground">Hiragana Tasks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">280</div>
                <div className="text-sm text-muted-foreground">Other Tasks</div>
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
                  Master the hiragana syllabary with 8 characters per day, plus vocabulary and grammar.
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
                  Learn katakana with 8 characters per day, plus advanced vocabulary and JLPT N5 prep.
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
              Ready to Master Japanese?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Follow our proven 20-week roadmap with 8 hiragana per day. 
              Join thousands who have successfully passed JLPT N5!
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
