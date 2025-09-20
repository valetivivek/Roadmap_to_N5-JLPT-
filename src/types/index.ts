export type TaskCategory = 'hiragana' | 'katakana' | 'vocab' | 'grammar' | 'listening' | 'reading'

export interface Task {
  id: string
  day_id: string
  label: string
  category: TaskCategory
  points: number
  created_at: string
  updated_at: string
}

export interface RoadmapDay {
  id: string
  week_id: string
  day_number: number
  title: string
  tasks: Task[]
  created_at: string
  updated_at: string
}

export interface RoadmapWeek {
  id: string
  title: string
  order: number
  days: RoadmapDay[]
  created_at: string
  updated_at: string
}

export interface Progress {
  id: string
  user_id: string
  task_id: string
  completed_at: string
  note?: string
  created_at: string
  updated_at: string
}

export interface Profile {
  id: string
  email: string
  display_name: string
  timezone: string
  created_at: string
  updated_at: string
}

export interface UserProgress {
  totalTasks: number
  completedTasks: number
  completionPercentage: number
  weeklyProgress: Array<{
    week: number
    completed: number
    total: number
  }>
  categoryProgress: Array<{
    category: TaskCategory
    completed: number
    total: number
    percentage: number
  }>
  currentStreak: number
  longestStreak: number
}

export interface DemoData {
  progress: Progress[]
  lastSync: string
}

export interface WeekCapsuleProps {
  week: RoadmapWeek
  userProgress?: UserProgress
  isDemo?: boolean
  onTaskToggle?: (taskId: string, completed: boolean) => void
}

export interface DayTaskListProps {
  day: RoadmapDay
  completedTasks: Set<string>
  isDemo?: boolean
  onTaskToggle?: (taskId: string, completed: boolean) => void
}
