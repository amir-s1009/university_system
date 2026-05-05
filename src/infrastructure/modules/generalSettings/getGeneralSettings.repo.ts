import { GetGeneralSettingsRepo } from "../../../core/modules/generalSettings/repo/getGeneralSettings.repo.js";
import prisma from "../../prisma.js";

export const getGeneralSettingsRepo: GetGeneralSettingsRepo = async (tx) => {
  const db = tx ?? prisma;

  return await db.generalSettings.findFirst();
};
