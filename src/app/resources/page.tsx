'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  ExternalLink, 
  Video, 
  Globe, 
  FileText, 
  BookOpen, 
  Search,
  Filter,
  Calendar,
  Target,
  ChevronDown,
  ChevronRight
} from 'lucide-react'
import { createClient } from '@/lib/supabase'

interface Resource {
  id: string
  title: string
  url: string
  kind: 'video' | 'site' | 'deck' | 'doc'
  description?: string
}

interface TaskResource {
  task_id: string
  resource_id: string
  resources: Resource
  tasks: {
    id: string
    label: string
    category: string
    points: number
    day_id: string
    roadmap_days: {
      id: string
      day_number: number
      title: string
      week_id: string
      roadmap_weeks: {
        id: string
        title: string
        order: number
      }
    }
  }
}

export default function ResourcesPage() {
  const [resources, setResources] = useState<TaskResource[]>([])
  const [filteredResources, setFilteredResources] = useState<TaskResource[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedKind, setSelectedKind] = useState<string>('all')
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null)
  const [expandedWeeks, setExpandedWeeks] = useState<Set<number>>(new Set())
  const [expandedDays, setExpandedDays] = useState<Set<string>>(new Set())
  const supabase = createClient()

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const { data, error } = await supabase
          .from('task_resources')
          .select(`
            task_id,
            resource_id,
            resources (
              id,
              title,
              url,
              kind,
              description
            ),
            tasks (
              id,
              label,
              category,
              points,
              day_id,
              roadmap_days (
                id,
                day_number,
                title,
                week_id,
                roadmap_weeks (
                  id,
                  title,
                  order
                )
              )
            )
          `)
          .order('roadmap_weeks.order', { referencedTable: 'tasks.roadmap_days.roadmap_weeks' })
          .order('day_number', { referencedTable: 'tasks.roadmap_days' })

        if (error) throw error

        setResources(data || [])
        setFilteredResources(data || [])
      } catch (error) {
        console.error('Error fetching resources:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchResources()
  }, [supabase])

  useEffect(() => {
    let filtered = resources

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.resources.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.resources.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tasks.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by resource kind
    if (selectedKind !== 'all') {
      filtered = filtered.filter(item => item.resources.kind === selectedKind)
    }

    // Filter by week
    if (selectedWeek !== null) {
      filtered = filtered.filter(item => item.tasks.roadmap_days.roadmap_weeks.order === selectedWeek)
    }

    setFilteredResources(filtered)
  }, [resources, searchTerm, selectedKind, selectedWeek])

  const getResourceIcon = (kind: string) => {
    switch (kind) {
      case 'video':
        return <Video className="h-4 w-4" />
      case 'site':
        return <Globe className="h-4 w-4" />
      case 'deck':
        return <BookOpen className="h-4 w-4" />
      case 'doc':
        return <FileText className="h-4 w-4" />
      default:
        return <ExternalLink className="h-4 w-4" />
    }
  }

  const getResourceColor = (kind: string) => {
    switch (kind) {
      case 'video':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'site':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'deck':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'doc':
        return 'bg-purple-100 text-purple-800 border-purple-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getResourceLabel = (kind: string) => {
    switch (kind) {
      case 'video':
        return 'Video'
      case 'site':
        return 'Website'
      case 'deck':
        return 'Flashcards'
      case 'doc':
        return 'Document'
      default:
        return 'Resource'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'hiragana':
        return 'bg-blue-100 text-blue-800'
      case 'katakana':
        return 'bg-green-100 text-green-800'
      case 'vocab':
        return 'bg-purple-100 text-purple-800'
      case 'grammar':
        return 'bg-yellow-100 text-yellow-800'
      case 'listening':
        return 'bg-pink-100 text-pink-800'
      case 'reading':
        return 'bg-indigo-100 text-indigo-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  // Group resources by week and day
  const groupedResources = filteredResources.reduce((acc, item) => {
    const weekNum = item.tasks.roadmap_days.roadmap_weeks.order
    const dayId = item.tasks.day_id
    const dayTitle = item.tasks.roadmap_days.title

    if (!acc[weekNum]) {
      acc[weekNum] = {
        weekInfo: item.tasks.roadmap_days.roadmap_weeks,
        days: {}
      }
    }

    if (!acc[weekNum].days[dayId]) {
      acc[weekNum].days[dayId] = {
        dayInfo: item.tasks.roadmap_days,
        resources: []
      }
    }

    acc[weekNum].days[dayId].resources.push(item)
    return acc
  }, {} as Record<number, any>)

  const toggleWeek = (weekNum: number) => {
    const newExpanded = new Set(expandedWeeks)
    if (newExpanded.has(weekNum)) {
      newExpanded.delete(weekNum)
    } else {
      newExpanded.add(weekNum)
    }
    setExpandedWeeks(newExpanded)
  }

  const toggleDay = (dayId: string) => {
    const newExpanded = new Set(expandedDays)
    if (newExpanded.has(dayId)) {
      newExpanded.delete(dayId)
    } else {
      newExpanded.add(dayId)
    }
    setExpandedDays(newExpanded)
  }

  const getUniqueWeeks = () => {
    const weeks = [...new Set(resources.map(item => item.tasks.roadmap_days.roadmap_weeks.order))].sort((a, b) => a - b)
    return weeks
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-96">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading resources...</p>
            </div>
          </div>
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
              <h1 className="text-3xl font-bold text-gray-900">Learning Resources</h1>
              <p className="text-gray-600 mt-2">
                Curated learning materials organized by week and day
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Filter Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search resources, tasks, or descriptions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex gap-2 flex-wrap">
                <select
                  value={selectedKind}
                  onChange={(e) => setSelectedKind(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="all">All Types</option>
                  <option value="video">Videos</option>
                  <option value="site">Websites</option>
                  <option value="deck">Flashcards</option>
                  <option value="doc">Documents</option>
                </select>
                
                <select
                  value={selectedWeek || ''}
                  onChange={(e) => setSelectedWeek(e.target.value ? Number(e.target.value) : null)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="">All Weeks</option>
                  {getUniqueWeeks().map(weekNum => (
                    <option key={weekNum} value={weekNum}>Week {weekNum}</option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources by Week */}
        <div className="space-y-6">
          {Object.entries(groupedResources).map(([weekNum, weekData]) => {
            const weekNumber = Number(weekNum)
            const isExpanded = expandedWeeks.has(weekNumber)
            
            return (
              <Card key={weekNumber} className="overflow-hidden">
                <CardHeader 
                  className="cursor-pointer"
                  onClick={() => toggleWeek(weekNumber)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {isExpanded ? (
                        <ChevronDown className="h-5 w-5" />
                      ) : (
                        <ChevronRight className="h-5 w-5" />
                      )}
                      <CardTitle className="text-xl">
                        {weekData.weekInfo.title}
                      </CardTitle>
                      <Badge variant="outline">
                        {Object.keys(weekData.days).length} days
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {Object.values(weekData.days).reduce((sum: number, day: any) => sum + day.resources.length, 0)} resources
                    </div>
                  </div>
                </CardHeader>

                {isExpanded && (
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {Object.entries(weekData.days).map(([dayId, dayData]: [string, any]) => {
                        const isDayExpanded = expandedDays.has(dayId)
                        
                        return (
                          <Card key={dayId} className="border-l-4 border-l-blue-500">
                            <CardHeader 
                              className="cursor-pointer pb-3"
                              onClick={() => toggleDay(dayId)}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  {isDayExpanded ? (
                                    <ChevronDown className="h-4 w-4" />
                                  ) : (
                                    <ChevronRight className="h-4 w-4" />
                                  )}
                                  <h4 className="font-medium">{dayData.dayInfo.title}</h4>
                                  <Badge variant="secondary" className="text-xs">
                                    {dayData.resources.length} resources
                                  </Badge>
                                </div>
                              </div>
                            </CardHeader>

                            {isDayExpanded && (
                              <CardContent className="pt-0">
                                <div className="space-y-4">
                                  {dayData.resources.map((item: TaskResource) => (
                                    <div key={`${item.task_id}-${item.resource_id}`} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                                      <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 mt-1">
                                          {getResourceIcon(item.resources.kind)}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className="flex items-center gap-2 mb-2">
                                            <h5 className="font-medium text-sm">{item.resources.title}</h5>
                                            <Badge variant="outline" className={`text-xs ${getResourceColor(item.resources.kind)}`}>
                                              {getResourceLabel(item.resources.kind)}
                                            </Badge>
                                            <Badge variant="outline" className={`text-xs ${getCategoryColor(item.tasks.category)}`}>
                                              {item.tasks.category}
                                            </Badge>
                                          </div>
                                          
                                          {item.resources.description && (
                                            <p className="text-sm text-muted-foreground mb-2">
                                              {item.resources.description}
                                            </p>
                                          )}
                                          
                                          <div className="flex items-center gap-2 mb-3">
                                            <span className="text-xs text-muted-foreground">
                                              For task: {item.tasks.label}
                                            </span>
                                            <div className="flex gap-1">
                                              {Array.from({ length: item.tasks.points }, (_, i) => (
                                                <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full" />
                                              ))}
                                            </div>
                                          </div>
                                          
                                          <Button
                                            asChild
                                            variant="outline"
                                            size="sm"
                                            className="h-8 text-xs"
                                          >
                                            <a
                                              href={item.resources.url}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="flex items-center gap-1"
                                            >
                                              <ExternalLink className="h-3 w-3" />
                                              Open Resource
                                            </a>
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </CardContent>
                            )}
                          </Card>
                        )
                      })}
                    </div>
                  </CardContent>
                )}
              </Card>
            )
          })}
        </div>

        {filteredResources.length === 0 && (
          <Card>
            <CardContent className="flex items-center justify-center py-12">
              <div className="text-center">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-600 mb-2">
                  No resources found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search terms or filters
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}