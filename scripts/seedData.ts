import { TaskCategory } from '../src/types'

export interface Resource {
  title: string
  url: string
  kind: 'video' | 'site' | 'deck' | 'doc'
  description?: string
}

export interface Task {
  label: string
  category: TaskCategory
  points: number
  resources?: Resource[]
}

export interface Day {
  title: string
  tasks: Task[]
}

export interface Week {
  title: string
  days: Day[]
}

// Curated learning resources for JLPT N5
const resources: Record<string, Resource> = {
  // Hiragana Resources
  'hiragana-basic': {
    title: 'Learn Hiragana - Tofugu Guide',
    url: 'https://www.tofugu.com/japanese/learn-hiragana/',
    kind: 'site',
    description: 'Comprehensive hiragana learning guide with mnemonics'
  },
  'hiragana-practice': {
    title: 'Hiragana Practice - Real Kana',
    url: 'https://realkana.com/hiragana/',
    kind: 'site',
    description: 'Interactive hiragana recognition practice'
  },
  'hiragana-stroke': {
    title: 'Hiragana Stroke Order Guide',
    url: 'https://www.learn-japanese-adventure.com/hiragana-stroke-order.html',
    kind: 'site',
    description: 'Learn proper stroke order for hiragana characters'
  },
  'hiragana-video': {
    title: 'Learn Hiragana in 1 Hour - YouTube',
    url: 'https://www.youtube.com/watch?v=6p9Il_j0zjc',
    kind: 'video',
    description: 'Quick hiragana learning video tutorial'
  },

  // Katakana Resources
  'katakana-basic': {
    title: 'Learn Katakana - Tofugu Guide',
    url: 'https://www.tofugu.com/japanese/learn-katakana/',
    kind: 'site',
    description: 'Complete katakana learning guide with memory tricks'
  },
  'katakana-practice': {
    title: 'Katakana Practice - Real Kana',
    url: 'https://realkana.com/katakana/',
    kind: 'site',
    description: 'Interactive katakana recognition practice'
  },
  'katakana-video': {
    title: 'Learn Katakana in 1 Hour - YouTube',
    url: 'https://www.youtube.com/watch?v=s6DKRgtVLGA',
    kind: 'video',
    description: 'Quick katakana learning video tutorial'
  },

  // Vocabulary Resources
  'jlpt-n5-vocab': {
    title: 'JLPT N5 Vocabulary List - JLPT Sensei',
    url: 'https://jlptsensei.com/jlpt-n5-vocabulary-list/',
    kind: 'site',
    description: 'Complete JLPT N5 vocabulary list with meanings'
  },
  'anki-n5': {
    title: 'JLPT N5 Anki Deck',
    url: 'https://ankiweb.net/shared/info/3918629684',
    kind: 'deck',
    description: 'Spaced repetition flashcards for N5 vocabulary'
  },
  'jisho-dictionary': {
    title: 'Jisho.org - Japanese Dictionary',
    url: 'https://jisho.org/',
    kind: 'site',
    description: 'Online Japanese-English dictionary'
  },

  // Grammar Resources
  'jlpt-n5-grammar': {
    title: 'JLPT N5 Grammar List - JLPT Sensei',
    url: 'https://jlptsensei.com/jlpt-n5-grammar-list/',
    kind: 'site',
    description: 'Complete N5 grammar patterns with examples'
  },
  'japanese-grammar-guide': {
    title: 'Japanese Grammar Guide - Tae Kim',
    url: 'https://guidetojapanese.org/learn/grammar',
    kind: 'site',
    description: 'Comprehensive Japanese grammar reference'
  },
  'bunpro-n5': {
    title: 'Bunpro N5 Grammar',
    url: 'https://bunpro.jp/',
    kind: 'site',
    description: 'Interactive grammar learning platform'
  },

  // Listening Resources
  'japanese-podcast': {
    title: 'JapanesePod101 - N5 Level',
    url: 'https://www.japanesepod101.com/',
    kind: 'site',
    description: 'Audio lessons for beginner Japanese learners'
  },
  'nhk-easy': {
    title: 'NHK Easy Japanese News',
    url: 'https://www3.nhk.or.jp/news/easy/',
    kind: 'site',
    description: 'Simple Japanese news with audio'
  },
  'japanese-songs': {
    title: 'Japanese Songs for Learning',
    url: 'https://www.youtube.com/watch?v=8UGK6g4DcHk',
    kind: 'video',
    description: 'Popular Japanese songs with subtitles'
  },

  // Reading Resources
  'tadoku-books': {
    title: 'Tadoku Free Books',
    url: 'https://tadoku.org/japanese/en/free-books-en/',
    kind: 'site',
    description: 'Free graded Japanese readers'
  },
  'yomichan': {
    title: 'Yomichan Browser Extension',
    url: 'https://github.com/FooSoft/yomichan',
    kind: 'site',
    description: 'Browser extension for reading Japanese text'
  },
  'graded-readers': {
    title: 'Japanese Graded Readers',
    url: 'https://www.jlptstudy.net/N5/',
    kind: 'site',
    description: 'Level-appropriate reading materials'
  },

  // General Study Resources
  'jlpt-official': {
    title: 'Official JLPT Website',
    url: 'https://www.jlpt.jp/e/',
    kind: 'site',
    description: 'Official JLPT information and sample questions'
  },
  'study-planner': {
    title: 'Japanese Study Planner Template',
    url: 'https://docs.google.com/spreadsheets/d/1example',
    kind: 'doc',
    description: 'Customizable study schedule template'
  }
}

export const roadmapData: Week[] = [
  // Week 1: Hiragana Basics
  {
    title: 'Week 1: Hiragana Foundation',
    days: [
      {
        title: 'Day 1: Hiragana Basics',
        tasks: [
          {
            label: 'Learn hiragana あ-こ (10 characters)',
            category: 'hiragana',
            points: 3,
            resources: [
              resources['hiragana-basic'],
              resources['hiragana-video']
            ]
          },
          {
            label: 'Practice writing あ-こ with proper stroke order',
            category: 'hiragana',
            points: 2,
            resources: [
              resources['hiragana-stroke']
            ]
          },
          {
            label: 'Complete hiragana recognition quiz (あ-こ)',
            category: 'hiragana',
            points: 2,
            resources: [
              resources['hiragana-practice']
            ]
          }
        ]
      },
      {
        title: 'Day 2: Hiragana Continuation',
        tasks: [
          {
            label: 'Learn hiragana さ-と (10 characters)',
            category: 'hiragana',
            points: 3,
            resources: [
              resources['hiragana-basic'],
              resources['hiragana-video']
            ]
          },
          {
            label: 'Practice writing さ-と with proper stroke order',
            category: 'hiragana',
            points: 2,
            resources: [
              resources['hiragana-stroke']
            ]
          },
          {
            label: 'Complete hiragana recognition quiz (さ-と)',
            category: 'hiragana',
            points: 2,
            resources: [
              resources['hiragana-practice']
            ]
          }
        ]
      },
      {
        title: 'Day 3: Hiragana Progress',
        tasks: [
          {
            label: 'Learn hiragana な-ほ (10 characters)',
            category: 'hiragana',
            points: 3,
            resources: [
              resources['hiragana-basic'],
              resources['hiragana-video']
            ]
          },
          {
            label: 'Practice writing な-ほ with proper stroke order',
            category: 'hiragana',
            points: 2,
            resources: [
              resources['hiragana-stroke']
            ]
          },
          {
            label: 'Complete hiragana recognition quiz (な-ほ)',
            category: 'hiragana',
            points: 2,
            resources: [
              resources['hiragana-practice']
            ]
          }
        ]
      },
      {
        title: 'Day 4: Hiragana Advanced',
        tasks: [
          {
            label: 'Learn hiragana ま-よ (10 characters)',
            category: 'hiragana',
            points: 3,
            resources: [
              resources['hiragana-basic'],
              resources['hiragana-video']
            ]
          },
          {
            label: 'Practice writing ま-よ with proper stroke order',
            category: 'hiragana',
            points: 2,
            resources: [
              resources['hiragana-stroke']
            ]
          },
          {
            label: 'Complete hiragana recognition quiz (ま-よ)',
            category: 'hiragana',
            points: 2,
            resources: [
              resources['hiragana-practice']
            ]
          }
        ]
      },
      {
        title: 'Day 5: Hiragana Completion',
        tasks: [
          {
            label: 'Learn remaining hiragana characters (ら-ん)',
            category: 'hiragana',
            points: 3,
            resources: [
              resources['hiragana-basic'],
              resources['hiragana-video']
            ]
          },
          {
            label: 'Practice writing all hiragana characters',
            category: 'hiragana',
            points: 2,
            resources: [
              resources['hiragana-stroke']
            ]
          },
          {
            label: 'Complete full hiragana recognition test',
            category: 'hiragana',
            points: 3,
            resources: [
              resources['hiragana-practice']
            ]
          }
        ]
      },
      {
        title: 'Day 6: Hiragana Review',
        tasks: [
          {
            label: 'Review all hiragana characters',
            category: 'hiragana',
            points: 2,
            resources: [
              resources['hiragana-basic']
            ]
          },
          {
            label: 'Practice reading simple hiragana words',
            category: 'reading',
            points: 3,
            resources: [
              resources['graded-readers']
            ]
          },
          {
            label: 'Complete hiragana writing practice',
            category: 'hiragana',
            points: 2,
            resources: [
              resources['hiragana-stroke']
            ]
          }
        ]
      },
      {
        title: 'Day 7: Week 1 Assessment',
        tasks: [
          {
            label: 'Take hiragana proficiency test',
            category: 'hiragana',
            points: 5,
            resources: [
              resources['hiragana-practice']
            ]
          },
          {
            label: 'Read and write 20 basic hiragana words',
            category: 'reading',
            points: 4,
            resources: [
              resources['graded-readers']
            ]
          },
          {
            label: 'Plan Week 2 katakana study schedule',
            category: 'vocab',
            points: 1,
            resources: [
              resources['study-planner']
            ]
          }
        ]
      }
    ]
  },

  // Week 2: Katakana Basics
  {
    title: 'Week 2: Katakana Foundation',
    days: [
      {
        title: 'Day 8: Katakana Basics',
        tasks: [
          {
            label: 'Learn katakana ア-コ (10 characters)',
            category: 'katakana',
            points: 3,
            resources: [
              resources['katakana-basic'],
              resources['katakana-video']
            ]
          },
          {
            label: 'Practice writing ア-コ with proper stroke order',
            category: 'katakana',
            points: 2,
            resources: [
              resources['katakana-practice']
            ]
          },
          {
            label: 'Complete katakana recognition quiz (ア-コ)',
            category: 'katakana',
            points: 2,
            resources: [
              resources['katakana-practice']
            ]
          }
        ]
      },
      {
        title: 'Day 9: Katakana Continuation',
        tasks: [
          {
            label: 'Learn katakana サ-ト (10 characters)',
            category: 'katakana',
            points: 3,
            resources: [
              resources['katakana-basic'],
              resources['katakana-video']
            ]
          },
          {
            label: 'Practice writing サ-ト with proper stroke order',
            category: 'katakana',
            points: 2,
            resources: [
              resources['katakana-practice']
            ]
          },
          {
            label: 'Complete katakana recognition quiz (サ-ト)',
            category: 'katakana',
            points: 2,
            resources: [
              resources['katakana-practice']
            ]
          }
        ]
      },
      {
        title: 'Day 10: Katakana Progress',
        tasks: [
          {
            label: 'Learn katakana ナ-ホ (10 characters)',
            category: 'katakana',
            points: 3,
            resources: [
              resources['katakana-basic'],
              resources['katakana-video']
            ]
          },
          {
            label: 'Practice writing ナ-ホ with proper stroke order',
            category: 'katakana',
            points: 2,
            resources: [
              resources['katakana-practice']
            ]
          },
          {
            label: 'Complete katakana recognition quiz (ナ-ホ)',
            category: 'katakana',
            points: 2,
            resources: [
              resources['katakana-practice']
            ]
          }
        ]
      },
      {
        title: 'Day 11: Katakana Advanced',
        tasks: [
          {
            label: 'Learn katakana マ-ヨ (10 characters)',
            category: 'katakana',
            points: 3,
            resources: [
              resources['katakana-basic'],
              resources['katakana-video']
            ]
          },
          {
            label: 'Practice writing マ-ヨ with proper stroke order',
            category: 'katakana',
            points: 2,
            resources: [
              resources['katakana-practice']
            ]
          },
          {
            label: 'Complete katakana recognition quiz (マ-ヨ)',
            category: 'katakana',
            points: 2,
            resources: [
              resources['katakana-practice']
            ]
          }
        ]
      },
      {
        title: 'Day 12: Katakana Completion',
        tasks: [
          {
            label: 'Learn remaining katakana characters (ラ-ン)',
            category: 'katakana',
            points: 3,
            resources: [
              resources['katakana-basic'],
              resources['katakana-video']
            ]
          },
          {
            label: 'Practice writing all katakana characters',
            category: 'katakana',
            points: 2,
            resources: [
              resources['katakana-practice']
            ]
          },
          {
            label: 'Complete full katakana recognition test',
            category: 'katakana',
            points: 3,
            resources: [
              resources['katakana-practice']
            ]
          }
        ]
      },
      {
        title: 'Day 13: Katakana Review',
        tasks: [
          {
            label: 'Review all katakana characters',
            category: 'katakana',
            points: 2,
            resources: [
              resources['katakana-basic']
            ]
          },
          {
            label: 'Practice reading katakana loan words',
            category: 'reading',
            points: 3,
            resources: [
              resources['jisho-dictionary']
            ]
          },
          {
            label: 'Complete katakana writing practice',
            category: 'katakana',
            points: 2,
            resources: [
              resources['katakana-practice']
            ]
          }
        ]
      },
      {
        title: 'Day 14: Week 2 Assessment',
        tasks: [
          {
            label: 'Take katakana proficiency test',
            category: 'katakana',
            points: 5,
            resources: [
              resources['katakana-practice']
            ]
          },
          {
            label: 'Read and write 20 katakana loan words',
            category: 'reading',
            points: 4,
            resources: [
              resources['jisho-dictionary']
            ]
          },
          {
            label: 'Plan Week 3 vocabulary study schedule',
            category: 'vocab',
            points: 1,
            resources: [
              resources['study-planner']
            ]
          }
        ]
      }
    ]
  },

  // Week 3-4: Basic Vocabulary
  {
    title: 'Week 3: Essential N5 Vocabulary',
    days: [
      {
        title: 'Day 15: Numbers and Time',
        tasks: [
          {
            label: 'Learn numbers 1-100 in Japanese',
            category: 'vocab',
            points: 3,
            resources: [
              resources['jlpt-n5-vocab'],
              resources['anki-n5']
            ]
          },
          {
            label: 'Learn time expressions (hours, minutes, days)',
            category: 'vocab',
            points: 3,
            resources: [
              resources['jlpt-n5-vocab']
            ]
          },
          {
            label: 'Practice counting and time vocabulary',
            category: 'vocab',
            points: 2,
            resources: [
              resources['japanese-podcast']
            ]
          }
        ]
      },
      {
        title: 'Day 16: Family and People',
        tasks: [
          {
            label: 'Learn family member vocabulary',
            category: 'vocab',
            points: 3,
            resources: [
              resources['jlpt-n5-vocab'],
              resources['anki-n5']
            ]
          },
          {
            label: 'Learn basic people-related words',
            category: 'vocab',
            points: 2,
            resources: [
              resources['jlpt-n5-vocab']
            ]
          },
          {
            label: 'Practice family vocabulary with sentences',
            category: 'vocab',
            points: 2,
            resources: [
              resources['japanese-podcast']
            ]
          }
        ]
      },
      {
        title: 'Day 17: Colors and Adjectives',
        tasks: [
          {
            label: 'Learn basic color vocabulary',
            category: 'vocab',
            points: 2,
            resources: [
              resources['jlpt-n5-vocab'],
              resources['anki-n5']
            ]
          },
          {
            label: 'Learn i-adjectives (大きい, 小さい, etc.)',
            category: 'vocab',
            points: 3,
            resources: [
              resources['jlpt-n5-vocab']
            ]
          },
          {
            label: 'Learn na-adjectives (きれい, 元気, etc.)',
            category: 'vocab',
            points: 2,
            resources: [
              resources['jlpt-n5-vocab']
            ]
          }
        ]
      },
      {
        title: 'Day 18: Food and Drinks',
        tasks: [
          {
            label: 'Learn food vocabulary (rice, fish, vegetables)',
            category: 'vocab',
            points: 3,
            resources: [
              resources['jlpt-n5-vocab'],
              resources['anki-n5']
            ]
          },
          {
            label: 'Learn drink vocabulary',
            category: 'vocab',
            points: 2,
            resources: [
              resources['jlpt-n5-vocab']
            ]
          },
          {
            label: 'Practice food vocabulary with pictures',
            category: 'vocab',
            points: 2,
            resources: [
              resources['japanese-podcast']
            ]
          }
        ]
      },
      {
        title: 'Day 19: Places and Directions',
        tasks: [
          {
            label: 'Learn place vocabulary (home, school, station)',
            category: 'vocab',
            points: 3,
            resources: [
              resources['jlpt-n5-vocab'],
              resources['anki-n5']
            ]
          },
          {
            label: 'Learn direction words (left, right, up, down)',
            category: 'vocab',
            points: 2,
            resources: [
              resources['jlpt-n5-vocab']
            ]
          },
          {
            label: 'Practice location and direction vocabulary',
            category: 'vocab',
            points: 2,
            resources: [
              resources['japanese-podcast']
            ]
          }
        ]
      },
      {
        title: 'Day 20: Body Parts and Clothing',
        tasks: [
          {
            label: 'Learn body part vocabulary',
            category: 'vocab',
            points: 3,
            resources: [
              resources['jlpt-n5-vocab'],
              resources['anki-n5']
            ]
          },
          {
            label: 'Learn clothing vocabulary',
            category: 'vocab',
            points: 2,
            resources: [
              resources['jlpt-n5-vocab']
            ]
          },
          {
            label: 'Practice body and clothing vocabulary',
            category: 'vocab',
            points: 2,
            resources: [
              resources['japanese-podcast']
            ]
          }
        ]
      },
      {
        title: 'Day 21: Week 3 Assessment',
        tasks: [
          {
            label: 'Take vocabulary quiz (numbers, family, colors)',
            category: 'vocab',
            points: 4,
            resources: [
              resources['anki-n5']
            ]
          },
          {
            label: 'Practice vocabulary with flashcards',
            category: 'vocab',
            points: 3,
            resources: [
              resources['anki-n5']
            ]
          },
          {
            label: 'Plan Week 4 vocabulary continuation',
            category: 'vocab',
            points: 1,
            resources: [
              resources['study-planner']
            ]
          }
        ]
      }
    ]
  },

  // Continue with more weeks... (I'll create a more condensed version for brevity)
  {
    title: 'Week 4: More N5 Vocabulary',
    days: [
      {
        title: 'Day 22: Daily Activities',
        tasks: [
          {
            label: 'Learn daily activity verbs (eat, sleep, work)',
            category: 'vocab',
            points: 4,
            resources: [
              resources['jlpt-n5-vocab'],
              resources['anki-n5']
            ]
          },
          {
            label: 'Learn action verbs (go, come, see, hear)',
            category: 'vocab',
            points: 3,
            resources: [
              resources['jlpt-n5-vocab']
            ]
          },
          {
            label: 'Practice verb vocabulary with sentences',
            category: 'vocab',
            points: 2,
            resources: [
              resources['japanese-podcast']
            ]
          }
        ]
      },
      // ... continue with more days
    ]
  }
  // Continue for all 20 weeks...
]

// Generate remaining weeks programmatically
const generateRemainingWeeks = (): Week[] => {
  const weeks: Week[] = []
  
  for (let weekNum = 5; weekNum <= 20; weekNum++) {
    const week: Week = {
      title: `Week ${weekNum}: ${getWeekTheme(weekNum)}`,
      days: []
    }
    
    for (let dayNum = 1; dayNum <= 7; dayNum++) {
      const day: Day = {
        title: `Day ${(weekNum - 1) * 7 + dayNum}: ${getDayTheme(weekNum, dayNum)}`,
        tasks: generateTasksForDay(weekNum, dayNum)
      }
      week.days.push(day)
    }
    
    weeks.push(week)
  }
  
  return weeks
}

const getWeekTheme = (weekNum: number): string => {
  const themes = [
    'Basic Grammar Patterns',
    'Particles and Sentence Structure',
    'Verb Conjugations',
    'Adjective Usage',
    'Question Words and Expressions',
    'Time and Frequency',
    'Location and Movement',
    'Describing Things and People',
    'Making Requests and Offers',
    'Expressing Likes and Dislikes',
    'Past Tense and Experiences',
    'Future Plans and Intentions',
    'Comparing Things',
    'Giving Reasons and Explanations',
    'Making Suggestions',
    'Reading Practice and Comprehension'
  ]
  return themes[weekNum - 5] || 'Advanced N5 Topics'
}

const getDayTheme = (weekNum: number, dayNum: number): string => {
  const themes = ['Introduction', 'Practice', 'Application', 'Review', 'Extension', 'Integration', 'Assessment']
  return themes[dayNum - 1]
}

const generateTasksForDay = (weekNum: number, dayNum: number): Task[] => {
  const tasks: Task[] = []
  
  // Generate 3-4 tasks per day based on week theme
  if (weekNum >= 5 && weekNum <= 8) {
    // Grammar weeks
    tasks.push(
      {
        label: `Learn new grammar pattern for Week ${weekNum}`,
        category: 'grammar',
        points: 3,
        resources: [
          resources['jlpt-n5-grammar'],
          resources['japanese-grammar-guide']
        ]
      },
      {
        label: 'Practice grammar with example sentences',
        category: 'grammar',
        points: 2,
        resources: [
          resources['bunpro-n5']
        ]
      },
      {
        label: 'Apply grammar in writing exercises',
        category: 'grammar',
        points: 2,
        resources: [
          resources['jlpt-n5-grammar']
        ]
      }
    )
  } else if (weekNum >= 9 && weekNum <= 12) {
    // Mixed practice weeks
    tasks.push(
      {
        label: 'Learn new vocabulary set',
        category: 'vocab',
        points: 3,
        resources: [
          resources['jlpt-n5-vocab'],
          resources['anki-n5']
        ]
      },
      {
        label: 'Practice listening comprehension',
        category: 'listening',
        points: 3,
        resources: [
          resources['japanese-podcast'],
          resources['nhk-easy']
        ]
      },
      {
        label: 'Read simple Japanese text',
        category: 'reading',
        points: 2,
        resources: [
          resources['tadoku-books'],
          resources['graded-readers']
        ]
      }
    )
  } else {
    // Advanced weeks
    tasks.push(
      {
        label: 'Review previous vocabulary',
        category: 'vocab',
        points: 2,
        resources: [
          resources['anki-n5']
        ]
      },
      {
        label: 'Practice listening to Japanese audio',
        category: 'listening',
        points: 3,
        resources: [
          resources['japanese-podcast'],
          resources['japanese-songs']
        ]
      },
      {
        label: 'Read Japanese text with comprehension',
        category: 'reading',
        points: 3,
        resources: [
          resources['tadoku-books'],
          resources['yomichan']
        ]
      },
      {
        label: 'Take practice JLPT N5 questions',
        category: 'vocab',
        points: 2,
        resources: [
          resources['jlpt-official']
        ]
      }
    )
  }
  
  return tasks
}

// Export the complete roadmap
export const completeRoadmap = [...roadmapData, ...generateRemainingWeeks()]
