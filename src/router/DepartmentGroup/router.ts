import { NextFunction, Request, Response, Router } from "express";
import { roleWatch } from "../../middlewares/index.js";
import { validator } from "../../middlewares/validator.js";
import { CreateDepartmentGroupSchema } from "../../core/modules/departmentGroup/schema/departmentManager/createDepartmentGroup.schema.js";
import { ValidationList } from "../../core/enums.js";

const router = Router();

router.get(
  "/getGroupList",
  roleWatch(["DEPARTMENT_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {}
);
