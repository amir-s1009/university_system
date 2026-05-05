import { TxClient } from "../../../../infrastructure/prisma.js";
import { SemesterEntity } from "../entity/Semester.entity.js";

export type GetSemesterListRepo = (tx?: TxClient) => Promise<SemesterEntity[]>;
