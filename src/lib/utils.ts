import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export function formatDateShort(date: string | Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  }).format(new Date(date))
}

export function calculateStreak(progress: Array<{ completed_at: string }>) {
  if (!progress.length) return 0

  const sortedDates = progress
    .map(p => new Date(p.completed_at).toDateString())
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())

  let streak = 0
  const today = new Date().toDateString()
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString()

  // Check if today or yesterday was completed
  if (sortedDates[0] === today || sortedDates[0] === yesterday) {
    streak = 1
    let currentDate = new Date(sortedDates[0])

    for (let i = 1; i < sortedDates.length; i++) {
      const nextDate = new Date(sortedDates[i])
      const diffTime = currentDate.getTime() - nextDate.getTime()
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

      if (diffDays === 1) {
        streak++
        currentDate = nextDate
      } else {
        break
      }
    }
  }

  return streak
}

export function getCategoryColor(category: string) {
  const colors = {
    hiragana: 'bg-blue-500',
    katakana: 'bg-green-500',
    vocab: 'bg-purple-500',
    grammar: 'bg-orange-500',
    listening: 'bg-pink-500',
    reading: 'bg-indigo-500',
  }
  return colors[category as keyof typeof colors] || 'bg-gray-500'
}

export function getCategoryLabel(category: string) {
  const labels = {
    hiragana: 'Hiragana',
    katakana: 'Katakana',
    vocab: 'Vocabulary',
    grammar: 'Grammar',
    listening: 'Listening',
    reading: 'Reading',
  }
  return labels[category as keyof typeof labels] || category
}
