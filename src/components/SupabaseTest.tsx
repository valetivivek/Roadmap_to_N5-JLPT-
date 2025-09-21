'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function SupabaseTest() {
  const [testResults, setTestResults] = useState<string[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const [isSeeding, setIsSeeding] = useState(false)
  const supabase = createClient()

  const runTests = async () => {
    setIsRunning(true)
    setTestResults([])
    const results: string[] = []

    try {
      // Test 1: Check if Supabase client is configured
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      
      results.push(`🔧 Environment Variables:`)
      results.push(`   URL: ${supabaseUrl}`)
      results.push(`   Key: ${supabaseKey ? 'Set' : 'Missing'}`)
      results.push('')

      // Test 2: Test basic connection
      results.push('🌐 Testing Supabase Connection...')
      try {
        const { data, error } = await supabase.from('roadmap_weeks').select('count').limit(1)
        if (error) {
          results.push(`   ❌ Connection failed: ${error.message}`)
        } else {
          results.push(`   ✅ Connection successful`)
        }
      } catch (err: any) {
        results.push(`   ❌ Network error: ${err.message}`)
      }

      // Test 3: Test auth
      results.push('🔐 Testing Authentication...')
      try {
        const { data: { session }, error } = await supabase.auth.getSession()
        if (error) {
          results.push(`   ❌ Auth error: ${error.message}`)
        } else if (session) {
          results.push(`   ✅ User authenticated: ${session.user.email}`)
        } else {
          results.push(`   ℹ️  No user session (this is normal for unauthenticated users)`)
        }
      } catch (err: any) {
        results.push(`   ❌ Auth network error: ${err.message}`)
      }

      // Test 4: Test database tables
      results.push('📊 Testing Database Tables...')
      const tables = ['profiles', 'roadmap_weeks', 'roadmap_days', 'tasks', 'progress']
      
      for (const table of tables) {
        try {
          const { data, error } = await supabase.from(table).select('*').limit(1)
          if (error) {
            results.push(`   ❌ ${table}: ${error.message}`)
          } else {
            results.push(`   ✅ ${table}: Table exists`)
          }
        } catch (err: any) {
          results.push(`   ❌ ${table}: Network error - ${err.message}`)
        }
      }

    } catch (err: any) {
      results.push(`💥 Critical error: ${err.message}`)
    }

    setTestResults(results)
    setIsRunning(false)
  }

  const seedDatabase = async () => {
    setIsSeeding(true)
    try {
      // This would need to be implemented as an API route
      // For now, just show instructions
      const results = [
        '🌱 Database Seeding Required',
        '',
        'Your database is empty and needs to be seeded with roadmap data.',
        '',
        'To fix this:',
        '1. Create a .env.local file with your Supabase credentials',
        '2. Add your SUPABASE_SERVICE_ROLE_KEY',
        '3. Run: npm run seed',
        '',
        'Or manually run the SQL scripts in your Supabase dashboard.',
        '',
        'See seed-database.md for detailed instructions.'
      ]
      setTestResults(results)
    } catch (err: any) {
      setTestResults([`❌ Seeding failed: ${err.message}`])
    } finally {
      setIsSeeding(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Supabase Connection Diagnostic</CardTitle>
        <CardDescription>
          Run this test to diagnose connection issues with your Supabase database
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Button 
            onClick={runTests} 
            disabled={isRunning || isSeeding}
            className="flex-1"
          >
            {isRunning ? 'Running Tests...' : 'Run Diagnostic Tests'}
          </Button>
          <Button 
            onClick={seedDatabase} 
            disabled={isRunning || isSeeding}
            variant="outline"
            className="flex-1"
          >
            {isSeeding ? 'Seeding...' : 'Seed Database'}
          </Button>
        </div>
        
        {testResults.length > 0 && (
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-semibold mb-2">Test Results:</h3>
            <pre className="text-sm whitespace-pre-wrap font-mono">
              {testResults.join('\n')}
            </pre>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
