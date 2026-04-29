import { ROLE } from "@prisma/client";
import z from "zod";

export const signupSchema = z.object({
  body: z.object({
    email: z.email("ایمیل ارسال شده نا معتبر است."),
    password: z
      .string("رمز عبور ارسال نشده است")
      .min(5, "طول رمز کوتاه میباشد."),
    firstName: z.string("نام ارسال نشده است").min(3, "طول نام کوتاه است."),
    lastName: z
      .string("نام خانوادگی ارسال نشده است")
      .min(3, "طول نام خانوادگی کوتاه است."),
    role: z.enum(
      [ROLE.STUDENT, ROLE.TEACHER],
      "نقش کاربری ارسال شده غیر مجاز است"
    ),
  }),
});

export type signupSchema = z.infer<typeof signupSchema>;
