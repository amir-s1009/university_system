import { Router, Request, Response, NextFunction } from "express";
import { roleWatch } from "../../../middlewares/index.js";
import { CancelCourseSchema } from "../../../core/modules/course/schema/departmentGroupManager/cancelCourse.schema.js";
import { ValidationList } from "../../../core/enums.js";
import { validator } from "../../../middlewares/validator.js";
import { CreateCourseSchema } from "../../../core/modules/course/schema/departmentGroupManager/createCourse.schema.js";
import { EditCourseSchema } from "../../../core/modules/course/schema/departmentGroupManager/editCourse.schema.js";
import {
  cancelCourseController,
  createCourseController,
  deleteCourseController,
  editCourseController,
  getCourseDetailController,
  getCourseListController,
} from "../../../controller/course/departmentGroupManager/controller.js";

const router = Router();

router.put(
  "/cancelCourse/:id",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  validator(CancelCourseSchema, [ValidationList.PARAMS]),
  async (req: Request, res: Response, next: NextFunction) => {
    await cancelCourseController({ req, res, next });
  }
);

router.post(
  "/createCourse",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  validator(CreateCourseSchema, [ValidationList.BODY]),
  async (req: Request, res: Response, next: NextFunction) => {
    await createCourseController({ req, res, next });
  }
);

router.delete(
  "/deleteCourse/:id",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {
    await deleteCourseController({ req, res, next });
  }
);

router.put(
  "/editCourse/:id",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  validator(EditCourseSchema, [ValidationList.BODY, ValidationList.PARAMS]),
  async (req: Request, res: Response, next: NextFunction) => {
    await editCourseController({ req, res, next });
  }
);

// check
router.get(
  "/getCourseDetail/:id",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {
    await getCourseDetailController({ req, res, next });
  }
);

router.get(
  "/getCourseList",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {
    await getCourseListController({ req, res, next });
  }
);

export default router;
