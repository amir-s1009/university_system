import { StudyMode } from "@prisma/client";
import z from "zod";

export const CreateStudentSchema = z.object({
  body: z.object({
    user: z.object({
      firstName: z.string("نام دانشجو ارسال نشده است"),
      lastName: z.string("نام خانوادگی دانشجو ارسال نشده است"),
      fatherName: z.string("نام پدر دانشجو ارسال نشده است"),
      nationalCode: z
        .number("کد ملی دانشجو ارسال نشده است")
        .refine((v) => String(v).length === 10, "طول کد ملی غیر مجاز است"),
      zipCode: z
        .number()
        .optional()
        .refine((v) => (v ? String(v).length === 10 : true)),
      phoneNumber: z
        .number("شماره موبایل دانشجو ارسال نشده است")
        .refine((v) => String(v).length === 10, "طول شماره موبایل غیر مجاز است")
        .refine(
          (v) => String(v).slice(0, 2) === "09",
          "شماره موبایل باید با 09 آغاز شود"
        ),
      birthData: z.date("تاریخ تولد دانشجو ارسال نشده است"),
      address: z
        .object({
          province: z.string("استان ارسال نشده است"),
          city: z.string("شهر ارسال نشده است"),
          route: z.string("نشانی محل سکونت ارسال نشده است"),
        })
        .optional(),
    }),
    studyMode: z.enum(StudyMode, "مد تحصیلی دانشجو ارسال نشده است"),
  }),
});

export type CreateStudentSchema = z.infer<typeof CreateStudentSchema>;
