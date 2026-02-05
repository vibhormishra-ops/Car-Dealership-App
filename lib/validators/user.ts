import {z} from "zod"

export const userParamsValidationSchema=z.object({
    userId: z.uuid(),
})