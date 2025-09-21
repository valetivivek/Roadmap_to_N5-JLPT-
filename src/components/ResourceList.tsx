'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Video, Globe, FileText, BookOpen } from 'lucide-react'
import { createClient } from '@/lib/supabase'

interface Resource {
  id: string
  title: string
  url: string
  kind: 'video' | 'site' | 'deck' | 'doc'
  description?: string
}

interface ResourceListProps {
  taskId: string
  className?: string
}

export default function ResourceList({ taskId, className = "" }: ResourceListProps) {
  const [resources, setResources] = useState<Resource[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const supabase = createClient()

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const { data, error } = await supabase
          .from('task_resources')
          .select(`
            resources (
              id,
              title,
              url,
              kind,
              description
            )
          `)
          .eq('task_id', taskId)

        if (error) throw error

        const resourceList = data?.flatMap(item => item.resources).filter(Boolean) || []
        setResources(resourceList)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchResources()
  }, [taskId, supabase])

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

  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle className="text-sm">Learning Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">Loading resources...</div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle className="text-sm">Learning Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-red-600">Error loading resources: {error}</div>
        </CardContent>
      </Card>
    )
  }

  if (resources.length === 0) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle className="text-sm">Learning Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">No resources available for this task.</div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-sm flex items-center gap-2">
          <ExternalLink className="h-4 w-4" />
          Learning Resources
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {resources.map((resource) => (
            <div key={resource.id} className="flex items-start gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
              <div className="flex-shrink-0 mt-0.5">
                {getResourceIcon(resource.kind)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-medium truncate">{resource.title}</h4>
                  <Badge variant="outline" className={`text-xs ${getResourceColor(resource.kind)}`}>
                    {getResourceLabel(resource.kind)}
                  </Badge>
                </div>
                {resource.description && (
                  <p className="text-xs text-muted-foreground mb-2">{resource.description}</p>
                )}
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="h-7 text-xs"
                >
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Open Link
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
