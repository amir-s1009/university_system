import z from "zod";

export const refreshTokenSchema = z.object({
  body: z.object({
    refreshToken: z
      .string("رفرش توکن ارسال نشده است")
      .nonempty("توکن رفرش ارسال نشده است"),
  }),
});

export type refreshTokenSchema = z.infer<typeof refreshTokenSchema>;
