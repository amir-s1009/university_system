import { Router, Request, Response, NextFunction } from "express";
import { roleWatch } from "../../../middlewares/index.js";
import { validator } from "../../../middlewares/validator.js";
import { ChangeStudentStatusSchema } from "../../../core/modules/student/schema/departmentGroupManager/changeStudentStatus.schema.js";
import { ValidationList } from "../../../core/enums.js";
import { CreateStudentSchema } from "../../../core/modules/student/schema/departmentGroupManager/createStudent.schema.js";
import { EditStudentSchema } from "../../../core/modules/student/schema/departmentGroupManager/editStudent.schema.js";
import {
  changeStudentStatusController,
  createStudentController,
  editStudentController,
  getStudentDetailController,
  getStudentListController,
} from "../../../controller/student/departmentGroupManager/controller.js";

const router = Router();

router.put(
  "/changeStudentStatus",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  validator(ChangeStudentStatusSchema, [ValidationList.BODY]),
  async (req: Request, res: Response, next: NextFunction) => {
    await changeStudentStatusController({ req, res, next });
  }
);

router.get(
  "/createStudent",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  validator(CreateStudentSchema, [ValidationList.BODY]),
  async (req: Request, res: Response, next: NextFunction) => {
    await createStudentController({ req, res, next });
  }
);

router.put(
  "/editStudent/:id",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  validator(EditStudentSchema, [ValidationList.PARAMS, ValidationList.BODY]),
  async (req: Request, res: Response, next: NextFunction) => {
    await editStudentController({ req, res, next });
  }
);

router.get(
  "/getStudentDetail/:id",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {
    await getStudentDetailController({ req, res, next });
  }
);

router.get(
  "/getStudentList",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {
    await getStudentListController({ req, res, next });
  }
);

export default router;
