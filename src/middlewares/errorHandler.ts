import { Request, Response, NextFunction } from "express";
import { AppError } from "../application/error.js";
import { response } from "../utils/response.js";

export function errorHandler(
  err: AppError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    response(res, {
      ok: false,
      code: err.statusCode,
      message: err.message,
      data: err.data,
    });
    return;
  }

  // ارور عمومی
  response(res, {
    ok: false,
    code: 500,
    message: err.message || "خطای سرور رخ داده است",
  });
  return;
}
