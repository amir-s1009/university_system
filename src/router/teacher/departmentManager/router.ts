import { Router, Request, Response, NextFunction } from "express";
import { roleWatch } from "../../../middlewares/index.js";
import { validator } from "../../../middlewares/validator.js";
import { CreateTeacherSchema } from "../../../core/modules/teacher/schema/departmentManager/createTeacher.schema.js";
import { ValidationList } from "../../../core/enums.js";
import { DeleteTeacherSchema } from "../../../core/modules/teacher/schema/departmentManager/deleteTeacher.schema.js";
import { EditTeacherSchema } from "../../../core/modules/teacher/schema/departmentManager/editTeacher.schema.js";
import {
  createTeacherController,
  deleteTeacherController,
  editTeacherController,
  getTeacherDetailController,
  getTeacherListController,
} from "../../../controller/teacher/departmentManager/controller.js";

const router = Router();

router.post(
  "/createTeacher",
  roleWatch(["DEPARTMENT_MANAGER"]),
  validator(CreateTeacherSchema, [ValidationList.BODY]),
  async (req: Request, res: Response, next: NextFunction) => {
    await createTeacherController({ req, res, next });
  }
);

router.delete(
  "/deleteTeacher/:id",
  roleWatch(["DEPARTMENT_MANAGER"]),
  validator(DeleteTeacherSchema, [ValidationList.PARAMS]),
  async (req: Request, res: Response, next: NextFunction) => {
    await deleteTeacherController({ req, res, next });
  }
);

router.put(
  "/editTeacher",
  roleWatch(["DEPARTMENT_MANAGER"]),
  validator(EditTeacherSchema, [ValidationList.PARAMS, ValidationList.BODY]),
  async (req: Request, res: Response, next: NextFunction) => {
    await editTeacherController({ req, res, next });
  }
);

router.get(
  "/getTeacherDetail/:id",
  roleWatch(["DEPARTMENT_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {
    await getTeacherDetailController({ req, res, next });
  }
);

router.get(
  "/getTeacherList",
  roleWatch(["DEPARTMENT_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {
    await getTeacherListController({ req, res, next });
  }
);

export default router;
