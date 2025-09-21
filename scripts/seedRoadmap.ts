import { createClient } from '@supabase/supabase-js'
import { completeRoadmap } from './seedData'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables')
  console.error('Make sure SUPABASE_SERVICE_ROLE_KEY is set in your env.local file')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function seedRoadmap() {
  console.log('🌱 Starting JLPT N5 roadmap seeding...')

  try {
    // 1. Clear existing data (in reverse order to handle foreign keys)
    console.log('🧹 Clearing existing data...')
    
    await supabase.from('task_resources').delete().neq('task_id', '00000000-0000-0000-0000-000000000000')
    await supabase.from('progress').delete().neq('user_id', '00000000-0000-0000-0000-000000000000')
    await supabase.from('tasks').delete().neq('id', '00000000-0000-0000-0000-000000000000')
    await supabase.from('roadmap_days').delete().neq('id', '00000000-0000-0000-0000-000000000000')
    await supabase.from('roadmap_weeks').delete().neq('id', '00000000-0000-0000-0000-000000000000')
    await supabase.from('resources').delete().neq('id', '00000000-0000-0000-0000-000000000000')

    console.log('✅ Existing data cleared')

    // 2. Insert resources
    console.log('📚 Inserting learning resources...')
    
    const allResources = new Map()
    
    // Collect all unique resources from the roadmap
    completeRoadmap.forEach(week => {
      week.days.forEach(day => {
        day.tasks.forEach(task => {
          if (task.resources) {
            task.resources.forEach(resource => {
              if (!allResources.has(resource.url)) {
                allResources.set(resource.url, {
                  title: resource.title,
                  url: resource.url,
                  kind: resource.kind,
                  description: resource.description
                })
              }
            })
          }
        })
      })
    })

    const resourceEntries = Array.from(allResources.values())
    const { data: insertedResources, error: resourceError } = await supabase
      .from('resources')
      .insert(resourceEntries)
      .select()

    if (resourceError) {
      throw new Error(`Failed to insert resources: ${resourceError.message}`)
    }

    console.log(`✅ Inserted ${insertedResources.length} resources`)

    // 3. Insert weeks
    console.log('📅 Inserting roadmap weeks...')
    
    const weekEntries = completeRoadmap.map((week, index) => ({
      title: week.title,
      order: index + 1
    }))

    const { data: insertedWeeks, error: weekError } = await supabase
      .from('roadmap_weeks')
      .insert(weekEntries)
      .select()

    if (weekError) {
      throw new Error(`Failed to insert weeks: ${weekError.message}`)
    }

    console.log(`✅ Inserted ${insertedWeeks.length} weeks`)

    // 4. Insert days
    console.log('📆 Inserting roadmap days...')
    
    const dayEntries: Array<{
      week_id: string;
      day_number: number;
      title: string;
    }> = []
    completeRoadmap.forEach((week, weekIndex) => {
      week.days.forEach((day, dayIndex) => {
        dayEntries.push({
          week_id: insertedWeeks[weekIndex].id,
          day_number: dayIndex + 1,
          title: day.title
        })
      })
    })

    const { data: insertedDays, error: dayError } = await supabase
      .from('roadmap_days')
      .insert(dayEntries)
      .select()

    if (dayError) {
      throw new Error(`Failed to insert days: ${dayError.message}`)
    }

    console.log(`✅ Inserted ${insertedDays.length} days`)

    // 5. Insert tasks
    console.log('📝 Inserting tasks...')
    
    const taskEntries: Array<{
      day_id: string;
      label: string;
      category: string;
      points: number;
    }> = []
    let dayIndex = 0
    
    completeRoadmap.forEach((week, weekIndex) => {
      week.days.forEach((day, dayDayIndex) => {
        day.tasks.forEach(task => {
          taskEntries.push({
            day_id: insertedDays[dayIndex].id,
            label: task.label,
            category: task.category,
            points: task.points
          })
        })
        dayIndex++
      })
    })

    const { data: insertedTasks, error: taskError } = await supabase
      .from('tasks')
      .insert(taskEntries)
      .select()

    if (taskError) {
      throw new Error(`Failed to insert tasks: ${taskError.message}`)
    }

    console.log(`✅ Inserted ${insertedTasks.length} tasks`)

    // 6. Link tasks to resources
    console.log('🔗 Linking tasks to resources...')
    
    const taskResourceEntries: Array<{
      task_id: string;
      resource_id: string;
    }> = []
    let taskIndex = 0
    
    completeRoadmap.forEach((week) => {
      week.days.forEach((day) => {
        day.tasks.forEach(task => {
          if (task.resources) {
            task.resources.forEach(resource => {
              const resourceData = insertedResources.find((r: any) => r.url === resource.url)
              if (resourceData) {
                taskResourceEntries.push({
                  task_id: insertedTasks[taskIndex].id,
                  resource_id: resourceData.id
                })
              }
            })
          }
          taskIndex++
        })
      })
    })

    if (taskResourceEntries.length > 0) {
      const { error: linkError } = await supabase
        .from('task_resources')
        .insert(taskResourceEntries)

      if (linkError) {
        throw new Error(`Failed to link tasks to resources: ${linkError.message}`)
      }
    }

    console.log(`✅ Linked ${taskResourceEntries.length} task-resource relationships`)

    // 7. Summary
    console.log('\n🎉 Roadmap seeding completed successfully!')
    console.log(`📊 Summary:`)
    console.log(`   - ${insertedWeeks.length} weeks`)
    console.log(`   - ${insertedDays.length} days`)
    console.log(`   - ${insertedTasks.length} tasks`)
    console.log(`   - ${insertedResources.length} resources`)
    console.log(`   - ${taskResourceEntries.length} resource links`)

  } catch (error) {
    console.error('❌ Seeding failed:', error)
    process.exit(1)
  }
}

// Run the seeding
seedRoadmap().then(() => {
  console.log('\n✨ All done! Your JLPT N5 roadmap is ready.')
  process.exit(0)
}).catch((error) => {
  console.error('💥 Seeding failed:', error)
  process.exit(1)
})
