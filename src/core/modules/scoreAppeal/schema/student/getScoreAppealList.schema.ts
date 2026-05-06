import z from "zod";

export const GetScoreAppealListSchema = z.object({
  queries: z.object({
    semesterId: z.uuid("شناسه نیمسال تحصیلی نامعتبر است").optional(),
  }),
});

export type GetScoreAppealListSchema = z.infer<typeof GetScoreAppealListSchema>;
