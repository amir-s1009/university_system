import z from "zod";

export const EditTeacherSchema = z.object({
  body: z.object({
    user: z.object({
      firstName: z.string("نام استاد ارسال نشده است"),
      lastName: z.string("نام خانوادگی استاد ارسال نشده است"),
      fatherName: z.string("نام پدر استاد ارسال نشده است"),
      nationalCode: z
        .number("کد ملی استاد ارسال نشده است")
        .refine((v) => String(v).length === 10, "طول کد ملی غیر مجاز است"),
      zipCode: z
        .number()
        .optional()
        .refine((v) => (v ? String(v).length === 10 : true)),
      phoneNumber: z
        .number("شماره موبایل استاد ارسال نشده است")
        .refine((v) => String(v).length === 10, "طول شماره موبایل غیر مجاز است")
        .refine(
          (v) => String(v).slice(0, 2) === "09",
          "شماره موبایل باید با 09 آغاز شود"
        ),
      birthData: z.date("تاریخ تولد استاد ارسال نشده است"),
      address: z
        .object({
          province: z.string("استان ارسال نشده است"),
          city: z.string("شهر ارسال نشده است"),
          route: z.string("نشانی محل سکونت ارسال نشده است"),
        })
        .optional(),
    }),
    departmentGroups: z
      .array(
        z.object({
          departmentGroupId: z.uuid("شناسه گروه آموزشی ارسال نشده است"),
        })
      )
      .optional(),
  }),

  params: z.object({
    id: z.uuid("شناسه استاد ارسال نشده است"),
  }),
});

export type EditTeacherSchema = z.infer<typeof EditTeacherSchema>;
