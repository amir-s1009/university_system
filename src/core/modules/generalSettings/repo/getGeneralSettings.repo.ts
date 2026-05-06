import { TxClient } from "../../../../infrastructure/prisma.js";
import { GeneralSettingsEntity } from "../entity/GeneralSettings.entity.js";

export type GetGeneralSettingsRepo = (
  tx?: TxClient
) => Promise<GeneralSettingsEntity | null>;
