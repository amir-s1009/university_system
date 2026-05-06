import z from "zod";

export const loginSchema = z.object({
  body: z.object({
    email: z.email("ایمیل ارسال شده نامعتبر است."),
    password: z.string("رمز عبور ارسال نشده است"),
  }),
});

export type loginSchema = z.infer<typeof loginSchema>;
