import { NextFunction, Request, Response, Router } from "express";
import { roleWatch } from "../../../middlewares/index.js";

const router = Router();

router.get(
  "/getDepartmentGroupList",
  roleWatch(["DEPARTMENT_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {}
);

router.get(
  "/getDepartmentGroupDetail/:id",
  roleWatch(["DEPARTMENT_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {}
);

router.put(
  "/editDepartmentGroup/:id",
  roleWatch(["DEPARTMENT_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {}
);

router.post(
  "/createDepartmentGroup",
  roleWatch(["DEPARTMENT_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {}
);

router.put(
  "/changeDepartmentGroupManager",
  roleWatch(["DEPARTMENT_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {}
);

export default router;
