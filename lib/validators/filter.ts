import { z } from "zod";

export const carFilterSchema = z.object({
  brand: z.string().optional(),
  minPrice: z.coerce.number().positive().optional(),
  maxPrice: z.coerce.number().positive().optional(),
  year: z.coerce.number().int().optional(),
});
