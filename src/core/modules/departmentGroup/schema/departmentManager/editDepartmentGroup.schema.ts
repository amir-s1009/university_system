import z from "zod";

export const EditDepartmentGroupSchema = z.object({
  body: z.object({
    title: z.string().min(3, "عنوان گروه آموزشی خیلی کوتاه است"),
    manager: z
      .object(
        {
          user: z.object({
            nationalCode: z.string().length(10, "طول شماره ملی غیر مجاز است"),
          }),
        },
        "اطلاعات کاربر به عنوان مدیر ارسال نشده است"
      )
      .optional(),
  }),
  params: z.object({
    id: z.uuid("شناسه گروه آموزشی ارسال نشده است"),
  }),
});

export type EditDepartmentGroupSchema = z.infer<
  typeof EditDepartmentGroupSchema
>;
