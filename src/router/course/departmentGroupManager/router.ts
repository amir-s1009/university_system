import { Router, Request, Response, NextFunction } from "express";
import { roleWatch } from "../../../middlewares/index.js";

const router = Router();


router.put(
  "/cancelCourse",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);


router.post(
  "/createCourse",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);


router.delete(
  "/deleteCourse",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);


router.put(
  "/editCourse",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);


router.get(
  "/getCourseDetail",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);

router.get(
  "/getCourseList",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);


export default router;