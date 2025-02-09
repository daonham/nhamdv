import { z } from "zod";

export const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }).max(1000, {
    message: "Message must be less than 1000 characters",
  }),
});

export type ContactFormData = z.infer<typeof schema>;
