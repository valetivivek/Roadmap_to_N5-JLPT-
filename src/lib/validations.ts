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

export const signUpSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  display_name: z.string().min(3, 'Username must be at least 3 characters').max(30, 'Username must be less than 30 characters'),
})

export const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
})

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string().min(8, 'Password must be at least 8 characters'),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export type ProfileFormData = z.infer<typeof profileSchema>
export type ProgressNoteFormData = z.infer<typeof progressNoteSchema>
export type TaskToggleFormData = z.infer<typeof taskToggleSchema>
export type SignUpFormData = z.infer<typeof signUpSchema>
export type SignInFormData = z.infer<typeof signInSchema>
export type ChangePasswordFormData = z.infer<typeof changePasswordSchema>
