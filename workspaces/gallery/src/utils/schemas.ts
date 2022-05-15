import { z } from 'zod'

export const addPhotoFormSchema = z.object({
  label: z.string(),
  url: z.string().url(),
})

export type AddPhotoSchema = z.infer<typeof addPhotoFormSchema>

export const deletePhotoFormSchema = z.object({
  password: z.string().min(8).max(24),
})

export type DeletePhotoSchema = z.infer<typeof deletePhotoFormSchema>
