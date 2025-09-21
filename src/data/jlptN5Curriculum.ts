import { TaskCategory } from '@/types'

export interface CurriculumTask {
  id: string
  label: string
  category: TaskCategory
  points: number
  description?: string
  resources?: Array<{
    title: string
    url: string
    type: 'video' | 'site' | 'pdf' | 'audio'
  }>
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
}

// Comprehensive 20-week JLPT N5 curriculum
export const jlptN5Curriculum: CurriculumWeek[] = [
  // Week 1: Hiragana Foundation
  {
    id: 'week-1',
    weekNumber: 1,
    title: 'Hiragana Foundation',
    description: 'Master the hiragana syllabary with proper stroke order and pronunciation',
    focus: ['hiragana', 'pronunciation', 'writing'],
    days: [
      {
        id: 'week-1-day-1',
        title: 'Basic Vowels (あ-お)',
        description: 'Learn the five basic vowel sounds and their hiragana characters',
        tasks: [
          {
            id: 'learn-vowels',
            label: 'Learn hiragana あ-お (a, i, u, e, o)',
            category: 'hiragana',
            points: 3,
            description: 'Master the five basic vowel characters with proper pronunciation',
            resources: [
              { title: 'Tofugu Hiragana Guide', url: 'https://www.tofugu.com/japanese/learn-hiragana/', type: 'site' },
              { title: 'Hiragana Pronunciation', url: 'https://www.youtube.com/watch?v=6p9Il_j0zjc', type: 'video' }
            ]
          },
          {
            id: 'practice-vowels',
            label: 'Practice writing あ-お 20 times each',
            category: 'hiragana',
            points: 2,
            description: 'Develop muscle memory for proper stroke order'
          },
          {
            id: 'pronunciation-vowels',
            label: 'Practice pronunciation of あ-お',
            category: 'listening',
            points: 2,
            description: 'Perfect your vowel pronunciation'
          }
        ]
      },
      {
        id: 'week-1-day-2',
        title: 'K-Column (か-こ)',
        description: 'Learn the K-column characters and practice with basic words',
        tasks: [
          {
            id: 'learn-k-column',
            label: 'Learn hiragana か-こ (ka, ki, ku, ke, ko)',
            category: 'hiragana',
            points: 3,
            description: 'Master the K-column with proper pronunciation'
          },
          {
            id: 'practice-k-writing',
            label: 'Practice writing か-こ with stroke order',
            category: 'hiragana',
            points: 2,
            description: 'Focus on the correct stroke order for each character'
          },
          {
            id: 'k-vocabulary',
            label: 'Learn 5 basic words using K-column (かばん, き, etc.)',
            category: 'vocab',
            points: 2,
            description: 'Start building vocabulary with learned characters'
          }
        ]
      },
      {
        id: 'week-1-day-3',
        title: 'S-Column (さ-そ)',
        description: 'Master the S-column and practice reading simple words',
        tasks: [
          {
            id: 'learn-s-column',
            label: 'Learn hiragana さ-そ (sa, shi, su, se, so)',
            category: 'hiragana',
            points: 3,
            description: 'Pay special attention to し (shi) pronunciation'
          },
          {
            id: 'practice-s-writing',
            label: 'Practice writing さ-そ 15 times each',
            category: 'hiragana',
            points: 2,
            description: 'Develop consistent handwriting'
          },
          {
            id: 's-vocabulary',
            label: 'Learn 5 words using S-column (さかな, すし, etc.)',
            category: 'vocab',
            points: 2,
            description: 'Expand vocabulary with new characters'
          }
        ]
      },
      {
        id: 'week-1-day-4',
        title: 'T-Column (た-と)',
        description: 'Learn the T-column and practice with basic greetings',
        tasks: [
          {
            id: 'learn-t-column',
            label: 'Learn hiragana た-と (ta, chi, tsu, te, to)',
            category: 'hiragana',
            points: 3,
            description: 'Focus on ち (chi) and つ (tsu) pronunciation'
          },
          {
            id: 'practice-t-writing',
            label: 'Practice writing た-と with proper stroke order',
            category: 'hiragana',
            points: 2,
            description: 'Master the stroke order for each character'
          },
          {
            id: 'basic-greetings',
            label: 'Learn basic greetings: こんにちは, ありがとう',
            category: 'vocab',
            points: 2,
            description: 'Essential Japanese greetings'
          }
        ]
      },
      {
        id: 'week-1-day-5',
        title: 'N-Column (な-の)',
        description: 'Master the N-column and practice reading exercises',
        tasks: [
          {
            id: 'learn-n-column',
            label: 'Learn hiragana な-の (na, ni, nu, ne, no)',
            category: 'hiragana',
            points: 3,
            description: 'Practice the N-column pronunciation'
          },
          {
            id: 'practice-n-writing',
            label: 'Practice writing な-の 15 times each',
            category: 'hiragana',
            points: 2,
            description: 'Develop consistent character formation'
          },
          {
            id: 'reading-practice',
            label: 'Read 10 simple hiragana words',
            category: 'reading',
            points: 2,
            description: 'Practice reading with learned characters'
          }
        ]
      },
      {
        id: 'week-1-day-6',
        title: 'H-Column (は-ほ)',
        description: 'Learn the H-column and practice with numbers',
        tasks: [
          {
            id: 'learn-h-column',
            label: 'Learn hiragana は-ほ (ha, hi, fu, he, ho)',
            category: 'hiragana',
            points: 3,
            description: 'Note that ふ is pronounced "fu" not "hu"'
          },
          {
            id: 'practice-h-writing',
            label: 'Practice writing は-ほ with stroke order',
            category: 'hiragana',
            points: 2,
            description: 'Focus on proper stroke order'
          },
          {
            id: 'numbers-1-10',
            label: 'Learn numbers 1-10: いち, に, さん, etc.',
            category: 'vocab',
            points: 2,
            description: 'Essential Japanese numbers'
          }
        ]
      },
      {
        id: 'week-1-day-7',
        title: 'Week 1 Review',
        description: 'Comprehensive review of all learned hiragana characters',
        tasks: [
          {
            id: 'review-all-hiragana',
            label: 'Review all hiragana characters learned this week',
            category: 'hiragana',
            points: 3,
            description: 'Test your knowledge of あ-ほ'
          },
          {
            id: 'writing-test',
            label: 'Write all hiragana from memory',
            category: 'hiragana',
            points: 3,
            description: 'Demonstrate mastery through writing'
          },
          {
            id: 'pronunciation-test',
            label: 'Practice pronunciation of all learned characters',
            category: 'listening',
            points: 2,
            description: 'Perfect your pronunciation'
          }
        ]
      }
    ]
  },
  // Week 2: Hiragana Completion
  {
    id: 'week-2',
    weekNumber: 2,
    title: 'Hiragana Completion',
    description: 'Complete the hiragana syllabary and begin basic vocabulary',
    focus: ['hiragana', 'vocab', 'reading'],
    days: [
      {
        id: 'week-2-day-1',
        title: 'M-Column (ま-も)',
        description: 'Learn the M-column and practice with family words',
        tasks: [
          {
            id: 'learn-m-column',
            label: 'Learn hiragana ま-も (ma, mi, mu, me, mo)',
            category: 'hiragana',
            points: 3,
            description: 'Master the M-column characters'
          },
          {
            id: 'practice-m-writing',
            label: 'Practice writing ま-も 15 times each',
            category: 'hiragana',
            points: 2,
            description: 'Develop consistent handwriting'
          },
          {
            id: 'family-vocabulary',
            label: 'Learn family words: おかあさん, おとうさん, こども',
            category: 'vocab',
            points: 2,
            description: 'Essential family vocabulary'
          }
        ]
      },
      {
        id: 'week-2-day-2',
        title: 'Y-Column (や-よ)',
        description: 'Learn the Y-column and practice with time expressions',
        tasks: [
          {
            id: 'learn-y-column',
            label: 'Learn hiragana や-よ (ya, yu, yo)',
            category: 'hiragana',
            points: 2,
            description: 'Note: only 3 characters in Y-column'
          },
          {
            id: 'practice-y-writing',
            label: 'Practice writing や-よ 20 times each',
            category: 'hiragana',
            points: 2,
            description: 'Master these characters'
          },
          {
            id: 'time-vocabulary',
            label: 'Learn time words: きょう, きのう, あした',
            category: 'vocab',
            points: 2,
            description: 'Basic time expressions'
          }
        ]
      },
      {
        id: 'week-2-day-3',
        title: 'R-Column (ら-ろ)',
        description: 'Learn the R-column and practice with colors',
        tasks: [
          {
            id: 'learn-r-column',
            label: 'Learn hiragana ら-ろ (ra, ri, ru, re, ro)',
            category: 'hiragana',
            points: 3,
            description: 'Practice the R-sound (between L and R)'
          },
          {
            id: 'practice-r-writing',
            label: 'Practice writing ら-ろ 15 times each',
            category: 'hiragana',
            points: 2,
            description: 'Focus on proper stroke order'
          },
          {
            id: 'color-vocabulary',
            label: 'Learn colors: あか, あお, きいろ, しろ, くろ',
            category: 'vocab',
            points: 2,
            description: 'Basic color vocabulary'
          }
        ]
      },
      {
        id: 'week-2-day-4',
        title: 'W-Column (わ-ん)',
        description: 'Complete hiragana with W-column and ん',
        tasks: [
          {
            id: 'learn-w-column',
            label: 'Learn hiragana わ-を-ん (wa, wo, n)',
            category: 'hiragana',
            points: 2,
            description: 'Complete the hiragana syllabary'
          },
          {
            id: 'practice-w-writing',
            label: 'Practice writing わ-を-ん 20 times each',
            category: 'hiragana',
            points: 2,
            description: 'Master the final characters'
          },
          {
            id: 'basic-verbs',
            label: 'Learn basic verbs: いく, くる, する, ある',
            category: 'vocab',
            points: 2,
            description: 'Essential Japanese verbs'
          }
        ]
      },
      {
        id: 'week-2-day-5',
        title: 'Dakuten and Handakuten',
        description: 'Learn voiced sounds and practice with food vocabulary',
        tasks: [
          {
            id: 'learn-dakuten',
            label: 'Learn dakuten (が-ざ-だ-ば) and handakuten (ぱ-ぴ-ぷ-ぺ-ぽ)',
            category: 'hiragana',
            points: 3,
            description: 'Master voiced and semi-voiced sounds'
          },
          {
            id: 'practice-dakuten',
            label: 'Practice writing dakuten characters',
            category: 'hiragana',
            points: 2,
            description: 'Learn the modification marks'
          },
          {
            id: 'food-vocabulary',
            label: 'Learn food words: ごはん, みず, にく, やさい',
            category: 'vocab',
            points: 2,
            description: 'Basic food vocabulary'
          }
        ]
      },
      {
        id: 'week-2-day-6',
        title: 'Small Characters',
        description: 'Learn small characters and practice with body parts',
        tasks: [
          {
            id: 'learn-small-chars',
            label: 'Learn small characters: っ, ゃ, ゅ, ょ',
            category: 'hiragana',
            points: 2,
            description: 'Master small character usage'
          },
          {
            id: 'practice-small-chars',
            label: 'Practice writing words with small characters',
            category: 'hiragana',
            points: 2,
            description: 'Learn proper usage in words'
          },
          {
            id: 'body-vocabulary',
            label: 'Learn body parts: あたま, て, あし, め',
            category: 'vocab',
            points: 2,
            description: 'Basic body part vocabulary'
          }
        ]
      },
      {
        id: 'week-2-day-7',
        title: 'Hiragana Mastery Test',
        description: 'Comprehensive test of all hiragana knowledge',
        tasks: [
          {
            id: 'hiragana-test',
            label: 'Complete hiragana recognition test',
            category: 'hiragana',
            points: 4,
            description: 'Test all hiragana characters'
          },
          {
            id: 'writing-test',
            label: 'Write all hiragana from memory',
            category: 'hiragana',
            points: 4,
            description: 'Demonstrate complete mastery'
          },
          {
            id: 'reading-test',
            label: 'Read 20 hiragana words fluently',
            category: 'reading',
            points: 3,
            description: 'Test reading comprehension'
          }
        ]
      }
    ]
  },
  // Week 3: Katakana Foundation
  {
    id: 'week-3',
    weekNumber: 3,
    title: 'Katakana Foundation',
    description: 'Begin learning katakana characters and foreign loan words',
    focus: ['katakana', 'vocab', 'reading'],
    days: [
      {
        id: 'week-3-day-1',
        title: 'Katakana Vowels (ア-オ)',
        description: 'Learn katakana vowel characters and their usage',
        tasks: [
          {
            id: 'learn-katakana-vowels',
            label: 'Learn katakana ア-オ (a, i, u, e, o)',
            category: 'katakana',
            points: 3,
            description: 'Master katakana vowel characters'
          },
          {
            id: 'practice-katakana-vowels',
            label: 'Practice writing ア-オ 20 times each',
            category: 'katakana',
            points: 2,
            description: 'Develop katakana handwriting'
          },
          {
            id: 'loan-words-vowels',
            label: 'Learn loan words: アメリカ, イタリア, ウルグアイ',
            category: 'vocab',
            points: 2,
            description: 'Country names in katakana'
          }
        ]
      },
      {
        id: 'week-3-day-2',
        title: 'Katakana K-Column (カ-コ)',
        description: 'Learn katakana K-column and practice with food words',
        tasks: [
          {
            id: 'learn-katakana-k',
            label: 'Learn katakana カ-コ (ka, ki, ku, ke, ko)',
            category: 'katakana',
            points: 3,
            description: 'Master katakana K-column'
          },
          {
            id: 'practice-katakana-k',
            label: 'Practice writing カ-コ 15 times each',
            category: 'katakana',
            points: 2,
            description: 'Focus on katakana stroke order'
          },
          {
            id: 'food-loan-words',
            label: 'Learn food loan words: コーヒー, ケーキ, カレー',
            category: 'vocab',
            points: 2,
            description: 'Common food loan words'
          }
        ]
      },
      {
        id: 'week-3-day-3',
        title: 'Katakana S-Column (サ-ソ)',
        description: 'Learn katakana S-column and practice with technology words',
        tasks: [
          {
            id: 'learn-katakana-s',
            label: 'Learn katakana サ-ソ (sa, shi, su, se, so)',
            category: 'katakana',
            points: 3,
            description: 'Master katakana S-column'
          },
          {
            id: 'practice-katakana-s',
            label: 'Practice writing サ-ソ 15 times each',
            category: 'katakana',
            points: 2,
            description: 'Develop consistent katakana writing'
          },
          {
            id: 'tech-vocabulary',
            label: 'Learn tech words: コンピューター, ソフト, システム',
            category: 'vocab',
            points: 2,
            description: 'Technology vocabulary in katakana'
          }
        ]
      },
      {
        id: 'week-3-day-4',
        title: 'Katakana T-Column (タ-ト)',
        description: 'Learn katakana T-column and practice with sports words',
        tasks: [
          {
            id: 'learn-katakana-t',
            label: 'Learn katakana タ-ト (ta, chi, tsu, te, to)',
            category: 'katakana',
            points: 3,
            description: 'Master katakana T-column'
          },
          {
            id: 'practice-katakana-t',
            label: 'Practice writing タ-ト 15 times each',
            category: 'katakana',
            points: 2,
            description: 'Focus on proper katakana formation'
          },
          {
            id: 'sports-vocabulary',
            label: 'Learn sports words: テニス, サッカー, バスケットボール',
            category: 'vocab',
            points: 2,
            description: 'Sports vocabulary in katakana'
          }
        ]
      },
      {
        id: 'week-3-day-5',
        title: 'Katakana N-Column (ナ-ノ)',
        description: 'Learn katakana N-column and practice with music words',
        tasks: [
          {
            id: 'learn-katakana-n',
            label: 'Learn katakana ナ-ノ (na, ni, nu, ne, no)',
            category: 'katakana',
            points: 3,
            description: 'Master katakana N-column'
          },
          {
            id: 'practice-katakana-n',
            label: 'Practice writing ナ-ノ 15 times each',
            category: 'katakana',
            points: 2,
            description: 'Develop katakana muscle memory'
          },
          {
            id: 'music-vocabulary',
            label: 'Learn music words: ミュージック, ピアノ, ギター',
            category: 'vocab',
            points: 2,
            description: 'Music vocabulary in katakana'
          }
        ]
      },
      {
        id: 'week-3-day-6',
        title: 'Katakana H-Column (ハ-ホ)',
        description: 'Learn katakana H-column and practice with clothing words',
        tasks: [
          {
            id: 'learn-katakana-h',
            label: 'Learn katakana ハ-ホ (ha, hi, fu, he, ho)',
            category: 'katakana',
            points: 3,
            description: 'Master katakana H-column'
          },
          {
            id: 'practice-katakana-h',
            label: 'Practice writing ハ-ホ 15 times each',
            category: 'katakana',
            points: 2,
            description: 'Perfect katakana handwriting'
          },
          {
            id: 'clothing-vocabulary',
            label: 'Learn clothing words: シャツ, パンツ, スカート',
            category: 'vocab',
            points: 2,
            description: 'Clothing vocabulary in katakana'
          }
        ]
      },
      {
        id: 'week-3-day-7',
        title: 'Katakana Review',
        description: 'Review all learned katakana and practice reading',
        tasks: [
          {
            id: 'katakana-review',
            label: 'Review all katakana characters learned this week',
            category: 'katakana',
            points: 3,
            description: 'Test your katakana knowledge'
          },
          {
            id: 'katakana-writing',
            label: 'Write all learned katakana from memory',
            category: 'katakana',
            points: 3,
            description: 'Demonstrate katakana mastery'
          },
          {
            id: 'loan-word-reading',
            label: 'Read 15 loan words in katakana',
            category: 'reading',
            points: 2,
            description: 'Practice reading katakana words'
          }
        ]
      }
    ]
  },
  // Week 4: Katakana Completion
  {
    id: 'week-4',
    weekNumber: 4,
    title: 'Katakana Completion',
    description: 'Complete katakana learning and begin basic grammar',
    focus: ['katakana', 'grammar', 'vocab'],
    days: [
      {
        id: 'week-4-day-1',
        title: 'Katakana M-Column (マ-モ)',
        description: 'Learn katakana M-column and practice with business words',
        tasks: [
          {
            id: 'learn-katakana-m',
            label: 'Learn katakana マ-モ (ma, mi, mu, me, mo)',
            category: 'katakana',
            points: 3,
            description: 'Master katakana M-column'
          },
          {
            id: 'practice-katakana-m',
            label: 'Practice writing マ-モ 15 times each',
            category: 'katakana',
            points: 2,
            description: 'Develop katakana consistency'
          },
          {
            id: 'business-vocabulary',
            label: 'Learn business words: マネージャー, ミーティング, メール',
            category: 'vocab',
            points: 2,
            description: 'Business vocabulary in katakana'
          }
        ]
      },
      {
        id: 'week-4-day-2',
        title: 'Katakana Y-Column (ヤ-ヨ)',
        description: 'Learn katakana Y-column and practice with entertainment words',
        tasks: [
          {
            id: 'learn-katakana-y',
            label: 'Learn katakana ヤ-ヨ (ya, yu, yo)',
            category: 'katakana',
            points: 2,
            description: 'Master katakana Y-column'
          },
          {
            id: 'practice-katakana-y',
            label: 'Practice writing ヤ-ヨ 20 times each',
            category: 'katakana',
            points: 2,
            description: 'Perfect these characters'
          },
          {
            id: 'entertainment-vocabulary',
            label: 'Learn entertainment words: ヤクザ, ユーチューブ, ヨガ',
            category: 'vocab',
            points: 2,
            description: 'Entertainment vocabulary'
          }
        ]
      },
      {
        id: 'week-4-day-3',
        title: 'Katakana R-Column (ラ-ロ)',
        description: 'Learn katakana R-column and practice with transportation words',
        tasks: [
          {
            id: 'learn-katakana-r',
            label: 'Learn katakana ラ-ロ (ra, ri, ru, re, ro)',
            category: 'katakana',
            points: 3,
            description: 'Master katakana R-column'
          },
          {
            id: 'practice-katakana-r',
            label: 'Practice writing ラ-ロ 15 times each',
            category: 'katakana',
            points: 2,
            description: 'Focus on R-sound pronunciation'
          },
          {
            id: 'transportation-vocabulary',
            label: 'Learn transport words: ラジオ, リモコン, ルーム',
            category: 'vocab',
            points: 2,
            description: 'Transportation vocabulary'
          }
        ]
      },
      {
        id: 'week-4-day-4',
        title: 'Katakana W-Column (ワ-ン)',
        description: 'Complete katakana with W-column and ン',
        tasks: [
          {
            id: 'learn-katakana-w',
            label: 'Learn katakana ワ-ヲ-ン (wa, wo, n)',
            category: 'katakana',
            points: 2,
            description: 'Complete the katakana syllabary'
          },
          {
            id: 'practice-katakana-w',
            label: 'Practice writing ワ-ヲ-ン 20 times each',
            category: 'katakana',
            points: 2,
            description: 'Master final katakana characters'
          },
          {
            id: 'basic-grammar-1',
            label: 'Learn basic sentence structure: XはYです',
            category: 'grammar',
            points: 3,
            description: 'Introduction to Japanese sentence structure'
          }
        ]
      },
      {
        id: 'week-4-day-5',
        title: 'Katakana Dakuten',
        description: 'Learn katakana dakuten and practice with adjectives',
        tasks: [
          {
            id: 'learn-katakana-dakuten',
            label: 'Learn katakana dakuten (ガ-ザ-ダ-バ) and handakuten (パ-ピ-プ-ペ-ポ)',
            category: 'katakana',
            points: 3,
            description: 'Master katakana voiced sounds'
          },
          {
            id: 'practice-katakana-dakuten',
            label: 'Practice writing dakuten katakana',
            category: 'katakana',
            points: 2,
            description: 'Learn katakana modification marks'
          },
          {
            id: 'i-adjectives',
            label: 'Learn i-adjectives: 大きい, 小さい, 新しい, 古い',
            category: 'grammar',
            points: 3,
            description: 'Introduction to i-adjectives'
          }
        ]
      },
      {
        id: 'week-4-day-6',
        title: 'Katakana Small Characters',
        description: 'Learn katakana small characters and practice with na-adjectives',
        tasks: [
          {
            id: 'learn-katakana-small',
            label: 'Learn katakana small characters: ッ, ャ, ュ, ョ',
            category: 'katakana',
            points: 2,
            description: 'Master katakana small character usage'
          },
          {
            id: 'practice-katakana-small',
            label: 'Practice writing words with small katakana',
            category: 'katakana',
            points: 2,
            description: 'Learn proper katakana word formation'
          },
          {
            id: 'na-adjectives',
            label: 'Learn na-adjectives: きれい, 元気, 静か, 便利',
            category: 'grammar',
            points: 3,
            description: 'Introduction to na-adjectives'
          }
        ]
      },
      {
        id: 'week-4-day-7',
        title: 'Katakana Mastery Test',
        description: 'Comprehensive test of all katakana knowledge',
        tasks: [
          {
            id: 'katakana-test',
            label: 'Complete katakana recognition test',
            category: 'katakana',
            points: 4,
            description: 'Test all katakana characters'
          },
          {
            id: 'katakana-writing-test',
            label: 'Write all katakana from memory',
            category: 'katakana',
            points: 4,
            description: 'Demonstrate complete katakana mastery'
          },
          {
            id: 'mixed-reading-test',
            label: 'Read 20 words mixing hiragana and katakana',
            category: 'reading',
            points: 3,
            description: 'Test mixed script reading ability'
          }
        ]
      }
    ]
  },
  // Week 5: Basic Grammar - Particles
  {
    id: 'week-5',
    weekNumber: 5,
    title: 'Basic Grammar - Particles',
    description: 'Learn essential Japanese particles and sentence structure',
    focus: ['grammar', 'vocab', 'reading'],
    days: [
      {
        id: 'week-5-day-1',
        title: 'Particle は (wa) - Topic Marker',
        description: 'Learn the topic particle and basic sentence structure',
        tasks: [
          {
            id: 'learn-wa-particle',
            label: 'Learn particle は (wa) - topic marker',
            category: 'grammar',
            points: 4,
            description: 'Master the most important Japanese particle'
          },
          {
            id: 'practice-wa-sentences',
            label: 'Practice: 私は学生です, これは本です, あれは何ですか',
            category: 'grammar',
            points: 3,
            description: 'Practice basic wa-particle sentences'
          },
          {
            id: 'write-wa-sentences',
            label: 'Write 5 sentences using は particle',
            category: 'grammar',
            points: 2,
            description: 'Create your own wa-particle sentences'
          }
        ]
      },
      {
        id: 'week-5-day-2',
        title: 'Particle が (ga) - Subject Marker',
        description: 'Learn the subject particle and its usage',
        tasks: [
          {
            id: 'learn-ga-particle',
            label: 'Learn particle が (ga) - subject marker',
            category: 'grammar',
            points: 4,
            description: 'Understand the difference between は and が'
          },
          {
            id: 'practice-ga-sentences',
            label: 'Practice: 猫がいます, 日本語が好きです, どこが痛いですか',
            category: 'grammar',
            points: 3,
            description: 'Practice ga-particle sentences'
          },
          {
            id: 'compare-wa-ga',
            label: 'Compare は vs が usage in different contexts',
            category: 'grammar',
            points: 3,
            description: 'Learn when to use each particle'
          }
        ]
      },
      {
        id: 'week-5-day-3',
        title: 'Particle を (wo) - Object Marker',
        description: 'Learn the object particle and transitive verbs',
        tasks: [
          {
            id: 'learn-wo-particle',
            label: 'Learn particle を (wo) - object marker',
            category: 'grammar',
            points: 4,
            description: 'Master the object particle'
          },
          {
            id: 'practice-wo-sentences',
            label: 'Practice: 本を読みます, ご飯を食べます, 音楽を聞きます',
            category: 'grammar',
            points: 3,
            description: 'Practice wo-particle with verbs'
          },
          {
            id: 'transitive-verbs',
            label: 'Learn transitive verbs: 読む, 食べる, 聞く, 見る',
            category: 'vocab',
            points: 3,
            description: 'Essential transitive verbs'
          }
        ]
      },
      {
        id: 'week-5-day-4',
        title: 'Particle に (ni) - Direction/Time',
        description: 'Learn the ni-particle for direction and time',
        tasks: [
          {
            id: 'learn-ni-particle',
            label: 'Learn particle に (ni) - direction and time',
            category: 'grammar',
            points: 4,
            description: 'Master the versatile ni-particle'
          },
          {
            id: 'practice-ni-direction',
            label: 'Practice direction: 学校に行きます, 家に帰ります',
            category: 'grammar',
            points: 3,
            description: 'Practice ni-particle for direction'
          },
          {
            id: 'practice-ni-time',
            label: 'Practice time: 七時に起きます, 月曜日に勉強します',
            category: 'grammar',
            points: 3,
            description: 'Practice ni-particle for time'
          }
        ]
      },
      {
        id: 'week-5-day-5',
        title: 'Particle で (de) - Location/Means',
        description: 'Learn the de-particle for location and means',
        tasks: [
          {
            id: 'learn-de-particle',
            label: 'Learn particle で (de) - location and means',
            category: 'grammar',
            points: 4,
            description: 'Master the de-particle usage'
          },
          {
            id: 'practice-de-location',
            label: 'Practice location: 学校で勉強します, レストランで食べます',
            category: 'grammar',
            points: 3,
            description: 'Practice de-particle for location'
          },
          {
            id: 'practice-de-means',
            label: 'Practice means: 電車で行きます, 日本語で話します',
            category: 'grammar',
            points: 3,
            description: 'Practice de-particle for means'
          }
        ]
      },
      {
        id: 'week-5-day-6',
        title: 'Particle の (no) - Possession',
        description: 'Learn the no-particle for possession and modification',
        tasks: [
          {
            id: 'learn-no-particle',
            label: 'Learn particle の (no) - possession and modification',
            category: 'grammar',
            points: 4,
            description: 'Master the no-particle'
          },
          {
            id: 'practice-no-possession',
            label: 'Practice possession: 私の本, 田中さんの車, 日本の文化',
            category: 'grammar',
            points: 3,
            description: 'Practice no-particle for possession'
          },
          {
            id: 'practice-no-modification',
            label: 'Practice modification: 日本語の本, 大きいの, きれいなの',
            category: 'grammar',
            points: 3,
            description: 'Practice no-particle for modification'
          }
        ]
      },
      {
        id: 'week-5-day-7',
        title: 'Particle Review and Practice',
        description: 'Comprehensive review of all learned particles',
        tasks: [
          {
            id: 'particle-review',
            label: 'Review all particles: は, が, を, に, で, の',
            category: 'grammar',
            points: 4,
            description: 'Comprehensive particle review'
          },
          {
            id: 'particle-practice',
            label: 'Complete particle practice exercises',
            category: 'grammar',
            points: 4,
            description: 'Practice using all particles correctly'
          },
          {
            id: 'sentence-creation',
            label: 'Create 10 sentences using different particles',
            category: 'grammar',
            points: 3,
            description: 'Demonstrate particle mastery'
          }
        ]
      }
    ]
  }
  // Continue with weeks 6-20...
]

// Generate remaining weeks programmatically
const generateRemainingWeeks = (): CurriculumWeek[] => {
  const weeks: CurriculumWeek[] = []
  
  const weekThemes = [
    { title: 'Verb Conjugations', focus: ['grammar', 'vocab'], description: 'Learn present, past, and negative verb forms' },
    { title: 'Adjective Usage', focus: ['grammar', 'vocab'], description: 'Master i-adjectives and na-adjectives' },
    { title: 'Question Words', focus: ['grammar', 'vocab'], description: 'Learn interrogative words and question formation' },
    { title: 'Time and Frequency', focus: ['grammar', 'vocab'], description: 'Express time, frequency, and duration' },
    { title: 'Location and Movement', focus: ['grammar', 'vocab'], description: 'Describe locations and movement patterns' },
    { title: 'Describing Things', focus: ['grammar', 'vocab'], description: 'Learn descriptive language and comparisons' },
    { title: 'Making Requests', focus: ['grammar', 'vocab'], description: 'Learn polite requests and offers' },
    { title: 'Likes and Dislikes', focus: ['grammar', 'vocab'], description: 'Express preferences and opinions' },
    { title: 'Past Tense', focus: ['grammar', 'vocab'], description: 'Master past tense and experiences' },
    { title: 'Future Plans', focus: ['grammar', 'vocab'], description: 'Express future intentions and plans' },
    { title: 'Comparing Things', focus: ['grammar', 'vocab'], description: 'Learn comparison structures' },
    { title: 'Giving Reasons', focus: ['grammar', 'vocab'], description: 'Explain reasons and causes' },
    { title: 'Making Suggestions', focus: ['grammar', 'vocab'], description: 'Learn suggestion and advice patterns' },
    { title: 'Reading Practice', focus: ['reading', 'vocab'], description: 'Develop reading comprehension skills' },
    { title: 'Listening Practice', focus: ['listening', 'vocab'], description: 'Improve listening comprehension' },
    { title: 'JLPT N5 Preparation', focus: ['grammar', 'vocab', 'reading', 'listening'], description: 'Final preparation for JLPT N5 exam' }
  ]
  
  for (let weekNum = 6; weekNum <= 20; weekNum++) {
    const theme = weekThemes[weekNum - 6]
    const week: CurriculumWeek = {
      id: `week-${weekNum}`,
      weekNumber: weekNum,
      title: theme.title,
      description: theme.description,
      focus: theme.focus as TaskCategory[],
      days: []
    }
    
    for (let dayNum = 1; dayNum <= 7; dayNum++) {
      const day: CurriculumDay = {
        id: `week-${weekNum}-day-${dayNum}`,
        title: `Day ${(weekNum - 1) * 7 + dayNum}: ${getDayTheme(weekNum, dayNum)}`,
        description: getDayDescription(weekNum, dayNum),
        tasks: generateTasksForDay(weekNum, dayNum, theme.focus as TaskCategory[])
      }
      week.days.push(day)
    }
    
    weeks.push(week)
  }
  
  return weeks
}

const getDayTheme = (weekNum: number, dayNum: number): string => {
  const themes = ['Introduction', 'Practice', 'Application', 'Review', 'Extension', 'Integration', 'Assessment']
  return themes[dayNum - 1]
}

const getDayDescription = (weekNum: number, dayNum: number): string => {
  const descriptions = [
    'Introduction to new concepts and vocabulary',
    'Practice exercises and drills',
    'Apply knowledge in practical contexts',
    'Review and reinforce previous learning',
    'Extend knowledge with additional examples',
    'Integrate multiple concepts together',
    'Assess understanding and progress'
  ]
  return descriptions[dayNum - 1]
}

const generateTasksForDay = (weekNum: number, dayNum: number, focus: TaskCategory[]): CurriculumTask[] => {
  const tasks: CurriculumTask[] = []
  
  // Generate tasks based on week focus
  if (focus.includes('grammar')) {
    tasks.push({
      id: `week-${weekNum}-day-${dayNum}-grammar`,
      label: `Learn grammar pattern for Week ${weekNum}`,
      category: 'grammar',
      points: 3,
      description: `Master the grammar concept for week ${weekNum}`
    })
  }
  
  if (focus.includes('vocab')) {
    tasks.push({
      id: `week-${weekNum}-day-${dayNum}-vocab`,
      label: `Learn vocabulary set for Week ${weekNum}`,
      category: 'vocab',
      points: 3,
      description: `Expand vocabulary for week ${weekNum}`
    })
  }
  
  if (focus.includes('reading')) {
    tasks.push({
      id: `week-${weekNum}-day-${dayNum}-reading`,
      label: `Practice reading comprehension`,
      category: 'reading',
      points: 2,
      description: 'Develop reading skills'
    })
  }
  
  if (focus.includes('listening')) {
    tasks.push({
      id: `week-${weekNum}-day-${dayNum}-listening`,
      label: `Practice listening comprehension`,
      category: 'listening',
      points: 2,
      description: 'Improve listening skills'
    })
  }
  
  return tasks
}

// Export the complete curriculum
export const completeJLPTN5Curriculum = [...jlptN5Curriculum, ...generateRemainingWeeks()]
