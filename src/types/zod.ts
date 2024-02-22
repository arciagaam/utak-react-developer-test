import { menuItemSchema } from "@/validators/menuItem";
import { z } from "zod";

export type TZodMenuItem = z.infer<typeof menuItemSchema>