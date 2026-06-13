import { NextFunction, Request, Response, Router } from "express";
import { roleWatch } from "../../../middlewares/index.js";
import { getDepartmentGroupListController } from "../../../controller/departmentGroup/departmentManager/controller.js";

const router = Router();

router.get(
  "/getDepartmentGroupList",
  roleWatch(["TEACHER"]),
  async (req: Request, res: Response, next: NextFunction) => {
    await getDepartmentGroupListController({ req, res, next });
  }
);

export default router;
