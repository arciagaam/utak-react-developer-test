import { z } from 'zod';

export const optionItemSchema = z.object({
    name: z.string(),
    additionalPrice: z.coerce.number()
})

export const optionSchema = z.object({
    name: z.string(),
    items: z.array(optionItemSchema)
})

export const menuItemSchema = z.object({
    name: z.string(),
    basePrice: z.coerce.number(),
    category: z.string(),
    options: z.array(optionSchema),
    cost: z.coerce.string(),
    amountInStock: z.coerce.number(),
})
