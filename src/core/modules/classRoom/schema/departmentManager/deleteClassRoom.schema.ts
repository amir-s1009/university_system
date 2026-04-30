import z from "zod";

export const DeleteClassRoomSchema = z.object({
  params: z.object({
    id: z.uuid("شناسه کلاس را ارسال نکرده اید"),
  }),
});

export type DeleteClassRoomSchema = z.infer<typeof DeleteClassRoomSchema>;
