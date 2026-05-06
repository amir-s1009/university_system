import z from "zod";

export const DeleteTeacherSchema = z.object({
  params: z.object({
    id: z.uuid("شناسه استاد ارسال نشده است"),
  }),
});
