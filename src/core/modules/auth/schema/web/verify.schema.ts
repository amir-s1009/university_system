import z from "zod";

export const verifySchema = z.object({
  body: z.object({
    email: z.email("ایمیل ارسال شده نامعتبر است."),
    otp: z.number("کد فعالسازی یکبار مصرف باید مقداری عددی باشد"),
  }),
});

export type verifySchema = z.infer<typeof verifySchema>;
