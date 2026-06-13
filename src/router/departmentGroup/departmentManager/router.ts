import { NextFunction, Request, Response, Router } from "express";
import { roleWatch } from "../../../middlewares/index.js";
import { validator } from "../../../middlewares/validator.js";
import { EditDepartmentGroupSchema } from "../../../core/modules/departmentGroup/schema/departmentManager/editDepartmentGroup.schema.js";
import { ValidationList } from "../../../core/enums.js";
import { CreateDepartmentGroupSchema } from "../../../core/modules/departmentGroup/schema/departmentManager/createDepartmentGroup.schema.js";
import { ChangeDepartmentGroupManagerSchema } from "../../../core/modules/departmentGroup/schema/departmentManager/changeDepartmentGroupManager.schema.js";
import {
  changeDepartmentGroupManagerController,
  createDepartmentGroupController,
  editDepartmentGroupController,
  getDepartmentGroupDetailController,
  getDepartmentGroupListController,
} from "../../../controller/departmentGroup/departmentManager/controller.js";

const router = Router();

router.get(
  "/getDepartmentGroupList",
  roleWatch(["DEPARTMENT_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {
    await getDepartmentGroupListController({ req, res, next });
  }
);

router.get(
  "/getDepartmentGroupDetail/:id",
  roleWatch(["DEPARTMENT_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {
    await getDepartmentGroupDetailController({ req, res, next });
  }
);

router.put(
  "/editDepartmentGroup/:id",
  roleWatch(["DEPARTMENT_MANAGER"]),
  validator(EditDepartmentGroupSchema, [
    ValidationList.PARAMS,
    ValidationList.BODY,
  ]),
  async (req: Request, res: Response, next: NextFunction) => {
    await editDepartmentGroupController({ req, res, next });
  }
);

router.post(
  "/createDepartmentGroup",
  roleWatch(["DEPARTMENT_MANAGER"]),
  validator(CreateDepartmentGroupSchema, [ValidationList.BODY]),
  async (req: Request, res: Response, next: NextFunction) => {
    await createDepartmentGroupController({ req, res, next });
  }
);

router.put(
  "/changeDepartmentGroupManager",
  roleWatch(["DEPARTMENT_MANAGER"]),
  validator(ChangeDepartmentGroupManagerSchema, [ValidationList.BODY]),
  async (req: Request, res: Response, next: NextFunction) => {
    await changeDepartmentGroupManagerController({ req, res, next });
  }
);

export default router;
