import { Router, Request, Response, NextFunction } from "express";
import { roleWatch } from "../../../middlewares/index.js";
import { validator } from "../../../middlewares/validator.js";
import { ChangeStudentCourseStatusSchema } from "../../../core/modules/studentCourse/schema/teacher/changeStudentCourseStatus.schema.js";
import { ValidationList } from "../../../core/enums.js";
import { EditScoreSchema } from "../../../core/modules/studentCourse/schema/teacher/editScore.schema.js";
import { GetStudentCourseDetailSchema } from "../../../core/modules/studentCourse/schema/teacher/getStudentCourseDetail.schema.js";
import {
  changeStudentCourseStatusController,
  editScoreController,
  getStudentCourseDetailController,
} from "../../../controller/studentCourse/teacher/controller.js";
import { getStudentCourseListController } from "../../../controller/studentCourse/teacher/controller.js";

const router = Router();

router.put(
  "/changeStudentCourseStatus",
  roleWatch(["TEACHER"]),
  validator(ChangeStudentCourseStatusSchema, [ValidationList.BODY]),
  async (req: Request, res: Response, next: NextFunction) => {
    await changeStudentCourseStatusController({ req, res, next });
  }
);

router.put(
  "/editScore",
  roleWatch(["TEACHER"]),
  validator(EditScoreSchema, [ValidationList.BODY]),
  async (req: Request, res: Response, next: NextFunction) => {
    await editScoreController({ req, res, next });
  }
);

router.get(
  "/getStudentCourseDetail/:id",
  roleWatch(["TEACHER"]),
  validator(GetStudentCourseDetailSchema, [ValidationList.PARAMS]),
  async (req: Request, res: Response, next: NextFunction) => {
    await getStudentCourseDetailController({ req, res, next });
  }
);

router.get(
  "/getStudentCourseList",
  roleWatch(["TEACHER"]),
  async (req: Request, res: Response, next: NextFunction) => {
    await getStudentCourseListController({ req, res, next });
  }
);

export default router;
