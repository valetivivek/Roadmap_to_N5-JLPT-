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

// Weeks 6-10: Basic Grammar continuation
export const weeks6to10: CurriculumWeek[] = [
  // Week 6: Verb Conjugations - Present Tense
  {
    id: 'week-6',
    weekNumber: 6,
    title: 'Verb Conjugations - Present Tense',
    description: 'Learn present tense verb conjugations and basic verb patterns',
    focus: ['grammar', 'vocab'],
    resources: [
      {
        title: 'Japanese Verb Conjugation Guide',
        url: 'https://www.tofugu.com/japanese/japanese-verb-conjugation/',
        type: 'site',
        description: 'Complete guide to Japanese verb conjugation patterns'
      }
    ],
    days: [
      {
        id: 'week-6-day-1',
        title: 'Godan Verbs (Group 1)',
        description: 'Learn godan verb conjugation patterns',
        tasks: [
          {
            id: 'learn-godan-verbs',
            label: 'Learn godan verb conjugation: 行く, 読む, 書く, 話す, 聞く',
            category: 'grammar',
            points: 4,
            description: 'Master the most common verb group'
          },
          {
            id: 'practice-godan-conjugation',
            label: 'Practice conjugating 10 godan verbs',
            category: 'grammar',
            points: 3,
            description: 'Develop conjugation skills'
          },
          {
            id: 'godan-vocabulary',
            label: 'Learn 15 essential godan verbs',
            category: 'vocab',
            points: 3,
            description: 'Build verb vocabulary'
          }
        ]
      },
      {
        id: 'week-6-day-2',
        title: 'Ichidan Verbs (Group 2)',
        description: 'Learn ichidan verb conjugation patterns',
        tasks: [
          {
            id: 'learn-ichidan-verbs',
            label: 'Learn ichidan verb conjugation: 食べる, 見る, 起きる, 寝る',
            category: 'grammar',
            points: 4,
            description: 'Master the simpler verb group'
          },
          {
            id: 'practice-ichidan-conjugation',
            label: 'Practice conjugating 10 ichidan verbs',
            category: 'grammar',
            points: 3,
            description: 'Practice ichidan patterns'
          },
          {
            id: 'ichidan-vocabulary',
            label: 'Learn 15 essential ichidan verbs',
            category: 'vocab',
            points: 3,
            description: 'Expand verb vocabulary'
          }
        ]
      },
      {
        id: 'week-6-day-3',
        title: 'Irregular Verbs (Group 3)',
        description: 'Learn irregular verbs する and くる',
        tasks: [
          {
            id: 'learn-irregular-verbs',
            label: 'Learn irregular verbs: する, くる, 来る',
            category: 'grammar',
            points: 4,
            description: 'Master the most important irregular verbs'
          },
          {
            id: 'practice-irregular-conjugation',
            label: 'Practice conjugating する and くる',
            category: 'grammar',
            points: 3,
            description: 'Memorize irregular patterns'
          },
          {
            id: 'suru-compounds',
            label: 'Learn する compound verbs: 勉強する, 料理する, 運転する',
            category: 'vocab',
            points: 3,
            description: 'Learn common suru compounds'
          }
        ]
      },
      {
        id: 'week-6-day-4',
        title: 'Negative Form',
        description: 'Learn how to make verbs negative',
        tasks: [
          {
            id: 'learn-negative-form',
            label: 'Learn negative form: 行かない, 食べない, しない',
            category: 'grammar',
            points: 4,
            description: 'Master negative verb conjugation'
          },
          {
            id: 'practice-negative-sentences',
            label: 'Practice: 本を読みません, 映画を見ません',
            category: 'grammar',
            points: 3,
            description: 'Practice negative sentences'
          },
          {
            id: 'negative-vocabulary',
            label: 'Learn negative expressions: いいえ, 違います, ありません',
            category: 'vocab',
            points: 2,
            description: 'Essential negative vocabulary'
          }
        ]
      },
      {
        id: 'week-6-day-5',
        title: 'Past Tense',
        description: 'Learn past tense verb forms',
        tasks: [
          {
            id: 'learn-past-tense',
            label: 'Learn past tense: 行った, 食べた, した',
            category: 'grammar',
            points: 4,
            description: 'Master past tense conjugation'
          },
          {
            id: 'practice-past-sentences',
            label: 'Practice: 昨日映画を見ました, おととい友達に会いました',
            category: 'grammar',
            points: 3,
            description: 'Practice past tense sentences'
          },
          {
            id: 'time-expressions',
            label: 'Learn time expressions: 昨日, おととい, 先週, 去年',
            category: 'vocab',
            points: 3,
            description: 'Time-related vocabulary'
          }
        ]
      },
      {
        id: 'week-6-day-6',
        title: 'Past Negative',
        description: 'Learn past negative verb forms',
        tasks: [
          {
            id: 'learn-past-negative',
            label: 'Learn past negative: 行かなかった, 食べなかった, しなかった',
            category: 'grammar',
            points: 4,
            description: 'Master past negative conjugation'
          },
          {
            id: 'practice-past-negative',
            label: 'Practice: 昨日勉強しませんでした, 映画を見ませんでした',
            category: 'grammar',
            points: 3,
            description: 'Practice past negative sentences'
          },
          {
            id: 'experience-expressions',
            label: 'Learn experience expressions: ことがあります, ことがありません',
            category: 'grammar',
            points: 3,
            description: 'Express past experiences'
          }
        ]
      },
      {
        id: 'week-6-day-7',
        title: 'Verb Review and Practice',
        description: 'Comprehensive review of all verb conjugations',
        tasks: [
          {
            id: 'verb-conjugation-review',
            label: 'Review all verb conjugation patterns',
            category: 'grammar',
            points: 4,
            description: 'Comprehensive verb review'
          },
          {
            id: 'verb-practice-exercises',
            label: 'Complete verb conjugation exercises',
            category: 'grammar',
            points: 4,
            description: 'Practice all verb forms'
          },
          {
            id: 'sentence-creation-verbs',
            label: 'Create 15 sentences using different verb forms',
            category: 'grammar',
            points: 3,
            description: 'Demonstrate verb mastery'
          }
        ]
      }
    ]
  },
  // Week 7: Adjective Usage
  {
    id: 'week-7',
    weekNumber: 7,
    title: 'Adjective Usage',
    description: 'Master i-adjectives and na-adjectives with proper conjugation',
    focus: ['grammar', 'vocab'],
    resources: [
      {
        title: 'Japanese Adjectives Guide',
        url: 'https://www.tofugu.com/japanese/japanese-adjectives/',
        type: 'site',
        description: 'Complete guide to Japanese adjectives'
      }
    ],
    days: [
      {
        id: 'week-7-day-1',
        title: 'I-Adjectives Introduction',
        description: 'Learn i-adjectives and their basic usage',
        tasks: [
          {
            id: 'learn-i-adjectives',
            label: 'Learn i-adjectives: 大きい, 小さい, 新しい, 古い, 高い, 安い',
            category: 'grammar',
            points: 4,
            description: 'Master basic i-adjectives'
          },
          {
            id: 'practice-i-adjective-sentences',
            label: 'Practice: この本は大きいです, あの車は高いです',
            category: 'grammar',
            points: 3,
            description: 'Practice i-adjective sentences'
          },
          {
            id: 'i-adjective-vocabulary',
            label: 'Learn 20 essential i-adjectives',
            category: 'vocab',
            points: 3,
            description: 'Build adjective vocabulary'
          }
        ]
      },
      {
        id: 'week-7-day-2',
        title: 'I-Adjectives Past Tense',
        description: 'Learn past tense of i-adjectives',
        tasks: [
          {
            id: 'learn-i-adjective-past',
            label: 'Learn past tense: 大きかった, 小さかった, 新しかった',
            category: 'grammar',
            points: 4,
            description: 'Master i-adjective past tense'
          },
          {
            id: 'practice-i-adjective-past',
            label: 'Practice: 昨日は暑かったです, その映画は面白かったです',
            category: 'grammar',
            points: 3,
            description: 'Practice past tense adjectives'
          },
          {
            id: 'weather-adjectives',
            label: 'Learn weather adjectives: 暑い, 寒い, 暖かい, 涼しい',
            category: 'vocab',
            points: 2,
            description: 'Weather-related adjectives'
          }
        ]
      },
      {
        id: 'week-7-day-3',
        title: 'I-Adjectives Negative',
        description: 'Learn negative forms of i-adjectives',
        tasks: [
          {
            id: 'learn-i-adjective-negative',
            label: 'Learn negative: 大きくない, 小さくない, 新しくない',
            category: 'grammar',
            points: 4,
            description: 'Master i-adjective negative forms'
          },
          {
            id: 'practice-i-adjective-negative',
            label: 'Practice: この部屋は大きくないです, その本は面白くないです',
            category: 'grammar',
            points: 3,
            description: 'Practice negative adjectives'
          },
          {
            id: 'emotion-adjectives',
            label: 'Learn emotion adjectives: 嬉しい, 悲しい, 楽しい, つまらない',
            category: 'vocab',
            points: 2,
            description: 'Emotion-related adjectives'
          }
        ]
      },
      {
        id: 'week-7-day-4',
        title: 'Na-Adjectives Introduction',
        description: 'Learn na-adjectives and their usage',
        tasks: [
          {
            id: 'learn-na-adjectives',
            label: 'Learn na-adjectives: きれい, 元気, 静か, 便利, 有名, 簡単',
            category: 'grammar',
            points: 4,
            description: 'Master basic na-adjectives'
          },
          {
            id: 'practice-na-adjective-sentences',
            label: 'Practice: この町は静かです, その店は有名です',
            category: 'grammar',
            points: 3,
            description: 'Practice na-adjective sentences'
          },
          {
            id: 'na-adjective-vocabulary',
            label: 'Learn 20 essential na-adjectives',
            category: 'vocab',
            points: 3,
            description: 'Build na-adjective vocabulary'
          }
        ]
      },
      {
        id: 'week-7-day-5',
        title: 'Na-Adjectives Past Tense',
        description: 'Learn past tense of na-adjectives',
        tasks: [
          {
            id: 'learn-na-adjective-past',
            label: 'Learn past tense: きれいでした, 元気でした, 静かでした',
            category: 'grammar',
            points: 4,
            description: 'Master na-adjective past tense'
          },
          {
            id: 'practice-na-adjective-past',
            label: 'Practice: 昨日は元気でした, その映画は面白かったです',
            category: 'grammar',
            points: 3,
            description: 'Practice past tense na-adjectives'
          },
          {
            id: 'personality-adjectives',
            label: 'Learn personality adjectives: 親切, 優しい, 厳しい, 面白い',
            category: 'vocab',
            points: 2,
            description: 'Personality-related adjectives'
          }
        ]
      },
      {
        id: 'week-7-day-6',
        title: 'Na-Adjectives Negative',
        description: 'Learn negative forms of na-adjectives',
        tasks: [
          {
            id: 'learn-na-adjective-negative',
            label: 'Learn negative: きれいではありません, 元気ではありません',
            category: 'grammar',
            points: 4,
            description: 'Master na-adjective negative forms'
          },
          {
            id: 'practice-na-adjective-negative',
            label: 'Practice: この部屋は静かではありません, その店は有名ではありません',
            category: 'grammar',
            points: 3,
            description: 'Practice negative na-adjectives'
          },
          {
            id: 'size-color-adjectives',
            label: 'Learn size/color adjectives: 長い, 短い, 赤い, 青い, 白い, 黒い',
            category: 'vocab',
            points: 2,
            description: 'Physical description adjectives'
          }
        ]
      },
      {
        id: 'week-7-day-7',
        title: 'Adjective Review and Practice',
        description: 'Comprehensive review of all adjective patterns',
        tasks: [
          {
            id: 'adjective-review',
            label: 'Review all adjective conjugation patterns',
            category: 'grammar',
            points: 4,
            description: 'Comprehensive adjective review'
          },
          {
            id: 'adjective-practice-exercises',
            label: 'Complete adjective conjugation exercises',
            category: 'grammar',
            points: 4,
            description: 'Practice all adjective forms'
          },
          {
            id: 'sentence-creation-adjectives',
            label: 'Create 15 sentences using different adjective forms',
            category: 'grammar',
            points: 3,
            description: 'Demonstrate adjective mastery'
          }
        ]
      }
    ]
  },
  // Week 8: Question Words and Interrogatives
  {
    id: 'week-8',
    weekNumber: 8,
    title: 'Question Words and Interrogatives',
    description: 'Learn interrogative words and question formation patterns',
    focus: ['grammar', 'vocab'],
    resources: [
      {
        title: 'Japanese Question Words Guide',
        url: 'https://www.tofugu.com/japanese/japanese-question-words/',
        type: 'site',
        description: 'Complete guide to Japanese question words'
      }
    ],
    days: [
      {
        id: 'week-8-day-1',
        title: 'Basic Question Words',
        description: 'Learn essential question words',
        tasks: [
          {
            id: 'learn-question-words',
            label: 'Learn question words: 何, 誰, どこ, いつ, なぜ, どう',
            category: 'grammar',
            points: 4,
            description: 'Master basic question words'
          },
          {
            id: 'practice-question-sentences',
            label: 'Practice: これは何ですか, 誰ですか, どこですか',
            category: 'grammar',
            points: 3,
            description: 'Practice basic questions'
          },
          {
            id: 'question-word-vocabulary',
            label: 'Learn question word variations: どちら, どれ, どの',
            category: 'vocab',
            points: 3,
            description: 'Expand question vocabulary'
          }
        ]
      },
      {
        id: 'week-8-day-2',
        title: 'Time Questions',
        description: 'Learn how to ask about time',
        tasks: [
          {
            id: 'learn-time-questions',
            label: 'Learn time questions: 何時ですか, いつですか, 何曜日ですか',
            category: 'grammar',
            points: 4,
            description: 'Master time-related questions'
          },
          {
            id: 'practice-time-questions',
            label: 'Practice: 今何時ですか, いつ日本に行きますか',
            category: 'grammar',
            points: 3,
            description: 'Practice time questions'
          },
          {
            id: 'time-vocabulary',
            label: 'Learn time vocabulary: 今, 昨日, 明日, 来週, 来月',
            category: 'vocab',
            points: 3,
            description: 'Time-related vocabulary'
          }
        ]
      },
      {
        id: 'week-8-day-3',
        title: 'Location Questions',
        description: 'Learn how to ask about locations',
        tasks: [
          {
            id: 'learn-location-questions',
            label: 'Learn location questions: どこですか, どちらですか, どこにありますか',
            category: 'grammar',
            points: 4,
            description: 'Master location questions'
          },
          {
            id: 'practice-location-questions',
            label: 'Practice: トイレはどこですか, 駅はどちらですか',
            category: 'grammar',
            points: 3,
            description: 'Practice location questions'
          },
          {
            id: 'location-vocabulary',
            label: 'Learn location words: ここ, そこ, あそこ, どこ',
            category: 'vocab',
            points: 2,
            description: 'Location demonstratives'
          }
        ]
      },
      {
        id: 'week-8-day-4',
        title: 'Person Questions',
        description: 'Learn how to ask about people',
        tasks: [
          {
            id: 'learn-person-questions',
            label: 'Learn person questions: 誰ですか, どなたですか, 誰の本ですか',
            category: 'grammar',
            points: 4,
            description: 'Master person-related questions'
          },
          {
            id: 'practice-person-questions',
            label: 'Practice: あの人は誰ですか, これは誰の車ですか',
            category: 'grammar',
            points: 3,
            description: 'Practice person questions'
          },
          {
            id: 'family-vocabulary',
            label: 'Learn family words: お父さん, お母さん, 兄弟, 姉妹',
            category: 'vocab',
            points: 3,
            description: 'Family relationship vocabulary'
          }
        ]
      },
      {
        id: 'week-8-day-5',
        title: 'Reason Questions',
        description: 'Learn how to ask about reasons and causes',
        tasks: [
          {
            id: 'learn-reason-questions',
            label: 'Learn reason questions: なぜですか, どうしてですか, なんでですか',
            category: 'grammar',
            points: 4,
            description: 'Master reason questions'
          },
          {
            id: 'practice-reason-questions',
            label: 'Practice: なぜ遅れましたか, どうして日本語を勉強しますか',
            category: 'grammar',
            points: 3,
            description: 'Practice reason questions'
          },
          {
            id: 'reason-vocabulary',
            label: 'Learn reason words: だから, それで, なぜなら',
            category: 'vocab',
            points: 2,
            description: 'Reason and cause vocabulary'
          }
        ]
      },
      {
        id: 'week-8-day-6',
        title: 'Method Questions',
        description: 'Learn how to ask about methods and ways',
        tasks: [
          {
            id: 'learn-method-questions',
            label: 'Learn method questions: どうですか, どのように, どうやって',
            category: 'grammar',
            points: 4,
            description: 'Master method questions'
          },
          {
            id: 'practice-method-questions',
            label: 'Practice: どうやって行きますか, どのように勉強しますか',
            category: 'grammar',
            points: 3,
            description: 'Practice method questions'
          },
          {
            id: 'method-vocabulary',
            label: 'Learn method words: 方法, やり方, 手段',
            category: 'vocab',
            points: 2,
            description: 'Method-related vocabulary'
          }
        ]
      },
      {
        id: 'week-8-day-7',
        title: 'Question Review and Practice',
        description: 'Comprehensive review of all question patterns',
        tasks: [
          {
            id: 'question-pattern-review',
            label: 'Review all question word patterns',
            category: 'grammar',
            points: 4,
            description: 'Comprehensive question review'
          },
          {
            id: 'question-practice-exercises',
            label: 'Complete question formation exercises',
            category: 'grammar',
            points: 4,
            description: 'Practice all question types'
          },
          {
            id: 'conversation-practice',
            label: 'Practice asking and answering questions in conversation',
            category: 'grammar',
            points: 3,
            description: 'Apply question skills in conversation'
          }
        ]
      }
    ]
  },
  // Week 9: Time and Frequency
  {
    id: 'week-9',
    weekNumber: 9,
    title: 'Time and Frequency',
    description: 'Express time, frequency, and duration in Japanese',
    focus: ['grammar', 'vocab'],
    resources: [
      {
        title: 'Japanese Time Expressions Guide',
        url: 'https://www.tofugu.com/japanese/japanese-time-expressions/',
        type: 'site',
        description: 'Complete guide to Japanese time expressions'
      }
    ],
    days: [
      {
        id: 'week-9-day-1',
        title: 'Clock Time',
        description: 'Learn how to tell time in Japanese',
        tasks: [
          {
            id: 'learn-clock-time',
            label: 'Learn clock time: 一時, 二時半, 三時十五分',
            category: 'grammar',
            points: 4,
            description: 'Master telling time in Japanese'
          },
          {
            id: 'practice-time-sentences',
            label: 'Practice: 今何時ですか, 八時に起きます',
            category: 'grammar',
            points: 3,
            description: 'Practice time-related sentences'
          },
          {
            id: 'time-vocabulary',
            label: 'Learn time words: 時, 分, 半, 前, 後',
            category: 'vocab',
            points: 3,
            description: 'Essential time vocabulary'
          }
        ]
      },
      {
        id: 'week-9-day-2',
        title: 'Days of the Week',
        description: 'Learn days of the week and scheduling',
        tasks: [
          {
            id: 'learn-days-week',
            label: 'Learn days: 月曜日, 火曜日, 水曜日, 木曜日, 金曜日, 土曜日, 日曜日',
            category: 'vocab',
            points: 4,
            description: 'Master days of the week'
          },
          {
            id: 'practice-schedule-sentences',
            label: 'Practice: 月曜日に学校に行きます, 土曜日は休みです',
            category: 'grammar',
            points: 3,
            description: 'Practice scheduling sentences'
          },
          {
            id: 'weekend-vocabulary',
            label: 'Learn weekend words: 平日, 週末, 休み, 祝日',
            category: 'vocab',
            points: 2,
            description: 'Weekend and holiday vocabulary'
          }
        ]
      },
      {
        id: 'week-9-day-3',
        title: 'Months and Seasons',
        description: 'Learn months, seasons, and yearly expressions',
        tasks: [
          {
            id: 'learn-months',
            label: 'Learn months: 一月, 二月, 三月...十二月',
            category: 'vocab',
            points: 4,
            description: 'Master all 12 months'
          },
          {
            id: 'learn-seasons',
            label: 'Learn seasons: 春, 夏, 秋, 冬',
            category: 'vocab',
            points: 3,
            description: 'Master seasonal vocabulary'
          },
          {
            id: 'practice-seasonal-sentences',
            label: 'Practice: 春は暖かいです, 夏は暑いです',
            category: 'grammar',
            points: 3,
            description: 'Practice seasonal descriptions'
          }
        ]
      },
      {
        id: 'week-9-day-4',
        title: 'Frequency Adverbs',
        description: 'Learn frequency expressions and adverbs',
        tasks: [
          {
            id: 'learn-frequency-words',
            label: 'Learn frequency: いつも, よく, 時々, たまに, 全然',
            category: 'grammar',
            points: 4,
            description: 'Master frequency adverbs'
          },
          {
            id: 'practice-frequency-sentences',
            label: 'Practice: いつも勉強します, 時々映画を見ます',
            category: 'grammar',
            points: 3,
            description: 'Practice frequency sentences'
          },
          {
            id: 'daily-routine-vocabulary',
            label: 'Learn routine words: 毎日, 毎週, 毎月, 毎年',
            category: 'vocab',
            points: 2,
            description: 'Daily routine vocabulary'
          }
        ]
      },
      {
        id: 'week-9-day-5',
        title: 'Duration and Periods',
        description: 'Learn how to express duration and time periods',
        tasks: [
          {
            id: 'learn-duration',
            label: 'Learn duration: 一時間, 二週間, 三ヶ月, 一年',
            category: 'grammar',
            points: 4,
            description: 'Master duration expressions'
          },
          {
            id: 'practice-duration-sentences',
            label: 'Practice: 一時間勉強しました, 二週間日本にいます',
            category: 'grammar',
            points: 3,
            description: 'Practice duration sentences'
          },
          {
            id: 'period-vocabulary',
            label: 'Learn period words: 間, 中, 前, 後, まで, から',
            category: 'vocab',
            points: 3,
            description: 'Time period vocabulary'
          }
        ]
      },
      {
        id: 'week-9-day-6',
        title: 'Time Particles',
        description: 'Learn particles used with time expressions',
        tasks: [
          {
            id: 'learn-time-particles',
            label: 'Learn time particles: に, から, まで, の間',
            category: 'grammar',
            points: 4,
            description: 'Master time-related particles'
          },
          {
            id: 'practice-time-particle-sentences',
            label: 'Practice: 九時から五時まで働きます, 午前中に勉強します',
            category: 'grammar',
            points: 3,
            description: 'Practice time particle usage'
          },
          {
            id: 'time-expression-vocabulary',
            label: 'Learn time expressions: 午前, 午後, 夜, 朝, 夕方',
            category: 'vocab',
            points: 2,
            description: 'Time of day vocabulary'
          }
        ]
      },
      {
        id: 'week-9-day-7',
        title: 'Time Review and Practice',
        description: 'Comprehensive review of all time expressions',
        tasks: [
          {
            id: 'time-expressions-review',
            label: 'Review all time-related expressions',
            category: 'grammar',
            points: 4,
            description: 'Comprehensive time review'
          },
          {
            id: 'time-practice-exercises',
            label: 'Complete time expression exercises',
            category: 'grammar',
            points: 4,
            description: 'Practice all time concepts'
          },
          {
            id: 'schedule-creation',
            label: 'Create a weekly schedule in Japanese',
            category: 'grammar',
            points: 3,
            description: 'Apply time knowledge practically'
          }
        ]
      }
    ]
  },
  // Week 10: Location and Movement
  {
    id: 'week-10',
    weekNumber: 10,
    title: 'Location and Movement',
    description: 'Describe locations and movement patterns in Japanese',
    focus: ['grammar', 'vocab'],
    resources: [
      {
        title: 'Japanese Location Words Guide',
        url: 'https://www.tofugu.com/japanese/japanese-location-words/',
        type: 'site',
        description: 'Complete guide to Japanese location and movement expressions'
      }
    ],
    days: [
      {
        id: 'week-10-day-1',
        title: 'Basic Location Words',
        description: 'Learn fundamental location vocabulary',
        tasks: [
          {
            id: 'learn-location-words',
            label: 'Learn location words: 上, 下, 中, 外, 前, 後ろ, 左, 右',
            category: 'vocab',
            points: 4,
            description: 'Master basic location vocabulary'
          },
          {
            id: 'practice-location-sentences',
            label: 'Practice: 本は机の上にあります, 猫は椅子の下にいます',
            category: 'grammar',
            points: 3,
            description: 'Practice location sentences'
          },
          {
            id: 'room-vocabulary',
            label: 'Learn room words: 部屋, 台所, 寝室, リビング, トイレ',
            category: 'vocab',
            points: 3,
            description: 'Room vocabulary'
          }
        ]
      },
      {
        id: 'week-10-day-2',
        title: 'Direction and Movement',
        description: 'Learn direction words and movement verbs',
        tasks: [
          {
            id: 'learn-direction-words',
            label: 'Learn directions: 北, 南, 東, 西, まっすぐ, 右に, 左に',
            category: 'vocab',
            points: 4,
            description: 'Master direction vocabulary'
          },
          {
            id: 'learn-movement-verbs',
            label: 'Learn movement verbs: 行く, 来る, 帰る, 出る, 入る',
            category: 'vocab',
            points: 4,
            description: 'Master movement verbs'
          },
          {
            id: 'practice-direction-sentences',
            label: 'Practice: 右に曲がってください, まっすぐ行ってください',
            category: 'grammar',
            points: 3,
            description: 'Practice direction sentences'
          }
        ]
      },
      {
        id: 'week-10-day-3',
        title: 'Transportation',
        description: 'Learn transportation vocabulary and usage',
        tasks: [
          {
            id: 'learn-transportation',
            label: 'Learn transport: 電車, バス, 車, 自転車, 飛行機, 船',
            category: 'vocab',
            points: 4,
            description: 'Master transportation vocabulary'
          },
          {
            id: 'practice-transportation-sentences',
            label: 'Practice: 電車で学校に行きます, バスに乗ります',
            category: 'grammar',
            points: 3,
            description: 'Practice transportation sentences'
          },
          {
            id: 'station-vocabulary',
            label: 'Learn station words: 駅, バス停, 空港, 港, 切符',
            category: 'vocab',
            points: 3,
            description: 'Station and ticket vocabulary'
          }
        ]
      },
      {
        id: 'week-10-day-4',
        title: 'Location Particles',
        description: 'Learn particles used with locations',
        tasks: [
          {
            id: 'learn-location-particles',
            label: 'Learn location particles: に, で, から, へ, を',
            category: 'grammar',
            points: 4,
            description: 'Master location-related particles'
          },
          {
            id: 'practice-location-particle-sentences',
            label: 'Practice: 学校に行きます, 図書館で勉強します',
            category: 'grammar',
            points: 3,
            description: 'Practice location particle usage'
          },
          {
            id: 'building-vocabulary',
            label: 'Learn building words: 建物, ビル, 家, 店, 病院, 銀行',
            category: 'vocab',
            points: 3,
            description: 'Building vocabulary'
          }
        ]
      },
      {
        id: 'week-10-day-5',
        title: 'Giving Directions',
        description: 'Learn how to give and ask for directions',
        tasks: [
          {
            id: 'learn-direction-phrases',
            label: 'Learn direction phrases: まっすぐ行って, 右に曲がって, 左に曲がって',
            category: 'grammar',
            points: 4,
            description: 'Master direction-giving phrases'
          },
          {
            id: 'practice-giving-directions',
            label: 'Practice: 駅はどこですか, 銀行はあそこです',
            category: 'grammar',
            points: 3,
            description: 'Practice giving directions'
          },
          {
            id: 'landmark-vocabulary',
            label: 'Learn landmarks: 交差点, 信号, 橋, 公園, 広場',
            category: 'vocab',
            points: 3,
            description: 'Landmark vocabulary'
          }
        ]
      },
      {
        id: 'week-10-day-6',
        title: 'Distance and Position',
        description: 'Learn distance and positional expressions',
        tasks: [
          {
            id: 'learn-distance-words',
            label: 'Learn distance: 近い, 遠い, 隣, 向かい, 向こう',
            category: 'vocab',
            points: 4,
            description: 'Master distance vocabulary'
          },
          {
            id: 'practice-distance-sentences',
            label: 'Practice: 学校は近いです, 駅は遠いです',
            category: 'grammar',
            points: 3,
            description: 'Practice distance sentences'
          },
          {
            id: 'position-vocabulary',
            label: 'Learn position words: 真ん中, 端, 角, 奥, 手前',
            category: 'vocab',
            points: 3,
            description: 'Position vocabulary'
          }
        ]
      },
      {
        id: 'week-10-day-7',
        title: 'Location Review and Practice',
        description: 'Comprehensive review of all location concepts',
        tasks: [
          {
            id: 'location-concepts-review',
            label: 'Review all location and movement concepts',
            category: 'grammar',
            points: 4,
            description: 'Comprehensive location review'
          },
          {
            id: 'location-practice-exercises',
            label: 'Complete location and movement exercises',
            category: 'grammar',
            points: 4,
            description: 'Practice all location concepts'
          },
          {
            id: 'map-reading-practice',
            label: 'Practice reading and describing a map in Japanese',
            category: 'grammar',
            points: 3,
            description: 'Apply location knowledge practically'
          }
        ]
      }
    ]
  }
]
