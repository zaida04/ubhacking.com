import { z } from 'zod';

export const registerUserSchema = z.object({
  // Personal
  contactEmail: z.string().email(),
  nameFirst: z.string().min(2),
  nameLast: z.string().min(2),
  dob: z.string(), // Changed to accept date format from input
  phone: z.string(), // Changed to accept various phone formats
  gender: z.string().min(2),
  raceEthnicity: z.string().min(2),
  country: z.string().min(2),

  // Education
  schoolName: z.string().min(2),
  schoolMajor: z.string().min(2),
  levelOfStudy: z.string(),
  graduationYear: z.number().int().positive(),

  // Shipping
  address1: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),

  // Logistics
  isAttendingInPerson: z.boolean().optional(),
  shirtSize: z.enum(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
  dietaryRestrictions: z.array(z.string()).optional(),
  dietaryRestrictionsOther: z.string().optional(),
  allergies: z.array(z.string()).optional(),
  allergiesOther: z.string().optional(),
  specialRequest: z.string().optional(),

  // Other
  howYouHeard: z.string(),
  whyAttend: z.string().max(1000),
  codeOfConductUBHacking: z.boolean(),
  codeOfConduct: z.boolean(),
  dataSharing: z.boolean(),
  communication: z.boolean().optional(),
});

export type RegisterUserSchema = z.infer<typeof registerUserSchema>;
