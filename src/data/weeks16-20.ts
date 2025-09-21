import { TaskCategory } from '../types'

export interface CurriculumTask {
  id: string
  label: string
  category: TaskCategory
  points: number
  description?: string
}

export interface CurriculumDay {
  id: string
  title: string
  description: string
  tasks: CurriculumTask[]
}

export interface CurriculumWeek {
  id: string
  weekNumber: number
  title: string
  description: string
  focus: string[]
  days: CurriculumDay[]
  resources?: Array<{
    title: string
    url: string
    type: 'video' | 'site' | 'pdf' | 'audio'
    description?: string
  }>
}

// Weeks 16-20: Reading, Listening, and JLPT N5 Preparation
export const weeks16to20: CurriculumWeek[] = [
  // Week 16: Reading Practice
  {
    id: 'week-16',
    weekNumber: 16,
    title: 'Reading Practice',
    description: 'Develop reading comprehension skills for JLPT N5',
    focus: ['reading', 'vocab'],
    resources: [
      {
        title: 'JLPT N5 Reading Practice',
        url: 'https://jlptsensei.com/jlpt-n5-reading-practice/',
        type: 'site',
        description: 'JLPT N5 reading comprehension practice'
      }
    ],
    days: [
      {
        id: 'week-16-day-1',
        title: 'Basic Reading Comprehension',
        description: 'Practice reading simple Japanese texts',
        tasks: [
          {
            id: 'read-simple-texts',
            label: 'Read 5 simple Japanese texts (100-200 characters)',
            category: 'reading',
            points: 4,
            description: 'Practice basic reading comprehension'
          },
          {
            id: 'answer-reading-questions',
            label: 'Answer comprehension questions about the texts',
            category: 'reading',
            points: 3,
            description: 'Test reading understanding'
          },
          {
            id: 'reading-vocabulary',
            label: 'Learn 20 new vocabulary words from reading texts',
            category: 'vocab',
            points: 3,
            description: 'Expand vocabulary through reading'
          }
        ]
      },
      {
        id: 'week-16-day-2',
        title: 'Hiragana and Katakana Reading',
        description: 'Practice reading mixed hiragana and katakana texts',
        tasks: [
          {
            id: 'read-mixed-scripts',
            label: 'Read texts mixing hiragana and katakana',
            category: 'reading',
            points: 4,
            description: 'Practice mixed script reading'
          },
          {
            id: 'identify-script-types',
            label: 'Identify hiragana, katakana, and kanji in texts',
            category: 'reading',
            points: 3,
            description: 'Develop script recognition skills'
          },
          {
            id: 'loan-word-vocabulary',
            label: 'Learn 15 katakana loan words from reading',
            category: 'vocab',
            points: 3,
            description: 'Expand loan word vocabulary'
          }
        ]
      },
      {
        id: 'week-16-day-3',
        title: 'Basic Kanji Reading',
        description: 'Practice reading basic kanji characters',
        tasks: [
          {
            id: 'read-basic-kanji',
            label: 'Read texts with basic N5 kanji (50-100 characters)',
            category: 'reading',
            points: 4,
            description: 'Practice basic kanji reading'
          },
          {
            id: 'kanji-recognition',
            label: 'Recognize and read 20 basic kanji characters',
            category: 'reading',
            points: 3,
            description: 'Develop kanji recognition skills'
          },
          {
            id: 'kanji-vocabulary',
            label: 'Learn 20 kanji-based vocabulary words',
            category: 'vocab',
            points: 3,
            description: 'Expand kanji vocabulary'
          }
        ]
      },
      {
        id: 'week-16-day-4',
        title: 'Reading Speed Practice',
        description: 'Improve reading speed and fluency',
        tasks: [
          {
            id: 'speed-reading-practice',
            label: 'Practice reading 10 short texts within time limits',
            category: 'reading',
            points: 4,
            description: 'Improve reading speed'
          },
          {
            id: 'fluency-exercises',
            label: 'Read aloud 5 texts to improve fluency',
            category: 'reading',
            points: 3,
            description: 'Develop reading fluency'
          },
          {
            id: 'reading-strategies',
            label: 'Learn reading strategies: skimming, scanning, context clues',
            category: 'reading',
            points: 3,
            description: 'Master reading techniques'
          }
        ]
      },
      {
        id: 'week-16-day-5',
        title: 'Reading Comprehension Questions',
        description: 'Practice answering reading comprehension questions',
        tasks: [
          {
            id: 'comprehension-question-practice',
            label: 'Answer 20 reading comprehension questions',
            category: 'reading',
            points: 4,
            description: 'Practice comprehension question types'
          },
          {
            id: 'inference-practice',
            label: 'Practice making inferences from reading texts',
            category: 'reading',
            points: 3,
            description: 'Develop inference skills'
          },
          {
            id: 'detail-identification',
            label: 'Practice identifying specific details in texts',
            category: 'reading',
            points: 3,
            description: 'Improve detail recognition'
          }
        ]
      },
      {
        id: 'week-16-day-6',
        title: 'Reading Different Text Types',
        description: 'Practice reading various types of texts',
        tasks: [
          {
            id: 'read-different-texts',
            label: 'Read: announcements, instructions, simple stories, descriptions',
            category: 'reading',
            points: 4,
            description: 'Practice diverse text types'
          },
          {
            id: 'text-type-identification',
            label: 'Identify different text types and their purposes',
            category: 'reading',
            points: 3,
            description: 'Develop text type recognition'
          },
          {
            id: 'genre-vocabulary',
            label: 'Learn vocabulary specific to different text types',
            category: 'vocab',
            points: 3,
            description: 'Expand genre-specific vocabulary'
          }
        ]
      },
      {
        id: 'week-16-day-7',
        title: 'Reading Review and Assessment',
        description: 'Comprehensive reading assessment and review',
        tasks: [
          {
            id: 'reading-assessment',
            label: 'Complete comprehensive reading assessment',
            category: 'reading',
            points: 4,
            description: 'Test overall reading ability'
          },
          {
            id: 'reading-weakness-identification',
            label: 'Identify areas for improvement in reading',
            category: 'reading',
            points: 3,
            description: 'Self-assess reading skills'
          },
          {
            id: 'reading-improvement-plan',
            label: 'Create plan for continued reading improvement',
            category: 'reading',
            points: 3,
            description: 'Plan future reading practice'
          }
        ]
      }
    ]
  },
  // Week 17: Listening Practice
  {
    id: 'week-17',
    weekNumber: 17,
    title: 'Listening Practice',
    description: 'Improve listening comprehension for JLPT N5',
    focus: ['listening', 'vocab'],
    resources: [
      {
        title: 'JLPT N5 Listening Practice',
        url: 'https://jlptsensei.com/jlpt-n5-listening-practice/',
        type: 'site',
        description: 'JLPT N5 listening comprehension practice'
      }
    ],
    days: [
      {
        id: 'week-17-day-1',
        title: 'Basic Listening Comprehension',
        description: 'Practice listening to simple Japanese conversations',
        tasks: [
          {
            id: 'listen-simple-conversations',
            label: 'Listen to 10 simple conversations (30-60 seconds each)',
            category: 'listening',
            points: 4,
            description: 'Practice basic listening comprehension'
          },
          {
            id: 'answer-listening-questions',
            label: 'Answer questions about the conversations',
            category: 'listening',
            points: 3,
            description: 'Test listening understanding'
          },
          {
            id: 'listening-vocabulary',
            label: 'Learn 20 new vocabulary words from listening',
            category: 'vocab',
            points: 3,
            description: 'Expand vocabulary through listening'
          }
        ]
      },
      {
        id: 'week-17-day-2',
        title: 'Pronunciation and Intonation',
        description: 'Practice recognizing pronunciation and intonation patterns',
        tasks: [
          {
            id: 'pronunciation-practice',
            label: 'Practice recognizing different pronunciation patterns',
            category: 'listening',
            points: 4,
            description: 'Develop pronunciation recognition skills'
          },
          {
            id: 'intonation-practice',
            label: 'Practice recognizing intonation patterns in questions and statements',
            category: 'listening',
            points: 3,
            description: 'Develop intonation recognition'
          },
          {
            id: 'sound-discrimination',
            label: 'Practice distinguishing similar sounds (ra/la, shi/su, etc.)',
            category: 'listening',
            points: 3,
            description: 'Improve sound discrimination'
          }
        ]
      },
      {
        id: 'week-17-day-3',
        title: 'Listening to Instructions',
        description: 'Practice listening to instructions and directions',
        tasks: [
          {
            id: 'listen-to-instructions',
            label: 'Listen to 10 sets of instructions and follow them',
            category: 'listening',
            points: 4,
            description: 'Practice instruction comprehension'
          },
          {
            id: 'instruction-vocabulary',
            label: 'Learn instruction-related vocabulary',
            category: 'vocab',
            points: 3,
            description: 'Expand instruction vocabulary'
          },
          {
            id: 'sequence-recognition',
            label: 'Practice recognizing sequence words (まず、それから、最後に)',
            category: 'listening',
            points: 3,
            description: 'Develop sequence recognition skills'
          }
        ]
      },
      {
        id: 'week-17-day-4',
        title: 'Listening Speed Practice',
        description: 'Improve listening speed and processing',
        tasks: [
          {
            id: 'speed-listening-practice',
            label: 'Practice listening to faster-paced conversations',
            category: 'listening',
            points: 4,
            description: 'Improve listening speed'
          },
          {
            id: 'note-taking-practice',
            label: 'Practice taking notes while listening',
            category: 'listening',
            points: 3,
            description: 'Develop note-taking skills'
          },
          {
            id: 'listening-strategies',
            label: 'Learn listening strategies: prediction, context clues, key words',
            category: 'listening',
            points: 3,
            description: 'Master listening techniques'
          }
        ]
      },
      {
        id: 'week-17-day-5',
        title: 'Listening Comprehension Questions',
        description: 'Practice answering listening comprehension questions',
        tasks: [
          {
            id: 'listening-question-practice',
            label: 'Answer 20 listening comprehension questions',
            category: 'listening',
            points: 4,
            description: 'Practice listening question types'
          },
          {
            id: 'inference-listening-practice',
            label: 'Practice making inferences from listening',
            category: 'listening',
            points: 3,
            description: 'Develop listening inference skills'
          },
          {
            id: 'detail-listening-identification',
            label: 'Practice identifying specific details in listening',
            category: 'listening',
            points: 3,
            description: 'Improve detail recognition in listening'
          }
        ]
      },
      {
        id: 'week-17-day-6',
        title: 'Listening to Different Speakers',
        description: 'Practice listening to different speakers and accents',
        tasks: [
          {
            id: 'different-speaker-practice',
            label: 'Listen to conversations with different speakers (male/female, different ages)',
            category: 'listening',
            points: 4,
            description: 'Practice diverse speaker recognition'
          },
          {
            id: 'accent-recognition',
            label: 'Practice recognizing different speaking styles and speeds',
            category: 'listening',
            points: 3,
            description: 'Develop accent recognition skills'
          },
          {
            id: 'speaker-vocabulary',
            label: 'Learn vocabulary for different speaking situations',
            category: 'vocab',
            points: 3,
            description: 'Expand speaking situation vocabulary'
          }
        ]
      },
      {
        id: 'week-17-day-7',
        title: 'Listening Review and Assessment',
        description: 'Comprehensive listening assessment and review',
        tasks: [
          {
            id: 'listening-assessment',
            label: 'Complete comprehensive listening assessment',
            category: 'listening',
            points: 4,
            description: 'Test overall listening ability'
          },
          {
            id: 'listening-weakness-identification',
            label: 'Identify areas for improvement in listening',
            category: 'listening',
            points: 3,
            description: 'Self-assess listening skills'
          },
          {
            id: 'listening-improvement-plan',
            label: 'Create plan for continued listening improvement',
            category: 'listening',
            points: 3,
            description: 'Plan future listening practice'
          }
        ]
      }
    ]
  },
  // Week 18: JLPT N5 Preparation - Grammar
  {
    id: 'week-18',
    weekNumber: 18,
    title: 'JLPT N5 Preparation - Grammar',
    description: 'Comprehensive grammar review and practice for JLPT N5',
    focus: ['grammar', 'vocab'],
    resources: [
      {
        title: 'JLPT N5 Grammar List',
        url: 'https://jlptsensei.com/jlpt-n5-grammar-list/',
        type: 'site',
        description: 'Complete JLPT N5 grammar patterns'
      }
    ],
    days: [
      {
        id: 'week-18-day-1',
        title: 'Essential Particles Review',
        description: 'Review all essential particles for JLPT N5',
        tasks: [
          {
            id: 'particles-review',
            label: 'Review particles: は, が, を, に, で, の, と, から, まで',
            category: 'grammar',
            points: 4,
            description: 'Master all N5 particles'
          },
          {
            id: 'particle-practice',
            label: 'Complete 50 particle practice questions',
            category: 'grammar',
            points: 4,
            description: 'Practice particle usage'
          },
          {
            id: 'particle-vocabulary',
            label: 'Learn particle-related vocabulary and expressions',
            category: 'vocab',
            points: 3,
            description: 'Expand particle vocabulary'
          }
        ]
      },
      {
        id: 'week-18-day-2',
        title: 'Verb Conjugation Review',
        description: 'Review all verb conjugation patterns for JLPT N5',
        tasks: [
          {
            id: 'verb-conjugation-review',
            label: 'Review all verb conjugations: present, past, negative, te-form',
            category: 'grammar',
            points: 4,
            description: 'Master all N5 verb forms'
          },
          {
            id: 'verb-practice',
            label: 'Complete 50 verb conjugation practice questions',
            category: 'grammar',
            points: 4,
            description: 'Practice verb conjugations'
          },
          {
            id: 'verb-vocabulary',
            label: 'Learn 50 essential N5 verbs',
            category: 'vocab',
            points: 3,
            description: 'Master N5 verb vocabulary'
          }
        ]
      },
      {
        id: 'week-18-day-3',
        title: 'Adjective Usage Review',
        description: 'Review all adjective patterns for JLPT N5',
        tasks: [
          {
            id: 'adjective-review',
            label: 'Review i-adjectives and na-adjectives: present, past, negative',
            category: 'grammar',
            points: 4,
            description: 'Master all N5 adjective forms'
          },
          {
            id: 'adjective-practice',
            label: 'Complete 50 adjective practice questions',
            category: 'grammar',
            points: 4,
            description: 'Practice adjective usage'
          },
          {
            id: 'adjective-vocabulary',
            label: 'Learn 50 essential N5 adjectives',
            category: 'vocab',
            points: 3,
            description: 'Master N5 adjective vocabulary'
          }
        ]
      },
      {
        id: 'week-18-day-4',
        title: 'Question Words and Interrogatives',
        description: 'Review question formation and interrogative words',
        tasks: [
          {
            id: 'question-words-review',
            label: 'Review question words: 何, 誰, どこ, いつ, なぜ, どう',
            category: 'grammar',
            points: 4,
            description: 'Master N5 question words'
          },
          {
            id: 'question-formation-practice',
            label: 'Practice forming 30 different questions',
            category: 'grammar',
            points: 4,
            description: 'Practice question formation'
          },
          {
            id: 'question-vocabulary',
            label: 'Learn question-related vocabulary and expressions',
            category: 'vocab',
            points: 3,
            description: 'Expand question vocabulary'
          }
        ]
      },
      {
        id: 'week-18-day-5',
        title: 'Time and Frequency Expressions',
        description: 'Review time-related grammar and expressions',
        tasks: [
          {
            id: 'time-expressions-review',
            label: 'Review time expressions: に, から, まで, の間, 時, 分',
            category: 'grammar',
            points: 4,
            description: 'Master N5 time expressions'
          },
          {
            id: 'time-practice',
            label: 'Complete 40 time-related practice questions',
            category: 'grammar',
            points: 4,
            description: 'Practice time expressions'
          },
          {
            id: 'time-vocabulary',
            label: 'Learn 40 essential N5 time vocabulary',
            category: 'vocab',
            points: 3,
            description: 'Master N5 time vocabulary'
          }
        ]
      },
      {
        id: 'week-18-day-6',
        title: 'Location and Movement Grammar',
        description: 'Review location and movement-related grammar',
        tasks: [
          {
            id: 'location-grammar-review',
            label: 'Review location grammar: に, で, から, へ, を with movement',
            category: 'grammar',
            points: 4,
            description: 'Master N5 location grammar'
          },
          {
            id: 'location-practice',
            label: 'Complete 40 location and movement practice questions',
            category: 'grammar',
            points: 4,
            description: 'Practice location grammar'
          },
          {
            id: 'location-vocabulary',
            label: 'Learn 40 essential N5 location vocabulary',
            category: 'vocab',
            points: 3,
            description: 'Master N5 location vocabulary'
          }
        ]
      },
      {
        id: 'week-18-day-7',
        title: 'Grammar Review and Assessment',
        description: 'Comprehensive grammar assessment and review',
        tasks: [
          {
            id: 'grammar-assessment',
            label: 'Complete comprehensive N5 grammar assessment',
            category: 'grammar',
            points: 4,
            description: 'Test overall grammar ability'
          },
          {
            id: 'grammar-weakness-identification',
            label: 'Identify areas for improvement in grammar',
            category: 'grammar',
            points: 3,
            description: 'Self-assess grammar skills'
          },
          {
            id: 'grammar-improvement-plan',
            label: 'Create plan for continued grammar improvement',
            category: 'grammar',
            points: 3,
            description: 'Plan future grammar practice'
          }
        ]
      }
    ]
  },
  // Week 19: JLPT N5 Preparation - Vocabulary
  {
    id: 'week-19',
    weekNumber: 19,
    title: 'JLPT N5 Preparation - Vocabulary',
    description: 'Comprehensive vocabulary review and practice for JLPT N5',
    focus: ['vocab', 'reading'],
    resources: [
      {
        title: 'JLPT N5 Vocabulary List',
        url: 'https://jlptsensei.com/jlpt-n5-vocabulary-list/',
        type: 'site',
        description: 'Complete JLPT N5 vocabulary list'
      }
    ],
    days: [
      {
        id: 'week-19-day-1',
        title: 'Essential Nouns Review',
        description: 'Review all essential nouns for JLPT N5',
        tasks: [
          {
            id: 'nouns-review',
            label: 'Review 200 essential N5 nouns: people, places, things, time',
            category: 'vocab',
            points: 4,
            description: 'Master N5 noun vocabulary'
          },
          {
            id: 'noun-practice',
            label: 'Complete 50 noun recognition and usage practice questions',
            category: 'vocab',
            points: 4,
            description: 'Practice noun usage'
          },
          {
            id: 'noun-categories',
            label: 'Organize nouns by categories: family, food, transportation, etc.',
            category: 'vocab',
            points: 3,
            description: 'Categorize vocabulary for better retention'
          }
        ]
      },
      {
        id: 'week-19-day-2',
        title: 'Essential Verbs Review',
        description: 'Review all essential verbs for JLPT N5',
        tasks: [
          {
            id: 'verbs-review',
            label: 'Review 150 essential N5 verbs: action, state, auxiliary verbs',
            category: 'vocab',
            points: 4,
            description: 'Master N5 verb vocabulary'
          },
          {
            id: 'verb-practice',
            label: 'Complete 50 verb recognition and conjugation practice questions',
            category: 'vocab',
            points: 4,
            description: 'Practice verb usage'
          },
          {
            id: 'verb-groups',
            label: 'Organize verbs by groups: godan, ichidan, irregular',
            category: 'vocab',
            points: 3,
            description: 'Categorize verbs for better understanding'
          }
        ]
      },
      {
        id: 'week-19-day-3',
        title: 'Essential Adjectives Review',
        description: 'Review all essential adjectives for JLPT N5',
        tasks: [
          {
            id: 'adjectives-review',
            label: 'Review 100 essential N5 adjectives: i-adjectives and na-adjectives',
            category: 'vocab',
            points: 4,
            description: 'Master N5 adjective vocabulary'
          },
          {
            id: 'adjective-practice',
            label: 'Complete 50 adjective recognition and conjugation practice questions',
            category: 'vocab',
            points: 4,
            description: 'Practice adjective usage'
          },
          {
            id: 'adjective-categories',
            label: 'Organize adjectives by categories: size, color, feeling, etc.',
            category: 'vocab',
            points: 3,
            description: 'Categorize adjectives for better retention'
          }
        ]
      },
      {
        id: 'week-19-day-4',
        title: 'Essential Adverbs and Expressions',
        description: 'Review adverbs and common expressions for JLPT N5',
        tasks: [
          {
            id: 'adverbs-review',
            label: 'Review 80 essential N5 adverbs: time, frequency, degree, manner',
            category: 'vocab',
            points: 4,
            description: 'Master N5 adverb vocabulary'
          },
          {
            id: 'expressions-review',
            label: 'Review 50 essential N5 expressions: greetings, politeness, common phrases',
            category: 'vocab',
            points: 4,
            description: 'Master N5 expressions'
          },
          {
            id: 'adverb-practice',
            label: 'Complete 40 adverb and expression practice questions',
            category: 'vocab',
            points: 3,
            description: 'Practice adverb and expression usage'
          }
        ]
      },
      {
        id: 'week-19-day-5',
        title: 'Numbers and Counters',
        description: 'Review numbers and counter words for JLPT N5',
        tasks: [
          {
            id: 'numbers-review',
            label: 'Review numbers 1-100 and basic counting',
            category: 'vocab',
            points: 4,
            description: 'Master N5 number vocabulary'
          },
          {
            id: 'counters-review',
            label: 'Review essential counters: 個, 人, 本, 枚, 台, 匹, 頭',
            category: 'vocab',
            points: 4,
            description: 'Master N5 counter vocabulary'
          },
          {
            id: 'number-practice',
            label: 'Complete 30 number and counter practice questions',
            category: 'vocab',
            points: 3,
            description: 'Practice number and counter usage'
          }
        ]
      },
      {
        id: 'week-19-day-6',
        title: 'Hiragana and Katakana Vocabulary',
        description: 'Review hiragana and katakana vocabulary for JLPT N5',
        tasks: [
          {
            id: 'hiragana-vocabulary-review',
            label: 'Review 100 essential hiragana vocabulary words',
            category: 'vocab',
            points: 4,
            description: 'Master N5 hiragana vocabulary'
          },
          {
            id: 'katakana-vocabulary-review',
            label: 'Review 50 essential katakana vocabulary words',
            category: 'vocab',
            points: 4,
            description: 'Master N5 katakana vocabulary'
          },
          {
            id: 'script-practice',
            label: 'Complete 40 hiragana and katakana vocabulary practice questions',
            category: 'vocab',
            points: 3,
            description: 'Practice script-specific vocabulary'
          }
        ]
      },
      {
        id: 'week-19-day-7',
        title: 'Vocabulary Review and Assessment',
        description: 'Comprehensive vocabulary assessment and review',
        tasks: [
          {
            id: 'vocabulary-assessment',
            label: 'Complete comprehensive N5 vocabulary assessment',
            category: 'vocab',
            points: 4,
            description: 'Test overall vocabulary ability'
          },
          {
            id: 'vocabulary-weakness-identification',
            label: 'Identify areas for improvement in vocabulary',
            category: 'vocab',
            points: 3,
            description: 'Self-assess vocabulary skills'
          },
          {
            id: 'vocabulary-improvement-plan',
            label: 'Create plan for continued vocabulary improvement',
            category: 'vocab',
            points: 3,
            description: 'Plan future vocabulary practice'
          }
        ]
      }
    ]
  },
  // Week 20: JLPT N5 Final Preparation
  {
    id: 'week-20',
    weekNumber: 20,
    title: 'JLPT N5 Final Preparation',
    description: 'Final comprehensive preparation for JLPT N5 examination',
    focus: ['grammar', 'vocab', 'reading', 'listening'],
    resources: [
      {
        title: 'JLPT N5 Practice Tests',
        url: 'https://jlptsensei.com/jlpt-n5-practice-tests/',
        type: 'site',
        description: 'Complete JLPT N5 practice tests'
      }
    ],
    days: [
      {
        id: 'week-20-day-1',
        title: 'Mock Test 1 - Grammar and Vocabulary',
        description: 'Complete first mock test focusing on grammar and vocabulary',
        tasks: [
          {
            id: 'mock-test-1',
            label: 'Complete JLPT N5 mock test 1 (Grammar and Vocabulary sections)',
            category: 'grammar',
            points: 4,
            description: 'Practice test-taking skills'
          },
          {
            id: 'test-analysis-1',
            label: 'Analyze results and identify weak areas',
            category: 'grammar',
            points: 3,
            description: 'Self-assess test performance'
          },
          {
            id: 'weak-area-review-1',
            label: 'Review and practice identified weak areas',
            category: 'grammar',
            points: 3,
            description: 'Address specific weaknesses'
          }
        ]
      },
      {
        id: 'week-20-day-2',
        title: 'Mock Test 2 - Reading Comprehension',
        description: 'Complete second mock test focusing on reading comprehension',
        tasks: [
          {
            id: 'mock-test-2',
            label: 'Complete JLPT N5 mock test 2 (Reading Comprehension section)',
            category: 'reading',
            points: 4,
            description: 'Practice reading test skills'
          },
          {
            id: 'test-analysis-2',
            label: 'Analyze reading test results and identify weak areas',
            category: 'reading',
            points: 3,
            description: 'Self-assess reading performance'
          },
          {
            id: 'weak-area-review-2',
            label: 'Review and practice identified reading weak areas',
            category: 'reading',
            points: 3,
            description: 'Address reading weaknesses'
          }
        ]
      },
      {
        id: 'week-20-day-3',
        title: 'Mock Test 3 - Listening Comprehension',
        description: 'Complete third mock test focusing on listening comprehension',
        tasks: [
          {
            id: 'mock-test-3',
            label: 'Complete JLPT N5 mock test 3 (Listening Comprehension section)',
            category: 'listening',
            points: 4,
            description: 'Practice listening test skills'
          },
          {
            id: 'test-analysis-3',
            label: 'Analyze listening test results and identify weak areas',
            category: 'listening',
            points: 3,
            description: 'Self-assess listening performance'
          },
          {
            id: 'weak-area-review-3',
            label: 'Review and practice identified listening weak areas',
            category: 'listening',
            points: 3,
            description: 'Address listening weaknesses'
          }
        ]
      },
      {
        id: 'week-20-day-4',
        title: 'Complete Mock Test 4',
        description: 'Complete full-length JLPT N5 mock test',
        tasks: [
          {
            id: 'complete-mock-test',
            label: 'Complete full-length JLPT N5 mock test under timed conditions',
            category: 'grammar',
            points: 4,
            description: 'Practice complete test experience'
          },
          {
            id: 'comprehensive-analysis',
            label: 'Analyze complete test results across all sections',
            category: 'grammar',
            points: 3,
            description: 'Comprehensive performance analysis'
          },
          {
            id: 'final-weakness-identification',
            label: 'Identify final areas for improvement',
            category: 'grammar',
            points: 3,
            description: 'Final weakness assessment'
          }
        ]
      },
      {
        id: 'week-20-day-5',
        title: 'Test-Taking Strategies Review',
        description: 'Review and practice test-taking strategies',
        tasks: [
          {
            id: 'test-strategies-review',
            label: 'Review test-taking strategies: time management, question approach, guessing',
            category: 'grammar',
            points: 4,
            description: 'Master test-taking techniques'
          },
          {
            id: 'time-management-practice',
            label: 'Practice time management for each test section',
            category: 'grammar',
            points: 3,
            description: 'Develop time management skills'
          },
          {
            id: 'question-approach-practice',
            label: 'Practice different approaches for different question types',
            category: 'grammar',
            points: 3,
            description: 'Master question-solving strategies'
          }
        ]
      },
      {
        id: 'week-20-day-6',
        title: 'Final Review and Confidence Building',
        description: 'Final review of all N5 content and confidence building',
        tasks: [
          {
            id: 'final-content-review',
            label: 'Review all N5 content: grammar, vocabulary, reading, listening',
            category: 'grammar',
            points: 4,
            description: 'Comprehensive final review'
          },
          {
            id: 'confidence-building',
            label: 'Practice positive self-talk and confidence building exercises',
            category: 'grammar',
            points: 3,
            description: 'Build test confidence'
          },
          {
            id: 'final-preparation-checklist',
            label: 'Complete final preparation checklist: materials, timing, logistics',
            category: 'grammar',
            points: 3,
            description: 'Ensure complete preparation'
          }
        ]
      },
      {
        id: 'week-20-day-7',
        title: 'JLPT N5 Exam Day Preparation',
        description: 'Final day preparation and exam day readiness',
        tasks: [
          {
            id: 'exam-day-preparation',
            label: 'Prepare for exam day: rest, materials, transportation, timing',
            category: 'grammar',
            points: 4,
            description: 'Final exam day preparation'
          },
          {
            id: 'final-motivation',
            label: 'Review progress and celebrate achievements',
            category: 'grammar',
            points: 3,
            description: 'Build final motivation'
          },
          {
            id: 'success-visualization',
            label: 'Visualize successful exam completion',
            category: 'grammar',
            points: 3,
            description: 'Mental preparation for success'
          }
        ]
      }
    ]
  }
]
