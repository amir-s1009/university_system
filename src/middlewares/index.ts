import { jwtVerify } from "jose";

import { Request, Response, NextFunction } from "express";
import { response } from "../utils/response.js";
import { TJWT } from "../core/types.js";
import { Role } from "@prisma/client";

const hackerMessages = [
  "ای بابا انگار شما کاربری نیستین که ادعا میکنین :(",
  "وای وای! تلاش غیرمجاز؟ دست از ماجراجویی بردار 😏",
  "خب خب، فکر کردی می‌تونی اینجا رو دور بزنی؟ نه عزیزم 😆",
  "هاها، کاربر ناشناس، تو باید دیگه ولش کنی 😎",
  "این مسیر ممنوعه‌ست، بازگشت به مبدا توصیه می‌شود 🚀",
  "Oops! فکر کردی می‌تونی sneak کنی؟ ما فهمیدیم 😏",
  "هه، تلاش جالب بود، ولی اینجا جا نداره 😜",
];

export function roleWatch(rolesAllowed: Role[]) {
  return async (
    req: Request & { userId?: string },
    res: Response,
    next: NextFunction
  ) => {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) {
      response(res, {
        ok: false,
        code: 401,
        message: "برای تکمیل درخواست ابتدا باید وارد سایت شوید",
      });
      return;
    }

    let envKey = undefined;
    try {
      envKey = process.env.ACCESS_TOKEN_KEY;
      if (!envKey) throw new Error();
    } catch {
      response(res, {
        ok: false,
        code: 500,
        message: "خطای سرور رخ داده است، لطفا با پشتیبانی تماس بگیرید",
      });
      return;
    }

    try {
      const secretKey = new TextEncoder().encode(envKey);
      const jwtPayload = (await jwtVerify(token, secretKey)).payload as TJWT;
      // allow all types of user roles if permision list is empty:
      if (!rolesAllowed.length) {
        req.userId = jwtPayload.id;
        return next();
      }
      if (!rolesAllowed.includes(jwtPayload.role)) {
        response(res, {
          ok: false,
          code: 403,
          message: "سطح کاربری شما مجوز دسترسی به این قسمت از سایت را ندارد",
        });
        return;
      }
      req.userId = jwtPayload.id;
      return next();
    } catch {
      response(res, {
        ok: false,
        code: 401,
        message: "برای تکمیل درخواست ابتدا باید وارد سایت شوید",
      });
      return;
    }
  };
}

// export function permWatch(allowedPerm: keyof typeof PERMISSION) {
//   return async (
//     req: Request & { userId?: string },
//     res: Response,
//     next: NextFunction
//   ) => {
//     // Authentication
//     const token = req.headers["authorization"]?.split(" ")[1];
//     if (!token) {
//       response(res, {
//         code: 401,
//         message: "برای تکمیل درخواست ابتدا باید وارد سایت شوید",
//       });
//       return;
//     }

//     let envKey = undefined;
//     try {
//       envKey = process.env.ACCESS_TOKEN_KEY;
//       if (!envKey) throw new Error();
//     } catch {
//       response(res, {
//         code: 500,
//         message: "خطای سرور رخ داده است، لطفا با پشتیبانی تماس بگیرید",
//       });
//       return;
//     }

//     // Authorization
//     try {
//       const secretKey = new TextEncoder().encode(envKey);
//       const jwtPayload = (await jwtVerify(token, secretKey)).payload as TJWT;
//       console.log(
//         jwtPayload.role,
//         " with id ",
//         jwtPayload.id,
//         " accessed ",
//         allowedPerm,
//         " on ",
//         new Date().toLocaleString("fa-IR")
//       );
//       const endUserInfoInDatabase = await getUserDetailRepo({
//         id: jwtPayload.id,
//       });
//       if (!endUserInfoInDatabase) {
//         response(res, {
//           code: 404,
//           message: "چنین کاربری در سیستم موجود نمیباشد",
//         });
//         return;
//       }
//       const roleDetails = await getRoleRepo({
//         id: endUserInfoInDatabase.roleId,
//       });
//       if (!roleDetails) {
//         response(res, {
//           code: 404,
//           message: "نقش کاربری یافت نشد",
//         });
//         return;
//       }
//       const endUserRolePermissions = (
//         await getPermissionsOfRoleRepo({ role: roleDetails.name as ROLE })
//       ).map((perm) => perm.name as keyof typeof PERMISSION);

//       if (
//         !endUserRolePermissions.some((perm) => jwtPayload.perms.includes(perm))
//       ) {
//         response(res, {
//           code: 403,
//           message: "لطفا برای استفاده از سیستم یک بار مجددا وارد سایت شوید",
//         });
//         return;
//       }
//       if (!jwtPayload.perms.includes(allowedPerm)) {
//         response(res, {
//           code: 403,
//           message: "سطح کاربری شما مجوز دسترسی به این قسمت از سایت را ندارد",
//         });
//         return;
//       }
//       if (endUserInfoInDatabase && roleDetails.name === jwtPayload.role) {
//         req.userId = jwtPayload.id;
//         return next();
//       }

//       const msg =
//         hackerMessages[Math.floor(Math.random() * hackerMessages.length)];
//       response(res, {
//         code: 400,
//         message: msg,
//       });
//       return;
//     } catch {
//       response(res, {
//         code: 401,
//         message: "برای تکمیل درخواست ابتدا باید وارد سایت شوید",
//       });
//       return;
//     }
//   };
// }
