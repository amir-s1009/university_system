import { NextFunction, Request, Response, Router } from "express";
import { roleWatch } from "../../../middlewares/index.js";

const router = Router();

router.get(
  "/getDepartmentGroupList",
  roleWatch(["TEACHER"]),
  async (req: Request, res: Response, next: NextFunction) => {}
);

export default router;
