import { Router } from "express";
import { Request, Response } from "express";
import { ValidationList } from "../../../core/enums.js";
import { validator } from "../../../middlewares/validator.js";
import { permWatch } from "../../../middlewares/index.js";
import { getRoleListController } from "../../../controller/role/cms/role.js";
import {
  editUserInfoController,
  getUserInfoController,
} from "../../../controller/user/cms/user.js";
import { editUserInfoSchema } from "../../../core/modules/auth/schema/cms/editUserInfo.schema.js";
import { loginSchema } from "../../../core/modules/auth/schema/cms/login.schema.js";
import {
  loginController,
  refreshTokenController,
} from "../../../controller/auth/cms/auth.js";
import { refreshTokenSchema } from "../../../core/modules/auth/schema/cms/refreshToken.schema.js";

const router = Router();

router.post(
  "/login",
  validator(loginSchema, [ValidationList.BODY]),
  async (req: Request, res: Response, next) => {
    await loginController({ req, res, next });
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
  "/getRoleList",
  permWatch("GET_ROLE_LIST"),
  async (req: Request, res: Response, next) => {
    await getRoleListController({ req, res, next });
  }
);

router.get(
  "/getUserInfo",
  permWatch("GET_USER_INFO"),
  async (req: Request, res: Response, next) => {
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
