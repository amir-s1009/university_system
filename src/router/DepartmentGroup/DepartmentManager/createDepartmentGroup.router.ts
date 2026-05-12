import { Router, Request, Response, NextFunction } from "express";
import { roleWatch } from "../../../middlewares/index.js";
import { createDepartmentGroupService } from "../../../application/modules/departmentGroup/departmentManager/createDepartmentGroup.service.js";
import { getDepartmentManagerByUserIdRepo } from "../../../infrastructure/modules/departmentManager/getDepartmentManagerById.repo.js";
import { createDepartmentGroupRepo } from "../../../infrastructure/modules/departmentGroup/createDepartmentGroup.repo.js";

const router = Router();

router.post(
  "/createDepartmentGroup",
  roleWatch(["DEPARTMENT_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await createDepartmentGroupService({
        data: req.body,
        userId: req.userId!,
        getDepartmentManagerByUserIdRepo,
        createDepartmentGroupRepo,
      });

      res.status(result.code).json(result);
    } 
    catch(error) {
      next(error);
    }
  }
);

