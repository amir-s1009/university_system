export type VerifyHash = ({
  hashed,
  raw,
}: {
  raw: string;
  hashed: string;
}) => Promise<boolean>;
