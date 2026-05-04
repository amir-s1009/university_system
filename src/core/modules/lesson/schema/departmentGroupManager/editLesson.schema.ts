import { LessonType } from "@prisma/client";
import z from "zod";

export const EditLessonSchema = z.object({
  body: z.object({
    title: z.string("عنوان درس ارسال نشده است"),
    coefficient: z
      .number("ضریب درس ارسال نشده است")
      .min(1, "ضریب درس نمیتواند کمتر از 1 باشد"),
    departmentGroupId: z.uuid("شناسه گروه آموزشی ارسال نشده است"),
    lessonType: z.enum(LessonType, "نوع درس غیر مجاز است"),
  }),
  params: z.object({
    id: z.uuid("شناسه درس ارسال نشده است"),
  }),
});

export type EditLessonSchema = z.infer<typeof EditLessonSchema>;
