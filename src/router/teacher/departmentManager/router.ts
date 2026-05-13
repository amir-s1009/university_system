import { Router, Request, Response, NextFunction } from "express";
import { roleWatch } from "../../../middlewares/index.js";

const router = Router();

router.post(
  "/createTeacher",
  roleWatch(["DEPARTMENT_MANAGER"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);


router.delete(
  "/deleteTeacher",
  roleWatch(["DEPARTMENT_MANAGER"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);


router.put(
  "/editTeacher",
  roleWatch(["DEPARTMENT_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {}
);


router.get(
  "/getTeacherDetail",
  roleWatch(["DEPARTMENT_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {}
);

router.get(
  "/getTeacherList",
  roleWatch(["DEPARTMENT_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {}
);


export default router;