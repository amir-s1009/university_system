import { Router, Request, Response, NextFunction } from "express";
import { roleWatch } from "../../../middlewares/index.js";

const router = Router();

router.get(
  "/getCourseList",
  roleWatch(["TEACHER"]),
  async (req: Request, res: Response, next: NextFunction) => {}
);

export default router;
