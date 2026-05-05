import z from "zod";

export const CreateStudentCourseSchema = z.object({
  body: z.object({
    courseId: z.uuid("شناسه دوره ارسال نشده است"),
  }),
});

export type CreateStudentCourseSchema = z.infer<
  typeof CreateStudentCourseSchema
>;
