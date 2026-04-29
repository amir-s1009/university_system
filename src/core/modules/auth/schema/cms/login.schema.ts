import z from "zod";

export const loginSchema = z.object({
  body: z.object({
    phoneNumber: z.string().regex(/^09\d{9}$/, "شماره موبایل غیر مجاز است."),
    password: z.string("رمز عبور ارسال نشده است"),
  }),
});

export type loginSchema = z.infer<typeof loginSchema>;
