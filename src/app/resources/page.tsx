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
  Award,
  Video,
  Globe,
  FileDown
} from 'lucide-react'

interface GlobalResource {
  id: string
  title: string
  description: string
  url: string
  type: 'reference' | 'practice' | 'guide'
  category: 'hiragana' | 'katakana' | 'vocabulary' | 'grammar' | 'listening' | 'reading' | 'general'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  format: 'pdf' | 'video' | 'website' | 'app' | 'audio'
}

const globalResources: GlobalResource[] = [
  // Hiragana Resources
  {
    id: 'hiragana-chart',
    title: 'Complete Hiragana Chart',
    description: 'Printable hiragana chart with stroke order and pronunciation',
    url: '#',
    type: 'reference',
    category: 'hiragana',
    difficulty: 'beginner',
    format: 'pdf'
  },
  {
    id: 'hiragana-practice',
    title: 'Hiragana Writing Practice Sheets',
    description: 'Downloadable practice sheets for all hiragana characters',
    url: '#',
    type: 'practice',
    category: 'hiragana',
    difficulty: 'beginner',
    format: 'pdf'
  },

  // Katakana Resources
  {
    id: 'katakana-chart',
    title: 'Complete Katakana Chart',
    description: 'Printable katakana chart with stroke order and pronunciation',
    url: '#',
    type: 'reference',
    category: 'katakana',
    difficulty: 'beginner',
    format: 'pdf'
  },
  {
    id: 'katakana-practice',
    title: 'Katakana Writing Practice Sheets',
    description: 'Downloadable practice sheets for all katakana characters',
    url: '#',
    type: 'practice',
    category: 'katakana',
    difficulty: 'beginner',
    format: 'pdf'
  },

  // Vocabulary Resources
  {
    id: 'n5-vocab-list',
    title: 'JLPT N5 Vocabulary List',
    description: 'Complete list of 800+ N5 vocabulary words with meanings',
    url: '#',
    type: 'reference',
    category: 'vocabulary',
    difficulty: 'beginner',
    format: 'pdf'
  },
  {
    id: 'vocab-flashcards',
    title: 'N5 Vocabulary Flashcards',
    description: 'Digital flashcards for N5 vocabulary practice',
    url: '#',
    type: 'practice',
    category: 'vocabulary',
    difficulty: 'beginner',
    format: 'app'
  },

  // Grammar Resources
  {
    id: 'n5-grammar-guide',
    title: 'N5 Grammar Guide',
    description: 'Complete grammar reference for JLPT N5 level',
    url: '#',
    type: 'guide',
    category: 'grammar',
    difficulty: 'beginner',
    format: 'pdf'
  },
  {
    id: 'grammar-exercises',
    title: 'Grammar Practice Exercises',
    description: 'Interactive exercises for N5 grammar patterns',
    url: '#',
    type: 'practice',
    category: 'grammar',
    difficulty: 'beginner',
    format: 'website'
  },

  // Listening Resources
  {
    id: 'n5-listening-practice',
    title: 'N5 Listening Practice',
    description: 'Audio exercises for JLPT N5 listening comprehension',
    url: '#',
    type: 'practice',
    category: 'listening',
    difficulty: 'beginner',
    format: 'audio'
  },

  // Reading Resources
  {
    id: 'n5-reading-practice',
    title: 'N5 Reading Comprehension',
    description: 'Practice texts and exercises for N5 reading',
    url: '#',
    type: 'practice',
    category: 'reading',
    difficulty: 'beginner',
    format: 'pdf'
  },


  // General Resources
  {
    id: 'jlpt-guide',
    title: 'Complete JLPT N5 Guide',
    description: 'Everything you need to know about the JLPT N5 exam',
    url: '#',
    type: 'guide',
    category: 'general',
    difficulty: 'beginner',
    format: 'pdf'
  },
  {
    id: 'study-schedule',
    title: '20-Week Study Schedule',
    description: 'Detailed study schedule for N5 preparation',
    url: '#',
    type: 'guide',
    category: 'general',
    difficulty: 'beginner',
    format: 'pdf'
  }
]

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'reference': return <FileText className="h-4 w-4" />
    case 'practice': return <BookOpen className="h-4 w-4" />
    case 'guide': return <FileText className="h-4 w-4" />
    default: return <FileText className="h-4 w-4" />
  }
}

const getFormatIcon = (format: string) => {
  switch (format) {
    case 'pdf': return <FileDown className="h-4 w-4" />
    case 'video': return <Video className="h-4 w-4" />
    case 'website': return <Globe className="h-4 w-4" />
    case 'app': return <BookOpen className="h-4 w-4" />
    case 'audio': return <BookOpen className="h-4 w-4" />
    default: return <FileText className="h-4 w-4" />
  }
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'beginner': return 'bg-green-100 text-green-800'
    case 'intermediate': return 'bg-yellow-100 text-yellow-800'
    case 'advanced': return 'bg-red-100 text-red-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedType, setSelectedType] = useState('all')

  const filteredResources = globalResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory
    const matchesType = selectedType === 'all' || resource.type === selectedType

    return matchesSearch && matchesCategory && matchesType
  })

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'hiragana', label: 'Hiragana' },
    { value: 'katakana', label: 'Katakana' },
    { value: 'vocabulary', label: 'Vocabulary' },
    { value: 'grammar', label: 'Grammar' },
    { value: 'listening', label: 'Listening' },
    { value: 'reading', label: 'Reading' },
    { value: 'general', label: 'General' }
  ]

  const types = [
    { value: 'all', label: 'All Types' },
    { value: 'reference', label: 'Reference' },
    { value: 'practice', label: 'Practice' },
    { value: 'guide', label: 'Guides' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Global Resources</h1>
          <p className="text-xl text-gray-600">
            Comprehensive learning materials for your JLPT N5 journey
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Find Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-2">
                <Input
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Type" />
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
          </CardContent>
        </Card>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    {getTypeIcon(resource.type)}
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                  </div>
                  <div className="flex items-center gap-1">
                    {getFormatIcon(resource.format)}
                  </div>
                </div>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="capitalize">
                    {resource.category}
                  </Badge>
                  <Badge className={`capitalize ${getDifficultyColor(resource.difficulty)}`}>
                    {resource.difficulty}
                  </Badge>
                  <Badge variant="secondary" className="capitalize">
                    {resource.type}
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button asChild className="flex-1">
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Open
                    </a>
                  </Button>
                  {resource.format === 'pdf' && (
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                No resources found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search criteria or filters
              </p>
            </CardContent>
          </Card>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {globalResources.length}
              </div>
              <div className="text-sm text-gray-600">Total Resources</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {globalResources.filter(r => r.type === 'practice').length}
              </div>
              <div className="text-sm text-gray-600">Practice Materials</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-purple-600 mb-1">
                {globalResources.filter(r => r.type === 'guide').length}
              </div>
              <div className="text-sm text-gray-600">Guides</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-orange-600 mb-1">
                {globalResources.filter(r => r.format === 'pdf').length}
              </div>
              <div className="text-sm text-gray-600">PDF Downloads</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
