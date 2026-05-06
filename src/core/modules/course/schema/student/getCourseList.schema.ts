import z from "zod";

export const GetCourseListSchema = z.object({
  queries: z.object({
    semesterId: z.uuid("شناسه نیمسال تحصیلی ارسال نشده است"),
  }),
});

export type GetCourseListSchema = z.infer<typeof GetCourseListSchema>;
