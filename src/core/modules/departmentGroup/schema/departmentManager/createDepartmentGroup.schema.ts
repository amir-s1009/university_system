import z from "zod";

export const CreateDepartmentGroupSchema = z.object({
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
});

export type CreateDepartmentGroupSchema = z.infer<
  typeof CreateDepartmentGroupSchema
>;
