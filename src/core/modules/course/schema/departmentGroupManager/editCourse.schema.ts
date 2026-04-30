import { Day, TimeRange } from "@prisma/client";
import z from "zod";

export const EditCourseSchema = z.object({
  body: z.object({
    number: z
      .number("شماره دوره ارسال نشده است")
      .min(0, "شماره کلاس نمیتواند منفی باشد"),
    capacity: z.number().min(0, "ظرفیت کلاس نمیتواند منفی باشد").optional(),
    examAt: z.date().optional(),
    lessonId: z.uuid("شناسه درس ارسال نشده است"),
    teacherId: z.uuid("شناسه استاد ارسال نشده است"),
    times: z.array(
      z.object({
        day: z.enum(Day, "روز کلاس غیر مجاز است"),
        time: z.enum(TimeRange, "بازه زمانی کلاس غیر مجاز است"),
        classRoomId: z.uuid("شناسه کلاس ارسال نشده است"),
      })
    ),
  }),
  params: z.object({
    id: z.uuid("شناسه دوره ارسال نشده است"),
  }),
});

export type EditCourseSchema = z.infer<typeof EditCourseSchema>;
