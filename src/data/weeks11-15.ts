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

// Weeks 11-15: Vocabulary Building and Communication
export const weeks11to15: CurriculumWeek[] = [
  // Week 11: Describing Things
  {
    id: 'week-11',
    weekNumber: 11,
    title: 'Describing Things',
    description: 'Learn descriptive language and comparisons in Japanese',
    focus: ['grammar', 'vocab'],
    resources: [
      {
        title: 'Japanese Descriptive Language Guide',
        url: 'https://www.tofugu.com/japanese/japanese-descriptive-language/',
        type: 'site',
        description: 'Complete guide to Japanese descriptive expressions'
      }
    ],
    days: [
      {
        id: 'week-11-day-1',
        title: 'Physical Descriptions',
        description: 'Learn to describe physical appearance and characteristics',
        tasks: [
          {
            id: 'learn-physical-adjectives',
            label: 'Learn physical adjectives: 背が高い, 背が低い, 太っている, 痩せている',
            category: 'vocab',
            points: 4,
            description: 'Master physical description vocabulary'
          },
          {
            id: 'practice-physical-descriptions',
            label: 'Practice: 彼は背が高いです, 彼女は髪が長いです',
            category: 'grammar',
            points: 3,
            description: 'Practice physical description sentences'
          },
          {
            id: 'appearance-vocabulary',
            label: 'Learn appearance words: 髪, 目, 鼻, 口, 顔, 手, 足',
            category: 'vocab',
            points: 3,
            description: 'Body part vocabulary for descriptions'
          }
        ]
      },
      {
        id: 'week-11-day-2',
        title: 'Color and Shape Descriptions',
        description: 'Learn to describe colors and shapes',
        tasks: [
          {
            id: 'learn-color-adjectives',
            label: 'Learn colors: 赤い, 青い, 黄色い, 緑, 白い, 黒い, 茶色い',
            category: 'vocab',
            points: 4,
            description: 'Master color vocabulary'
          },
          {
            id: 'learn-shape-words',
            label: 'Learn shapes: 丸い, 四角い, 長い, 短い, 大きい, 小さい',
            category: 'vocab',
            points: 4,
            description: 'Master shape vocabulary'
          },
          {
            id: 'practice-color-shape-sentences',
            label: 'Practice: この車は赤いです, その箱は四角いです',
            category: 'grammar',
            points: 3,
            description: 'Practice color and shape descriptions'
          }
        ]
      },
      {
        id: 'week-11-day-3',
        title: 'Material and Texture',
        description: 'Learn to describe materials and textures',
        tasks: [
          {
            id: 'learn-material-words',
            label: 'Learn materials: 木, 金属, プラスチック, 布, 紙, ガラス',
            category: 'vocab',
            points: 4,
            description: 'Master material vocabulary'
          },
          {
            id: 'learn-texture-words',
            label: 'Learn textures: 柔らかい, 硬い, 滑らか, 粗い, 温かい, 冷たい',
            category: 'vocab',
            points: 4,
            description: 'Master texture vocabulary'
          },
          {
            id: 'practice-material-sentences',
            label: 'Practice: この椅子は木でできています, その服は柔らかいです',
            category: 'grammar',
            points: 3,
            description: 'Practice material and texture descriptions'
          }
        ]
      },
      {
        id: 'week-11-day-4',
        title: 'Size and Quantity',
        description: 'Learn to describe size and quantity',
        tasks: [
          {
            id: 'learn-size-words',
            label: 'Learn size words: 大きい, 小さい, 長い, 短い, 太い, 細い, 厚い, 薄い',
            category: 'vocab',
            points: 4,
            description: 'Master size vocabulary'
          },
          {
            id: 'learn-quantity-words',
            label: 'Learn quantity: 多い, 少ない, たくさん, 少し, 全部, 半分',
            category: 'vocab',
            points: 4,
            description: 'Master quantity vocabulary'
          },
          {
            id: 'practice-size-quantity-sentences',
            label: 'Practice: この本は厚いです, りんごがたくさんあります',
            category: 'grammar',
            points: 3,
            description: 'Practice size and quantity descriptions'
          }
        ]
      },
      {
        id: 'week-11-day-5',
        title: 'Comparisons',
        description: 'Learn comparison structures in Japanese',
        tasks: [
          {
            id: 'learn-comparison-grammar',
            label: 'Learn comparison: より, ほど, 一番, もっと, ずっと',
            category: 'grammar',
            points: 4,
            description: 'Master comparison grammar'
          },
          {
            id: 'practice-comparison-sentences',
            label: 'Practice: この本はあの本より面白いです, 日本語は英語より難しいです',
            category: 'grammar',
            points: 3,
            description: 'Practice comparison sentences'
          },
          {
            id: 'superlative-words',
            label: 'Learn superlatives: 一番, 最も, 最高, 最低',
            category: 'vocab',
            points: 2,
            description: 'Superlative vocabulary'
          }
        ]
      },
      {
        id: 'week-11-day-6',
        title: 'Condition and State',
        description: 'Learn to describe condition and state',
        tasks: [
          {
            id: 'learn-condition-words',
            label: 'Learn condition words: 新しい, 古い, きれい, 汚い, 壊れている, 動いている',
            category: 'vocab',
            points: 4,
            description: 'Master condition vocabulary'
          },
          {
            id: 'learn-state-words',
            label: 'Learn state words: 開いている, 閉まっている, ついている, 消えている',
            category: 'vocab',
            points: 4,
            description: 'Master state vocabulary'
          },
          {
            id: 'practice-condition-sentences',
            label: 'Practice: ドアが開いています, テレビがついています',
            category: 'grammar',
            points: 3,
            description: 'Practice condition and state descriptions'
          }
        ]
      },
      {
        id: 'week-11-day-7',
        title: 'Description Review and Practice',
        description: 'Comprehensive review of all descriptive language',
        tasks: [
          {
            id: 'description-concepts-review',
            label: 'Review all descriptive language concepts',
            category: 'grammar',
            points: 4,
            description: 'Comprehensive description review'
          },
          {
            id: 'description-practice-exercises',
            label: 'Complete descriptive language exercises',
            category: 'grammar',
            points: 4,
            description: 'Practice all description concepts'
          },
          {
            id: 'object-description-practice',
            label: 'Describe various objects using learned vocabulary',
            category: 'grammar',
            points: 3,
            description: 'Apply description skills practically'
          }
        ]
      }
    ]
  },
  // Week 12: Making Requests
  {
    id: 'week-12',
    weekNumber: 12,
    title: 'Making Requests',
    description: 'Learn polite requests and offers in Japanese',
    focus: ['grammar', 'vocab'],
    resources: [
      {
        title: 'Japanese Request Expressions Guide',
        url: 'https://www.tofugu.com/japanese/japanese-request-expressions/',
        type: 'site',
        description: 'Complete guide to Japanese request and offer expressions'
      }
    ],
    days: [
      {
        id: 'week-12-day-1',
        title: 'Basic Request Forms',
        description: 'Learn fundamental request patterns',
        tasks: [
          {
            id: 'learn-basic-requests',
            label: 'Learn basic requests: ください, お願いします, してもらえますか',
            category: 'grammar',
            points: 4,
            description: 'Master basic request forms'
          },
          {
            id: 'practice-basic-requests',
            label: 'Practice: 水をください, 手伝ってもらえますか',
            category: 'grammar',
            points: 3,
            description: 'Practice basic request sentences'
          },
          {
            id: 'request-vocabulary',
            label: 'Learn request words: お願い, 頼む, 助ける, 手伝う',
            category: 'vocab',
            points: 3,
            description: 'Request-related vocabulary'
          }
        ]
      },
      {
        id: 'week-12-day-2',
        title: 'Polite Request Forms',
        description: 'Learn more polite request expressions',
        tasks: [
          {
            id: 'learn-polite-requests',
            label: 'Learn polite requests: していただけますか, お願いできますか',
            category: 'grammar',
            points: 4,
            description: 'Master polite request forms'
          },
          {
            id: 'practice-polite-requests',
            label: 'Practice: 教えていただけますか, お手伝いできますか',
            category: 'grammar',
            points: 3,
            description: 'Practice polite request sentences'
          },
          {
            id: 'polite-expressions',
            label: 'Learn polite expressions: 恐れ入ります, 申し訳ありません',
            category: 'vocab',
            points: 3,
            description: 'Polite expression vocabulary'
          }
        ]
      },
      {
        id: 'week-12-day-3',
        title: 'Offers and Suggestions',
        description: 'Learn how to make offers and suggestions',
        tasks: [
          {
            id: 'learn-offers',
            label: 'Learn offers: しましょうか, お手伝いしましょうか, どうですか',
            category: 'grammar',
            points: 4,
            description: 'Master offer expressions'
          },
          {
            id: 'learn-suggestions',
            label: 'Learn suggestions: いかがですか, どうでしょうか, おすすめです',
            category: 'grammar',
            points: 4,
            description: 'Master suggestion expressions'
          },
          {
            id: 'practice-offers-suggestions',
            label: 'Practice: お手伝いしましょうか, この本はいかがですか',
            category: 'grammar',
            points: 3,
            description: 'Practice offers and suggestions'
          }
        ]
      },
      {
        id: 'week-12-day-4',
        title: 'Permission Requests',
        description: 'Learn how to ask for permission',
        tasks: [
          {
            id: 'learn-permission-requests',
            label: 'Learn permission: してもいいですか, 使ってもいいですか, 入ってもいいですか',
            category: 'grammar',
            points: 4,
            description: 'Master permission request forms'
          },
          {
            id: 'practice-permission-requests',
            label: 'Practice: トイレを使ってもいいですか, 写真を撮ってもいいですか',
            category: 'grammar',
            points: 3,
            description: 'Practice permission requests'
          },
          {
            id: 'permission-vocabulary',
            label: 'Learn permission words: 許可, 禁止, 大丈夫, 問題ない',
            category: 'vocab',
            points: 3,
            description: 'Permission-related vocabulary'
          }
        ]
      },
      {
        id: 'week-12-day-5',
        title: 'Refusing Requests Politely',
        description: 'Learn how to refuse requests politely',
        tasks: [
          {
            id: 'learn-polite-refusals',
            label: 'Learn polite refusals: すみませんが, 申し訳ありませんが, ちょっと',
            category: 'grammar',
            points: 4,
            description: 'Master polite refusal expressions'
          },
          {
            id: 'practice-polite-refusals',
            label: 'Practice: すみませんが、できません, 申し訳ありませんが、忙しいです',
            category: 'grammar',
            points: 3,
            description: 'Practice polite refusals'
          },
          {
            id: 'refusal-vocabulary',
            label: 'Learn refusal words: 無理, 難しい, 困る, 都合が悪い',
            category: 'vocab',
            points: 3,
            description: 'Refusal-related vocabulary'
          }
        ]
      },
      {
        id: 'week-12-day-6',
        title: 'Accepting Requests',
        description: 'Learn how to accept requests positively',
        tasks: [
          {
            id: 'learn-acceptance',
            label: 'Learn acceptance: はい, もちろん, 喜んで, 大丈夫です',
            category: 'grammar',
            points: 4,
            description: 'Master acceptance expressions'
          },
          {
            id: 'practice-acceptance',
            label: 'Practice: はい、お手伝いします, もちろん、大丈夫です',
            category: 'grammar',
            points: 3,
            description: 'Practice acceptance responses'
          },
          {
            id: 'positive-vocabulary',
            label: 'Learn positive words: 喜んで, 楽しい, 嬉しい, 助かる',
            category: 'vocab',
            points: 3,
            description: 'Positive response vocabulary'
          }
        ]
      },
      {
        id: 'week-12-day-7',
        title: 'Request Review and Practice',
        description: 'Comprehensive review of all request expressions',
        tasks: [
          {
            id: 'request-concepts-review',
            label: 'Review all request and offer concepts',
            category: 'grammar',
            points: 4,
            description: 'Comprehensive request review'
          },
          {
            id: 'request-practice-exercises',
            label: 'Complete request expression exercises',
            category: 'grammar',
            points: 4,
            description: 'Practice all request concepts'
          },
          {
            id: 'conversation-practice-requests',
            label: 'Practice making and responding to requests in conversation',
            category: 'grammar',
            points: 3,
            description: 'Apply request skills in conversation'
          }
        ]
      }
    ]
  },
  // Week 13: Likes and Dislikes
  {
    id: 'week-13',
    weekNumber: 13,
    title: 'Likes and Dislikes',
    description: 'Express preferences and opinions in Japanese',
    focus: ['grammar', 'vocab'],
    resources: [
      {
        title: 'Japanese Preference Expressions Guide',
        url: 'https://www.tofugu.com/japanese/japanese-preference-expressions/',
        type: 'site',
        description: 'Complete guide to Japanese preference and opinion expressions'
      }
    ],
    days: [
      {
        id: 'week-13-day-1',
        title: 'Basic Likes and Dislikes',
        description: 'Learn fundamental preference expressions',
        tasks: [
          {
            id: 'learn-basic-preferences',
            label: 'Learn basic preferences: 好き, 嫌い, 大好き, 大嫌い',
            category: 'grammar',
            points: 4,
            description: 'Master basic preference vocabulary'
          },
          {
            id: 'practice-basic-preferences',
            label: 'Practice: 私は日本語が好きです, 彼は魚が嫌いです',
            category: 'grammar',
            points: 3,
            description: 'Practice basic preference sentences'
          },
          {
            id: 'preference-vocabulary',
            label: 'Learn preference words: 趣味, 興味, 関心, 好み',
            category: 'vocab',
            points: 3,
            description: 'Preference-related vocabulary'
          }
        ]
      },
      {
        id: 'week-13-day-2',
        title: 'Food Preferences',
        description: 'Learn to express food likes and dislikes',
        tasks: [
          {
            id: 'learn-food-preferences',
            label: 'Learn food preferences: 美味しい, まずい, 甘い, 辛い, 酸っぱい',
            category: 'vocab',
            points: 4,
            description: 'Master food preference vocabulary'
          },
          {
            id: 'practice-food-preferences',
            label: 'Practice: この料理は美味しいです, 甘いものが好きです',
            category: 'grammar',
            points: 3,
            description: 'Practice food preference sentences'
          },
          {
            id: 'food-taste-vocabulary',
            label: 'Learn taste words: 苦い, しょっぱい, うまい, 不味い',
            category: 'vocab',
            points: 3,
            description: 'Taste vocabulary'
          }
        ]
      },
      {
        id: 'week-13-day-3',
        title: 'Activity Preferences',
        description: 'Learn to express activity preferences',
        tasks: [
          {
            id: 'learn-activity-preferences',
            label: 'Learn activity preferences: 楽しい, つまらない, 面白い, 退屈',
            category: 'vocab',
            points: 4,
            description: 'Master activity preference vocabulary'
          },
          {
            id: 'practice-activity-preferences',
            label: 'Practice: 映画を見るのが好きです, 勉強は嫌いです',
            category: 'grammar',
            points: 3,
            description: 'Practice activity preference sentences'
          },
          {
            id: 'activity-vocabulary',
            label: 'Learn activity words: スポーツ, 音楽, 読書, 映画, ゲーム',
            category: 'vocab',
            points: 3,
            description: 'Activity vocabulary'
          }
        ]
      },
      {
        id: 'week-13-day-4',
        title: 'Opinion Expressions',
        description: 'Learn to express opinions and thoughts',
        tasks: [
          {
            id: 'learn-opinion-expressions',
            label: 'Learn opinions: 思う, 考える, 感じる, 信じる',
            category: 'grammar',
            points: 4,
            description: 'Master opinion expression verbs'
          },
          {
            id: 'practice-opinion-expressions',
            label: 'Practice: そう思います, そう考えます, そう感じます',
            category: 'grammar',
            points: 3,
            description: 'Practice opinion expressions'
          },
          {
            id: 'opinion-vocabulary',
            label: 'Learn opinion words: 意見, 考え, 感じ, 印象',
            category: 'vocab',
            points: 3,
            description: 'Opinion-related vocabulary'
          }
        ]
      },
      {
        id: 'week-13-day-5',
        title: 'Degree of Preference',
        description: 'Learn to express degrees of preference',
        tasks: [
          {
            id: 'learn-preference-degrees',
            label: 'Learn degrees: とても, かなり, 少し, あまり, 全然',
            category: 'grammar',
            points: 4,
            description: 'Master preference degree expressions'
          },
          {
            id: 'practice-preference-degrees',
            label: 'Practice: とても好きです, あまり好きではありません, 全然嫌いです',
            category: 'grammar',
            points: 3,
            description: 'Practice degree expressions'
          },
          {
            id: 'degree-vocabulary',
            label: 'Learn degree words: 非常に, 非常に, ちょっと, 全く',
            category: 'vocab',
            points: 3,
            description: 'Degree vocabulary'
          }
        ]
      },
      {
        id: 'week-13-day-6',
        title: 'Comparing Preferences',
        description: 'Learn to compare preferences',
        tasks: [
          {
            id: 'learn-preference-comparisons',
            label: 'Learn comparisons: より好き, 一番好き, どちらが好き',
            category: 'grammar',
            points: 4,
            description: 'Master preference comparison expressions'
          },
          {
            id: 'practice-preference-comparisons',
            label: 'Practice: コーヒーよりお茶が好きです, どちらが好きですか',
            category: 'grammar',
            points: 3,
            description: 'Practice preference comparisons'
          },
          {
            id: 'comparison-vocabulary',
            label: 'Learn comparison words: どちら, どれ, どっち, どちらも',
            category: 'vocab',
            points: 3,
            description: 'Comparison vocabulary'
          }
        ]
      },
      {
        id: 'week-13-day-7',
        title: 'Preference Review and Practice',
        description: 'Comprehensive review of all preference expressions',
        tasks: [
          {
            id: 'preference-concepts-review',
            label: 'Review all preference and opinion concepts',
            category: 'grammar',
            points: 4,
            description: 'Comprehensive preference review'
          },
          {
            id: 'preference-practice-exercises',
            label: 'Complete preference expression exercises',
            category: 'grammar',
            points: 4,
            description: 'Practice all preference concepts'
          },
          {
            id: 'conversation-practice-preferences',
            label: 'Practice discussing preferences in conversation',
            category: 'grammar',
            points: 3,
            description: 'Apply preference skills in conversation'
          }
        ]
      }
    ]
  },
  // Week 14: Past Tense Review
  {
    id: 'week-14',
    weekNumber: 14,
    title: 'Past Tense Review',
    description: 'Master past tense and experiences in Japanese',
    focus: ['grammar', 'vocab'],
    resources: [
      {
        title: 'Japanese Past Tense Guide',
        url: 'https://www.tofugu.com/japanese/japanese-past-tense/',
        type: 'site',
        description: 'Complete guide to Japanese past tense expressions'
      }
    ],
    days: [
      {
        id: 'week-14-day-1',
        title: 'Past Tense Verbs Review',
        description: 'Review past tense verb conjugations',
        tasks: [
          {
            id: 'review-past-verbs',
            label: 'Review past tense: 行った, 食べた, した, 見た, 聞いた',
            category: 'grammar',
            points: 4,
            description: 'Master past tense verb forms'
          },
          {
            id: 'practice-past-verbs',
            label: 'Practice: 昨日映画を見ました, おととい友達に会いました',
            category: 'grammar',
            points: 3,
            description: 'Practice past tense sentences'
          },
          {
            id: 'past-time-vocabulary',
            label: 'Learn past time words: 昨日, おととい, 先週, 先月, 去年',
            category: 'vocab',
            points: 3,
            description: 'Past time vocabulary'
          }
        ]
      },
      {
        id: 'week-14-day-2',
        title: 'Past Tense Adjectives',
        description: 'Review past tense of adjectives',
        tasks: [
          {
            id: 'review-past-adjectives',
            label: 'Review past adjectives: 大きかった, 小さかった, きれいでした',
            category: 'grammar',
            points: 4,
            description: 'Master past tense adjectives'
          },
          {
            id: 'practice-past-adjectives',
            label: 'Practice: 昨日は暑かったです, その映画は面白かったです',
            category: 'grammar',
            points: 3,
            description: 'Practice past tense adjectives'
          },
          {
            id: 'past-experience-vocabulary',
            label: 'Learn experience words: 経験, 思い出, 記憶, 過去',
            category: 'vocab',
            points: 3,
            description: 'Experience-related vocabulary'
          }
        ]
      },
      {
        id: 'week-14-day-3',
        title: 'Past Experiences',
        description: 'Learn to talk about past experiences',
        tasks: [
          {
            id: 'learn-experience-expressions',
            label: 'Learn experience: ことがあります, ことがありません, したことがあります',
            category: 'grammar',
            points: 4,
            description: 'Master experience expressions'
          },
          {
            id: 'practice-experience-expressions',
            label: 'Practice: 日本に行ったことがあります, 寿司を食べたことがありません',
            category: 'grammar',
            points: 3,
            description: 'Practice experience expressions'
          },
          {
            id: 'experience-vocabulary',
            label: 'Learn experience words: 旅行, 仕事, 勉強, 生活, 体験',
            category: 'vocab',
            points: 3,
            description: 'Experience vocabulary'
          }
        ]
      },
      {
        id: 'week-14-day-4',
        title: 'Past Habits and Routines',
        description: 'Learn to describe past habits and routines',
        tasks: [
          {
            id: 'learn-past-habits',
            label: 'Learn past habits: よく〜していました, いつも〜していました',
            category: 'grammar',
            points: 4,
            description: 'Master past habit expressions'
          },
          {
            id: 'practice-past-habits',
            label: 'Practice: 子供の時、よく公園で遊んでいました',
            category: 'grammar',
            points: 3,
            description: 'Practice past habit sentences'
          },
          {
            id: 'habit-vocabulary',
            label: 'Learn habit words: 習慣, 癖, 日常, 規則的',
            category: 'vocab',
            points: 3,
            description: 'Habit-related vocabulary'
          }
        ]
      },
      {
        id: 'week-14-day-5',
        title: 'Past Events and Stories',
        description: 'Learn to tell stories about past events',
        tasks: [
          {
            id: 'learn-story-connectors',
            label: 'Learn story connectors: それから, そして, でも, しかし',
            category: 'grammar',
            points: 4,
            description: 'Master story-telling connectors'
          },
          {
            id: 'practice-story-telling',
            label: 'Practice: 昨日、友達と映画を見に行きました。それから、レストランで食事をしました',
            category: 'grammar',
            points: 3,
            description: 'Practice story-telling'
          },
          {
            id: 'story-vocabulary',
            label: 'Learn story words: 出来事, 事件, 話, 物語',
            category: 'vocab',
            points: 3,
            description: 'Story-related vocabulary'
          }
        ]
      },
      {
        id: 'week-14-day-6',
        title: 'Past Negative Forms',
        description: 'Review past negative forms',
        tasks: [
          {
            id: 'review-past-negative',
            label: 'Review past negative: 行かなかった, 食べませんでした, しませんでした',
            category: 'grammar',
            points: 4,
            description: 'Master past negative forms'
          },
          {
            id: 'practice-past-negative',
            label: 'Practice: 昨日勉強しませんでした, 映画を見ませんでした',
            category: 'grammar',
            points: 3,
            description: 'Practice past negative sentences'
          },
          {
            id: 'negative-experience-vocabulary',
            label: 'Learn negative words: しなかった, できなかった, 行かなかった',
            category: 'vocab',
            points: 3,
            description: 'Negative experience vocabulary'
          }
        ]
      },
      {
        id: 'week-14-day-7',
        title: 'Past Tense Review and Practice',
        description: 'Comprehensive review of all past tense concepts',
        tasks: [
          {
            id: 'past-tense-concepts-review',
            label: 'Review all past tense concepts',
            category: 'grammar',
            points: 4,
            description: 'Comprehensive past tense review'
          },
          {
            id: 'past-tense-practice-exercises',
            label: 'Complete past tense exercises',
            category: 'grammar',
            points: 4,
            description: 'Practice all past tense concepts'
          },
          {
            id: 'story-writing-practice',
            label: 'Write a short story about a past experience',
            category: 'grammar',
            points: 3,
            description: 'Apply past tense skills practically'
          }
        ]
      }
    ]
  },
  // Week 15: Future Plans
  {
    id: 'week-15',
    weekNumber: 15,
    title: 'Future Plans',
    description: 'Express future intentions and plans in Japanese',
    focus: ['grammar', 'vocab'],
    resources: [
      {
        title: 'Japanese Future Expressions Guide',
        url: 'https://www.tofugu.com/japanese/japanese-future-expressions/',
        type: 'site',
        description: 'Complete guide to Japanese future expressions'
      }
    ],
    days: [
      {
        id: 'week-15-day-1',
        title: 'Future Intentions',
        description: 'Learn to express future intentions',
        tasks: [
          {
            id: 'learn-future-intentions',
            label: 'Learn future intentions: つもりです, 予定です, 計画です',
            category: 'grammar',
            points: 4,
            description: 'Master future intention expressions'
          },
          {
            id: 'practice-future-intentions',
            label: 'Practice: 明日映画を見るつもりです, 来週日本に行く予定です',
            category: 'grammar',
            points: 3,
            description: 'Practice future intention sentences'
          },
          {
            id: 'intention-vocabulary',
            label: 'Learn intention words: 計画, 予定, 目標, 目的',
            category: 'vocab',
            points: 3,
            description: 'Intention-related vocabulary'
          }
        ]
      },
      {
        id: 'week-15-day-2',
        title: 'Future Time Expressions',
        description: 'Learn future time expressions',
        tasks: [
          {
            id: 'learn-future-time',
            label: 'Learn future time: 明日, 明後日, 来週, 来月, 来年',
            category: 'vocab',
            points: 4,
            description: 'Master future time vocabulary'
          },
          {
            id: 'practice-future-time',
            label: 'Practice: 明日友達に会います, 来週試験があります',
            category: 'grammar',
            points: 3,
            description: 'Practice future time sentences'
          },
          {
            id: 'future-time-vocabulary',
            label: 'Learn future words: 将来, 未来, 今後, これから',
            category: 'vocab',
            points: 3,
            description: 'Future time vocabulary'
          }
        ]
      },
      {
        id: 'week-15-day-3',
        title: 'Plans and Schedules',
        description: 'Learn to discuss plans and schedules',
        tasks: [
          {
            id: 'learn-schedule-expressions',
            label: 'Learn schedule: 予定があります, スケジュール, 計画を立てる',
            category: 'grammar',
            points: 4,
            description: 'Master schedule expressions'
          },
          {
            id: 'practice-schedule-expressions',
            label: 'Practice: 明日は忙しいです, 来週は暇です',
            category: 'grammar',
            points: 3,
            description: 'Practice schedule sentences'
          },
          {
            id: 'schedule-vocabulary',
            label: 'Learn schedule words: 忙しい, 暇, 予定, スケジュール',
            category: 'vocab',
            points: 3,
            description: 'Schedule vocabulary'
          }
        ]
      },
      {
        id: 'week-15-day-4',
        title: 'Goals and Aspirations',
        description: 'Learn to express goals and aspirations',
        tasks: [
          {
            id: 'learn-goal-expressions',
            label: 'Learn goals: 目標, 夢, 希望, 願い',
            category: 'vocab',
            points: 4,
            description: 'Master goal vocabulary'
          },
          {
            id: 'practice-goal-expressions',
            label: 'Practice: 日本語を話せるようになりたいです, 医者になりたいです',
            category: 'grammar',
            points: 3,
            description: 'Practice goal expressions'
          },
          {
            id: 'aspiration-vocabulary',
            label: 'Learn aspiration words: なりたい, したい, できるようになりたい',
            category: 'vocab',
            points: 3,
            description: 'Aspiration vocabulary'
          }
        ]
      },
      {
        id: 'week-15-day-5',
        title: 'Future Possibilities',
        description: 'Learn to express future possibilities',
        tasks: [
          {
            id: 'learn-possibility-expressions',
            label: 'Learn possibilities: かもしれません, でしょう, かもしれない',
            category: 'grammar',
            points: 4,
            description: 'Master possibility expressions'
          },
          {
            id: 'practice-possibility-expressions',
            label: 'Practice: 明日雨が降るかもしれません, 来年日本に行くでしょう',
            category: 'grammar',
            points: 3,
            description: 'Practice possibility sentences'
          },
          {
            id: 'possibility-vocabulary',
            label: 'Learn possibility words: 可能性, 確率, 予想, 推測',
            category: 'vocab',
            points: 3,
            description: 'Possibility vocabulary'
          }
        ]
      },
      {
        id: 'week-15-day-6',
        title: 'Future Conditions',
        description: 'Learn to express future conditions',
        tasks: [
          {
            id: 'learn-condition-expressions',
            label: 'Learn conditions: もし〜なら, 〜たら, 〜ば',
            category: 'grammar',
            points: 4,
            description: 'Master conditional expressions'
          },
          {
            id: 'practice-condition-expressions',
            label: 'Practice: もし時間があれば、映画を見ます, 天気がよければ、散歩します',
            category: 'grammar',
            points: 3,
            description: 'Practice conditional sentences'
          },
          {
            id: 'condition-vocabulary',
            label: 'Learn condition words: 条件, 場合, 状況, 環境',
            category: 'vocab',
            points: 3,
            description: 'Condition vocabulary'
          }
        ]
      },
      {
        id: 'week-15-day-7',
        title: 'Future Review and Practice',
        description: 'Comprehensive review of all future expressions',
        tasks: [
          {
            id: 'future-concepts-review',
            label: 'Review all future expression concepts',
            category: 'grammar',
            points: 4,
            description: 'Comprehensive future review'
          },
          {
            id: 'future-practice-exercises',
            label: 'Complete future expression exercises',
            category: 'grammar',
            points: 4,
            description: 'Practice all future concepts'
          },
          {
            id: 'future-planning-practice',
            label: 'Create a detailed future plan in Japanese',
            category: 'grammar',
            points: 3,
            description: 'Apply future skills practically'
          }
        ]
      }
    ]
  }
]
