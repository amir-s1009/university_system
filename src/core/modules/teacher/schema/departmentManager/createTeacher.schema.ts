import z from "zod";

export const CreateTeacherSchema = z.object({
  body: z.object({
    user: z.object({
      firstName: z.string("نام استاد ارسال نشده است"),
      lastName: z.string("نام خانوادگی استاد ارسال نشده است"),
      fatherName: z.string("نام پدر استاد ارسال نشده است"),
      nationalCode: z
        .string("کد ملی استاد ارسال نشده است")
        .refine((v) => String(v).length === 10, "طول کد ملی غیر مجاز است"),
      zipCode: z
        .string()
        .optional()
        .refine(
          (v) => (v ? String(v).length === 10 : true),
          "طول کد پستی باید 10 رقمی باشد."
        ),
      phoneNumber: z
        .string("شماره موبایل استاد ارسال نشده است")
        .refine((v) => String(v).length === 11, "طول شماره موبایل غیر مجاز است")
        .refine(
          (v) => String(v).slice(0, 2) === "09",
          "شماره موبایل باید با 09 آغاز شود"
        ),
      birthDate: z.iso.date("تاریخ تولد استاد ارسال نشده است"),
      address: z
        .object({
          province: z.string("استان ارسال نشده است"),
          city: z.string("شهر ارسال نشده است"),
          route: z.string("نشانی محل سکونت ارسال نشده است"),
        })
        .optional(),
    }),
    departmentGroups: z.array(
      z.object({
        departmentGroupId: z.uuid("شناسه گروه آموزشی ارسال نشده است"),
      })
    ),
  }),
});

export type CreateTeacherSchema = z.infer<typeof CreateTeacherSchema>;
