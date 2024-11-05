import { z } from 'zod';

export const updateResumeSchema = z.object({
    resume: z.instanceof(File, { "message": 'Please upload a resume' }),
});

export type UpdateResumeSchema = z.infer<typeof updateResumeSchema>;
