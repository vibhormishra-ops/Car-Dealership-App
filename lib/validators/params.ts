import { z } from "zod";

export const carIdParamsSchema = z.object({
  id: z.uuid(),
});
