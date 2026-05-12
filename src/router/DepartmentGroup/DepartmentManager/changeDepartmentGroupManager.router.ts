import { NextFunction, Router, Request, Response } from "express";
import { roleWatch } from "../../../middlewares/index.js";
import { changeDepartmentGroupManagerService } from "../../../application/modules/departmentGroup/departmentManager/changeDepartmentGroupManager.service.js";
import { getDepartmentGroupManagerByIdRepo } from "../../../infrastructure/modules/departmentGroupManager/getDepartmentGroupManagerById.repo.js";
import { editDepartmentGroupManagerRepo } from "../../../infrastructure/modules/departmentGroupManager/editDepartmentGroupManager.repo.js";
import { getDepartmentManagerByUserIdRepo } from "../../../infrastructure/modules/departmentManager/getDepartmentManagerById.repo.js";
import { getDepartmentGroupByIdRepo } from "../../../infrastructure/modules/departmentGroup/getDepartmentGroupById.repo.js";




const router = Router();

router.post(
  "/changeDepartmentGroupManager",
  roleWatch(["DEPARTMENT_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {
    try{
      const result = await changeDepartmentGroupManagerService({
        data: req,
        userId: req.userId!,
        editDepartmentGroupManagerRepo,
        getDepartmentGroupManagerByIdRepo,
        getDepartmentManagerByUserIdRepo,
        getDepartmentGroupByIdRepo
      });

      res.status(result.code).json(result);
    }
    catch(error) {
      next(error);
    }
  }
);

