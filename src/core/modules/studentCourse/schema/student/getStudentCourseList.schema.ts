import z from "zod";

export const GetStudentCourseListSchema = z.object({
  queries: z.object({
    semesterId: z.uuid("شناسه نیمسال تحصیلی ارسال نشده است"),
  }),
});

export type GetStudentCourseListSchema = z.infer<
  typeof GetStudentCourseListSchema
>;
