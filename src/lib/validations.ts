import { z } from 'zod'

export const profileSchema = z.object({
  display_name: z.string().min(1, 'Display name is required').max(50),
  timezone: z.string().min(1, 'Timezone is required'),
})

export const progressNoteSchema = z.object({
  note: z.string().max(500, 'Note must be less than 500 characters').optional(),
})

export const taskToggleSchema = z.object({
  taskId: z.string().uuid(),
  completed: z.boolean(),
})

export type ProfileFormData = z.infer<typeof profileSchema>
export type ProgressNoteFormData = z.infer<typeof progressNoteSchema>
export type TaskToggleFormData = z.infer<typeof taskToggleSchema>
