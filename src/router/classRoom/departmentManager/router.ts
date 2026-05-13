import { Router, Request, Response, NextFunction } from "express";
import { roleWatch } from "../../../middlewares/index.js";

const router = Router();

router.post(
  "/createClassRoom",
  roleWatch(["DEPARTMENT_MANAGER"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);


router.delete(
  "/deleteClassRoom",
  roleWatch(["DEPARTMENT_MANAGER"]),
  async(req: Request, res: Response, next: NextFunction) => {}
);

router.get(
  "/getClassRoomList",
  roleWatch(["DEPARTMENT_MANAGER"]),
  async(req: Request, res: Response, next: NextFunction) => 
  {}
)

export default router;