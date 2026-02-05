import { z } from "zod";

export const sellCarSchema = z.object({
  title: z.string().max(100),
  brand: z.string().max(50),
  model: z.string().max(50),
  year: z.number().int().min(1990).max(new Date().getFullYear()),
  price: z.number().positive(),
  mileage: z.number().nonnegative(),
  color: z.string().optional(),
  description: z.string().max(1000).optional(),
  imageURL: z.string(),
  sellerId: z.string(),
});
