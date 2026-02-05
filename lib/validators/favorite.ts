import {z} from "zod";

export const toggleFavoriteSchema=z.object({
    carId: z.uuid(),
})