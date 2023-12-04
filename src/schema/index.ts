import { z } from "zod";

export const projectInputSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please provide a valid email"),
  description: z.string().min(5, "Please provide a more detailed project description"),
});

export type ProjectInput = z.input<typeof projectInputSchema>;
