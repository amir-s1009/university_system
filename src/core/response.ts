export type Response<T = undefined> = Promise<{
  ok:boolean;
  code: number;
  message?: string;
  data?: T;
}>;
