import z from "zod";

export const CreateClassRoomSchema = z.object({
  body: z.object({
    number: z.number("لطفا شماره کلاس را ارسال کنید"),
  }),
});

export type CreateClassRoomSchema = z.infer<typeof CreateClassRoomSchema>;
