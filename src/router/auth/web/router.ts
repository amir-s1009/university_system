import { NextFunction, Router } from "express";
import { Request, Response } from "express";
import { ValidationList } from "../../../core/enums.js";
import { validator } from "../../../middlewares/validator.js";
import { permWatch } from "../../../middlewares/index.js";
import {
  editUserInfoController,
  getUserInfoController,
} from "../../../controller/user/web/user.js";
import { editUserInfoSchema } from "../../../core/modules/auth/schema/web/editUserInfo.schema.js";
import { loginSchema } from "../../../core/modules/auth/schema/web/login.schema.js";
import {
  loginController,
  refreshTokenController,
  signupController,
  verifyEmailController,
} from "../../../controller/auth/web/auth.js";
import { signupSchema } from "../../../core/modules/auth/schema/web/signup.schema.js";
import { verifySchema } from "../../../core/modules/auth/schema/web/verify.schema.js";
import { refreshTokenSchema } from "../../../core/modules/auth/schema/web/refreshToken.schema.js";

const router = Router();

router.post(
  "/login",
  validator(loginSchema, [ValidationList.BODY]),
  async (req: Request, res: Response, next) => {
    await loginController({ req, res, next });
  }
);

router.post(
  "/signup",
  validator(signupSchema, [ValidationList.BODY]),
  async (req: Request, res: Response, next) => {
    await signupController({ req, res, next });
  }
);

router.post(
  "/verify",
  validator(verifySchema, [ValidationList.BODY]),
  async (req: Request, res: Response, next) => {
    await verifyEmailController({ req, res, next });
  }
);

router.post(
  "/refreshToken",
  validator(refreshTokenSchema, [ValidationList.BODY]),
  async (req: Request, res: Response, next) => {
    await refreshTokenController({ req, res, next });
  }
);

router.get(
  "/getUserInfo",
  permWatch("GET_USER_INFO"),
  async (req: Request, res: Response, next: NextFunction) => {
    await getUserInfoController({ req, res, next });
  }
);

router.put(
  "/editUserInfo",
  permWatch("EDIT_USER_INFO"),
  validator(editUserInfoSchema, [ValidationList.BODY]),
  async (req: Request, res: Response, next) => {
    await editUserInfoController({ req, res, next });
  }
);

export default router;
