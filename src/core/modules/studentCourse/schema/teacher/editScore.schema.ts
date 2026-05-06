import z from "zod";

export const EditScoreSchema = z.object({
  body: z.object({
    studentCourseId: z.uuid("شناسه دوره دانشجو ارسال نشده است"),
    score: z
      .number("نمره دوره دانشجو ارسال نشده است")
      .min(0, "نمره نمیتواند منفی باشد")
      .max(20, "سقف نمره 20 میباشد"),
  }),
});

export type EditScoreSchema = z.infer<typeof EditScoreSchema>;
