import z from "zod";

export const GetCourseListSchema = z.object({
  queries: z.object({
    departmentGroupId: z.uuid("شناسه گروه آموزشی نا معتبر است").optional(),
  }),
});

export type GetCourseListSchema = z.infer<typeof GetCourseListSchema>;
