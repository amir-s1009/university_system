import { TResponse } from "../core/types.js";
import { Response } from "express";

export function response<T>(
  res: Response,
  response: TResponse<T>
): Response<any, Record<string, any>> {
  return res.status(response.code).json(response);
}
