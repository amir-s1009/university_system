import { Router, Request, Response, NextFunction } from "express";
import { roleWatch } from "../../../middlewares/index.js";
import { validator } from "../../../middlewares/validator.js";
import { CreateStudentCourseSchema } from "../../../core/modules/studentCourse/schema/student/createStudentCourse.schema.js";
import { ValidationList } from "../../../core/enums.js";
import { GetStudentCourseListSchema } from "../../../core/modules/studentCourse/schema/student/getStudentCourseList.schema.js";
import {
  createStudentCourseController,
  getStudentCourseListController,
} from "../../../controller/studentCourse/student/controller.js";

const router = Router();

router.post(
  "/createStudentCourse",
  roleWatch(["STUDENT"]),
  validator(CreateStudentCourseSchema, [ValidationList.BODY]),
  async (req: Request, res: Response, next: NextFunction) => {
    await createStudentCourseController({ req, res, next });
  }
);

router.get(
  "/getStudentCourseList",
  roleWatch(["STUDENT"]),
  validator(GetStudentCourseListSchema, [ValidationList.QUERY]),
  async (req: Request, res: Response, next: NextFunction) => {
    await getStudentCourseListController({ req, res, next });
  }
);

export default router;
