import { userPrivateMetadataSchema } from "@/lib/validation/auth"
import { type z } from "zod"

export type UserRole = z.infer<typeof userPrivateMetadataSchema.shape.role>