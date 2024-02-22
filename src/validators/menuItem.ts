import { z } from 'zod';

export const optionItemSchema = z.object({
    name: z.string().min(1, {message: 'Item name must contain at least 1 character'}),
    additionalPrice: z.coerce.number().min(0, {message: 'Additional price must be greater than or equal to zero'})
})

export const optionSchema = z.object({
    name: z.string().min(1, {message: 'Option name must contain at least 1 character'}),
    items: z.array(optionItemSchema).optional()
})

export const menuItemSchema = z.object({
    name: z.string().min(1),
    basePrice: z.coerce.number().min(0, {message: 'Base price must be greater than or equal to zero'}),
    category: z.string().min(1, {message: 'Category must contain at least 1 character'}),
    options: z.array(optionSchema).optional(),
    cost: z.coerce.string().min(1, {message: 'Cost must be greater than or equal to zero'}),
    amountInStock: z.coerce.number().min(1, {message: 'Amount must be greater than or equal to zero'}),
})
