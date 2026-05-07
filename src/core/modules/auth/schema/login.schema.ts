import z from "zod";

export const loginSchema = z.object({
  body: z.object({
    nationalCode: z.number("کد ملی ارسال نشده است").refine((v) => {
      if (String(v).length !== 10) return false;
      return true;
    }, "کد ملی باید 10 رقمی باشد"),
    password: z.string("رمز عبور ارسال نشده است"),
  }),
});

export type loginSchema = z.infer<typeof loginSchema>;
