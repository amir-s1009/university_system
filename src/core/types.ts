import { Role } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import z from "zod";

export type TMeta = {
  page: number;
  totalPages: number;
  itemsCount: number;
};

export type TResponse<T> = {
  code: number;
  message?: string;
  data?: T;
  meta?: TMeta;
};

export type TControllerProps = {
  req: Request & { userId?: string };
  res: Response;
  next: NextFunction;
};

export type TJWT = {
  id: string;
  role: Role;
};

export type TPagination = {
  page: number;
  limit: number;
};

export enum MEDIA_TYPE {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  OTHER = "OTHER",
}

export enum CONTENT_TYPE {
  TEXT = "TEXT",
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
}

export const FileSchema = z.object({
  key: z.string("کلید فایل ارسال نشده است"),
  bucket: z.string("اسم باکت ارسال نشده است"),
  url: z.url("url فایل ارسال نشده است"),
  type: z.enum(MEDIA_TYPE, "نوع مدیا ارسال شده نامعتبر است"),
});

export type TFile = z.infer<typeof FileSchema>;
