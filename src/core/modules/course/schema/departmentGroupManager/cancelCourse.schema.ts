import z from "zod";

export const CancelCourseSchema = z.object({
  params: z.object({
    id: z.uuid("شناسه دوره ارسال نشده است"),
  }),
});
