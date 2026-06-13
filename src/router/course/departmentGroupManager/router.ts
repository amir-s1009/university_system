import { Router, Request, Response, NextFunction } from "express";
import { roleWatch } from "../../../middlewares/index.js";
import { CancelCourseSchema } from "../../../core/modules/course/schema/departmentGroupManager/cancelCourse.schema.js";
import { ValidationList } from "../../../core/enums.js";
import { validator } from "../../../middlewares/validator.js";
import { CreateCourseSchema } from "../../../core/modules/course/schema/departmentGroupManager/createCourse.schema.js";
import { EditCourseSchema } from "../../../core/modules/course/schema/departmentGroupManager/editCourse.schema.js";

const router = Router();

router.put(
  "/cancelCourse/:id",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  validator(CancelCourseSchema, [ValidationList.PARAMS]),
  async (req: Request, res: Response, next: NextFunction) => {}
);

router.post(
  "/createCourse",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  validator(CreateCourseSchema, [ValidationList.BODY]),
  async (req: Request, res: Response, next: NextFunction) => {}
);

// check
router.delete(
  "/deleteCourse",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {}
);

router.put(
  "/editCourse",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  validator(EditCourseSchema, [ValidationList.BODY, ValidationList.PARAMS]),
  async (req: Request, res: Response, next: NextFunction) => {}
);

// check
router.get(
  "/getCourseDetail",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {}
);

router.get(
  "/getCourseList",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {}
);

export default router;
