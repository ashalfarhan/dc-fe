import { z } from 'zod';

export type Profile = {
  id: string;
  githubId?: string | null;
  googleId?: string | null;
} & NonNullablePick<UpdateProfilePayload, 'email'>;

export const updateProfileSchema = z.object({
  avatarUrl: z.string().nullish(),
  bio: z.string().nullish(),
  email: z.string().optional(),
  name: z.string().nullish(),
  phone: z.string().nullish(),
});

export type UpdateProfilePayload = z.infer<typeof updateProfileSchema>;
