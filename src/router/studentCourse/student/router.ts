import { Router, Request, Response, NextFunction } from "express";
import { roleWatch } from "../../../middlewares/index.js";

const router = Router();

router.post(
  "/createStudentCourse",
  roleWatch(["STUDENT"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);


router.get(
  "/getStudentCourseList",
  roleWatch(["STUDENT"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);


export default router;