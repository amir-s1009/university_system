import {Router, Request, Response, NextFunction} from "express";
import { roleWatch } from "../../../middlewares/index.js";


const router = Router();

router.put(
  "/changeStudentStatus",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);


router.get(
  "/createStudent",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);


router.put(
  "/editStudent",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);


router.get(
  "/getStudentDetail",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);


router.get(
  "/getStudentList",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);
