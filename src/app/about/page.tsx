'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Shield, Users, Target, Award, Clock, Globe } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About JLPT N5 Roadmap</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            A comprehensive, free study tool designed to help you master Japanese and pass the JLPT N5 exam through structured, progressive learning.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-6 w-6 text-blue-600" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              We believe that learning Japanese should be accessible, structured, and effective. Our 20-week JLPT N5 roadmap 
              provides a comprehensive curriculum that covers all essential areas: hiragana, katakana, grammar, vocabulary, 
              reading, and listening. Whether you're a complete beginner or looking to refresh your knowledge, our progressive 
              approach ensures you build a solid foundation for Japanese language mastery.
            </p>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-green-600" />
                Comprehensive Curriculum
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                20 weeks of structured learning covering all JLPT N5 areas with 490+ carefully designed tasks.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                Offline-First Design
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Study anywhere, anytime with offline support and automatic sync across all your devices.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-600" />
                Progress Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Visual progress tracking with detailed analytics and streak monitoring to keep you motivated.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-orange-600" />
                Multi-Device Sync
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Seamlessly switch between devices with automatic cloud synchronization of your progress.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-red-600" />
                Privacy-Focused
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Minimal data collection with no personal information required. Your progress is stored locally and encrypted.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-indigo-600" />
                Free Forever
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Completely free with no hidden costs, subscriptions, or premium features. Education should be accessible to all.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Curriculum Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Curriculum Overview</CardTitle>
            <CardDescription>
              Our 20-week program is divided into four progressive phases
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Badge className="bg-blue-100 text-blue-800">Phase 1</Badge>
                <div>
                  <h4 className="font-semibold">Scripts Foundation (Weeks 1-4)</h4>
                  <p className="text-sm text-gray-600">
                    Master hiragana and katakana with proper stroke order, pronunciation, and basic vocabulary.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Badge className="bg-green-100 text-green-800">Phase 2</Badge>
                <div>
                  <h4 className="font-semibold">Grammar & Structure (Weeks 5-12)</h4>
                  <p className="text-sm text-gray-600">
                    Learn essential grammar patterns, particles, verb conjugations, and sentence structures.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Badge className="bg-purple-100 text-purple-800">Phase 3</Badge>
                <div>
                  <h4 className="font-semibold">Skills Development (Weeks 13-16)</h4>
                  <p className="text-sm text-gray-600">
                    Develop reading and listening comprehension skills with practical exercises and real-world content.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Badge className="bg-orange-100 text-orange-800">Phase 4</Badge>
                <div>
                  <h4 className="font-semibold">JLPT N5 Preparation (Weeks 17-20)</h4>
                  <p className="text-sm text-gray-600">
                    Final preparation with practice tests, comprehensive review, and exam strategies.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Data */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-green-600" />
              Privacy & Data Protection
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">What We Collect</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Your study progress (task completions, timestamps)</li>
                <li>• Basic usage analytics (anonymized)</li>
                <li>• No personal information, email addresses, or names</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">How We Protect Your Data</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• All data is encrypted in transit and at rest</li>
                <li>• Progress is stored locally on your device first</li>
                <li>• Cloud sync uses secure, encrypted connections</li>
                <li>• No third-party tracking or advertising</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Your Rights</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Export your progress data at any time</li>
                <li>• Delete all your data with one click</li>
                <li>• Use the app completely offline if preferred</li>
                <li>• No data sharing with third parties</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-6 w-6 text-yellow-600" />
              Important Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Educational Purpose Only</h4>
              <p className="text-sm text-yellow-700">
                This tool is designed for educational purposes only. While we strive to provide accurate and comprehensive 
                content, we cannot guarantee that completing this roadmap will result in passing the JLPT N5 exam. 
                Individual results may vary based on study habits, time investment, and learning style.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Supplemental Learning</h4>
              <p className="text-sm text-blue-700">
                This roadmap should be used as a supplement to other learning resources, not as a replacement for 
                comprehensive Japanese language courses or native speaker interaction. We recommend combining this 
                tool with textbooks, language exchange, and formal instruction for best results.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Open Source & Community</h4>
              <p className="text-sm text-green-700">
                This project is open source and community-driven. We welcome contributions, feedback, and suggestions 
                to improve the learning experience for all users. If you find errors or have suggestions, please 
                contact us through our GitHub repository.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact & Support */}
        <Card>
          <CardHeader>
            <CardTitle>Contact & Support</CardTitle>
            <CardDescription>
              We're here to help you succeed in your Japanese learning journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Technical Support</h4>
                <p className="text-sm text-gray-600 mb-2">
                  For technical issues, bug reports, or feature requests:
                </p>
                <p className="text-sm text-blue-600">
                  GitHub Issues: github.com/your-repo/issues
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Learning Support</h4>
                <p className="text-sm text-gray-600 mb-2">
                  For questions about the curriculum or learning approach:
                </p>
                <p className="text-sm text-blue-600">
                  Email: support@jlptn5roadmap.com
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
