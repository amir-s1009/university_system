export type Response<T = undefined> = Promise<{
  code: number;
  message?: string;
  data?: T;
}>;
