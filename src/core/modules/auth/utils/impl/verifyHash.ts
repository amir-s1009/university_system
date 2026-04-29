import { VerifyHash } from "../interface/verifyHash.js";
import bcrypt from "bcrypt";

export const verifyHash: VerifyHash = async ({ raw, hashed }) => {
  return await bcrypt.compare(raw, hashed);
};
