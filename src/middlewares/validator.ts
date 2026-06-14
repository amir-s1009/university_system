import { Request, Response, NextFunction } from "express";
import { ZodObject } from "zod";
import { response } from "../utils/response.js";
import { ValidationList } from "../core/enums.js";

export function validator(schema: ZodObject, validationList: ValidationList[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const body =
      !Object.keys(req.body || {}).length &&
      !validationList.includes(ValidationList.BODY)
        ? undefined
        : req.body;
    const params =
      !Object.keys(req.params).length &&
      !validationList.includes(ValidationList.PARAMS)
        ? undefined
        : req.params;
    const queries =
      !Object.keys(req.query).length &&
      !validationList.includes(ValidationList.QUERY)
        ? undefined
        : req.query;
    // console.log("> New Request Arrived: ");
    // console.log("params: ", params);
    // console.log("queries: ", queries);
    // console.log("body: ", body);
    // console.log("----------------------------------------------------");
    try {
      const result = schema.safeParse({
        body,
        params,
        queries,
      });
      if (!result.success) {
        const errors = result.error.issues;
        console.log(errors);
        const message =
          errors?.[0]?.message || "داده ارسال شده نا معتبر میباشد";
        response(res, {
          ok:false,
          code: 400,
          message: message,
        });
        return;
      }
      next();
    } catch {
      response(res, {
        ok:false,
        code: 500,
        message: "خطای سرور رخ داده است",
      });
      return;
    }
  };
}
