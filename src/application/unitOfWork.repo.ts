import { TxClient } from "../infrastructure/prisma.js";

export type UnitOfWorkRepo = <T>(
  atomicProcedure: (tx: TxClient) => Promise<T>
) => Promise<T>;
