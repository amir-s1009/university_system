import { NextFunction, Request, Response, Router } from "express";
import { roleWatch } from "../../../middlewares/index.js";

const router = Router();


router.post(
  "/createLesson",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);


router.delete(
  "/deleteLesson",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);


router.put(
  "/editLesson",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);


router.get(
  "/getLessonDetail",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);


router.get(
  "/getLessonList",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);

export default router;