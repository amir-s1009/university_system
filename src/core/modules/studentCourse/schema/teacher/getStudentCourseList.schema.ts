import z from "zod";

export const GetStudentCourseListSchema = z.object({
  queries: z.object({
    courseId: z.uuid("شناسه دوره ارسال نشده است"),
  }),
});

export type GetStudentCourseListSchema = z.infer<
  typeof GetStudentCourseListSchema
>;
