import { Router, Request, Response, NextFunction } from "express";
import { roleWatch } from "../../../middlewares/index.js";
import { getCourseListController } from "../../../controller/course/teacher/controller.js";

const router = Router();

router.get(
  "/getCourseList",
  roleWatch(["TEACHER"]),
  async (req: Request, res: Response, next: NextFunction) => {
    await getCourseListController({ req, res, next });
  }
);

export default router;
