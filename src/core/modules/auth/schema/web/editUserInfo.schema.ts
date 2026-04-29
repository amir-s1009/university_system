import z from "zod";
import { FileSchema } from "../../../../types.js";

export const editUserInfoSchema = z.object({
  body: z.object({
    password: z
      .string("رمز عبور ارسال نشده است")
      .min(5, "طول رمز کوتاه میباشد.")
      .optional(),
    firstName: z.string("نام ارسال نشده است").min(3, "طول نام کوتاه است."),
    lastName: z
      .string("نام خانوادگی ارسال نشده است")
      .min(3, "طول نام خانوادگی کوتاه است."),
    avatar: z.array(FileSchema, "آواتار باید آرایه باشد").optional(),
  }),
});

export type editUserInfoSchema = z.infer<typeof editUserInfoSchema>;
