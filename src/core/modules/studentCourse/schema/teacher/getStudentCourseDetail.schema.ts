import z from "zod";

export const GetStudentCourseDetailSchema = z.object({
  params: z.object({
    id: z.uuid("شناسه دوره دانشجو ارسال نشده است"),
  }),
});

export type GetStudentCourseDetailSchema = z.infer<
  typeof GetStudentCourseDetailSchema
>;
