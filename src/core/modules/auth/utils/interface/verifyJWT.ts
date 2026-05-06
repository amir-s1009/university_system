import { TJWT } from "../../../../types.js";

export type VerifyJwt = ({
  token,
}: {
  token: string;
}) => Promise<TJWT | undefined>;
