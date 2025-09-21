'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  BookOpen, 
  Download, 
  ExternalLink, 
  Search, 
  FileText,
  Video,
  Globe,
  FileDown,
  Calendar
} from 'lucide-react'
import { completeJLPTN5Curriculum } from '@/data/jlptN5Curriculum'

interface WeekResource {
  title: string
  url: string
  type: 'video' | 'site' | 'pdf' | 'audio'
  description?: string
}

// Get all resources from the curriculum
const getAllWeekResources = () => {
  const allResources: Array<{
    weekNumber: number
    weekTitle: string
    resources: WeekResource[]
  }> = []
  
  completeJLPTN5Curriculum.forEach(week => {
    if (week.resources && week.resources.length > 0) {
      allResources.push({
        weekNumber: week.weekNumber,
        weekTitle: week.title,
        resources: week.resources
      })
    }
  })
  
  return allResources
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'site': return <Globe className="h-4 w-4" />
    case 'video': return <Video className="h-4 w-4" />
    case 'pdf': return <FileText className="h-4 w-4" />
    case 'audio': return <FileDown className="h-4 w-4" />
    default: return <FileText className="h-4 w-4" />
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'site': return 'bg-blue-100 text-blue-800'
    case 'video': return 'bg-red-100 text-red-800'
    case 'pdf': return 'bg-green-100 text-green-800'
    case 'audio': return 'bg-purple-100 text-purple-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedWeek, setSelectedWeek] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  
  const weekResources = getAllWeekResources()
  
  const filteredResources = weekResources.filter(weekData => {
    const matchesSearch = weekData.weekTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         weekData.resources.some(resource => 
                           resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resource.description?.toLowerCase().includes(searchTerm.toLowerCase())
                         )
    
    const matchesWeek = selectedWeek === 'all' || weekData.weekNumber.toString() === selectedWeek
    
    const matchesType = selectedWeek === 'all' || weekData.resources.some(resource => 
      selectedType === 'all' || resource.type === selectedType
    )
    
    return matchesSearch && matchesWeek && matchesType
  })

  const weeks = [
    { value: 'all', label: 'All Weeks' },
    ...weekResources.map(week => ({
      value: week.weekNumber.toString(),
      label: `Week ${week.weekNumber}: ${week.weekTitle}`
    }))
  ]

  const types = [
    { value: 'all', label: 'All Types' },
    { value: 'site', label: 'Websites' },
    { value: 'video', label: 'Videos' },
    { value: 'pdf', label: 'PDFs' },
    { value: 'audio', label: 'Audio' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Week Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Resources organized by study week. Each week has carefully selected materials to support your learning.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedWeek} onValueChange={setSelectedWeek}>
              <SelectTrigger className="w-full md:w-64">
                <SelectValue placeholder="Select week" />
              </SelectTrigger>
              <SelectContent>
                {weeks.map((week) => (
                  <SelectItem key={week.value} value={week.value}>
                    {week.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {types.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {weekResources.length}
              </div>
              <div className="text-sm text-gray-600">Weeks with Resources</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {weekResources.reduce((sum, week) => sum + week.resources.length, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Resources</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-purple-600 mb-1">
                {weekResources.filter(week => week.resources.some(r => r.type === 'site')).length}
              </div>
              <div className="text-sm text-gray-600">Weeks with Websites</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-orange-600 mb-1">
                {weekResources.filter(week => week.resources.some(r => r.type === 'video')).length}
              </div>
              <div className="text-sm text-gray-600">Weeks with Videos</div>
            </CardContent>
          </Card>
        </div>

        {/* Resources by Week */}
        <div className="space-y-6">
          {filteredResources.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No resources found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </CardContent>
            </Card>
          ) : (
            filteredResources.map((weekData) => (
              <Card key={weekData.weekNumber} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    Week {weekData.weekNumber}: {weekData.weekTitle}
                  </CardTitle>
                  <CardDescription>
                    {weekData.resources.length} resource{weekData.resources.length !== 1 ? 's' : ''} for this week
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {weekData.resources.map((resource, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0">
                              {getTypeIcon(resource.type)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                                {resource.title}
                              </h4>
                              {resource.description && (
                                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                  {resource.description}
                                </p>
                              )}
                              <div className="flex items-center gap-2">
                                <Badge className={getTypeColor(resource.type)}>
                                  {resource.type.toUpperCase()}
                                </Badge>
                                <Button
                                  asChild
                                  className="h-8 px-3 text-sm bg-white border border-gray-200 hover:bg-gray-50"
                                >
                                  <a
                                    href={resource.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1"
                                  >
                                    <ExternalLink className="h-3 w-3" />
                                    Open
                                  </a>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Call to Action */}
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="text-center py-12">
            <BookOpen className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Learning?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Use these resources alongside your weekly study plan to master Japanese and pass the JLPT N5 exam.
            </p>
            <Button asChild className="text-lg px-8 py-3">
              <a href="/roadmap">
                <Calendar className="h-5 w-5 mr-2" />
                View Study Roadmap
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}