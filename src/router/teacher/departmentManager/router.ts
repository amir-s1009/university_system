import { Router, Request, Response, NextFunction } from "express";
import { roleWatch } from "../../../middlewares/index.js";
import { validator } from "../../../middlewares/validator.js";
import { CreateTeacherSchema } from "../../../core/modules/teacher/schema/departmentManager/createTeacher.schema.js";
import { ValidationList } from "../../../core/enums.js";
import { DeleteTeacherSchema } from "../../../core/modules/teacher/schema/departmentManager/deleteTeacher.schema.js";
import { EditTeacherSchema } from "../../../core/modules/teacher/schema/departmentManager/editTeacher.schema.js";

const router = Router();

router.post(
  "/createTeacher",
  roleWatch(["DEPARTMENT_MANAGER"]),
  validator(CreateTeacherSchema, [ValidationList.BODY]),
  async (req: Request, res: Response, next: NextFunction) => {}
);

router.delete(
  "/deleteTeacher/:id",
  roleWatch(["DEPARTMENT_MANAGER"]),
  validator(DeleteTeacherSchema, [ValidationList.PARAMS]),
  async (req: Request, res: Response, next: NextFunction) => {}
);

router.put(
  "/editTeacher",
  roleWatch(["DEPARTMENT_MANAGER"]),
  validator(EditTeacherSchema, [ValidationList.PARAMS, ValidationList.BODY]),
  async (req: Request, res: Response, next: NextFunction) => {}
);

router.get(
  "/getTeacherDetail/:id",
  roleWatch(["DEPARTMENT_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {}
);

router.get(
  "/getTeacherList",
  roleWatch(["DEPARTMENT_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {}
);

export default router;
