import bcrypt from "bcrypt";
import { Hash } from "../interface/hash.js";

export const hash: Hash = async ({ raw, salt }) => {
  return await bcrypt.hash(raw, salt);
};
