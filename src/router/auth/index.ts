import { NextFunction, Request, Response, Router } from "express";
import { loginController } from "../../controller/auth/controller.js";

const router = Router();

router.post(
  "/auth/login",
  async (req: Request, res: Response, next: NextFunction) => {
    await loginController({ req, res, next });
  }
);

export default router;
