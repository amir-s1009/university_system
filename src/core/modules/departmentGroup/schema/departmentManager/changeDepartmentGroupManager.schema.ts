import z from "zod";

export const ChangeDepartmentGroupManagerSchema = z.object({
  body: z.object({
    departmentGroupManagerId: z.uuid("شناسه مدیر گروه آموزشی ارسال نشده است"),
    userId: z.uuid("شناسه کاربر مورد نظر برای مدیریت جدید ارسال نشده است"),
  }),
});

export type ChangeDepartmentGroupManagerSchema = z.infer<
  typeof ChangeDepartmentGroupManagerSchema
>;
