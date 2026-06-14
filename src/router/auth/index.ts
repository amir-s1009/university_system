import { NextFunction, Request, Response, Router } from "express";
import { loginController } from "../../controller/auth/controller.js";
import { validator } from "../../middlewares/validator.js";
import { loginSchema } from "../../core/modules/auth/schema/login.schema.js";
import { ValidationList } from "../../core/enums.js";

const router = Router();

router.post(
  "/login",
  validator(loginSchema, [ValidationList.BODY]),
  async (req: Request, res: Response, next: NextFunction) => {
    await loginController({ req, res, next });
  }
);

export default router;
