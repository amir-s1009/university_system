export type Hash = ({
  raw,
  salt,
}: {
  raw: string;
  salt: number;
}) => Promise<string>;
