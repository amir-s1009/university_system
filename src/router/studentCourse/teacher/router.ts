import { Router, Request, Response, NextFunction } from "express";
import { roleWatch } from "../../../middlewares/index.js";


const router = Router();

router.put(
  "/changeStudentCourseStatus",
  roleWatch(["TEACHER"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);

router.put(
  "/editScore",
  roleWatch(["TEACHER"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);


router.get(
  "/getStudentCourseDetail",
  roleWatch(["TEACHER"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);


router.get(
  "/getStudentCourseList",
  roleWatch(["TEACHER"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);

export default router;