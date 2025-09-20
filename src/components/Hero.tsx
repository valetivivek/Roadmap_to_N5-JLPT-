'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Target, Users, Award } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Roadmap to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              JLPT N5
            </span>
          </h1>
          <p className="mb-8 text-xl text-gray-600 sm:text-2xl">
            Master Japanese fundamentals with our structured 20-week study plan. 
            Track your progress, build habits, and achieve your JLPT N5 goals.
          </p>
          
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/roadmap">
                Start Learning
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link href="/dashboard">
                View Dashboard
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 bg-white/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <BookOpen className="h-8 w-8 text-blue-600" />
                <CardTitle className="text-lg">20 Weeks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Structured curriculum covering all JLPT N5 topics
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <Target className="h-8 w-8 text-green-600" />
                <CardTitle className="text-lg">1,400 Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Daily tasks to build consistent study habits
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <Users className="h-8 w-8 text-purple-600" />
                <CardTitle className="text-lg">Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Visual charts and analytics to monitor your growth
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <Award className="h-8 w-8 text-orange-600" />
                <CardTitle className="text-lg">JLPT Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive preparation for the official exam
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 opacity-20" />
      <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-gradient-to-br from-green-200 to-blue-200 opacity-20" />
    </section>
  )
}
