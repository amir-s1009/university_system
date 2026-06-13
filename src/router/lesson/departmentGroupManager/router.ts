import { NextFunction, Request, Response, Router } from "express";
import { roleWatch } from "../../../middlewares/index.js";
import { validator } from "../../../middlewares/validator.js";
import { CreateLessonSchema } from "../../../core/modules/lesson/schema/departmentGroupManager/createLesson.schema.js";
import { ValidationList } from "../../../core/enums.js";
import { EditLessonSchema } from "../../../core/modules/lesson/schema/departmentGroupManager/editLesson.schema.js";
import {
  createLessonController,
  deleteLessonController,
  editLessonController,
  getLessonDetailController,
  getLessonListController,
} from "../../../controller/lesson/departmentGroupManager/controller.js";

const router = Router();

router.post(
  "/createLesson",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  validator(CreateLessonSchema, [ValidationList.BODY]),
  async (req: Request, res: Response, next: NextFunction) => {
    await createLessonController({ req, res, next });
  }
);

router.delete(
  "/deleteLesson/:id",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {
    await deleteLessonController({ req, res, next });
  }
);

router.put(
  "/editLesson/:id",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  validator(EditLessonSchema, [ValidationList.BODY, ValidationList.PARAMS]),
  async (req: Request, res: Response, next: NextFunction) => {
    await editLessonController({ req, res, next });
  }
);

router.get(
  "/getLessonDetail/:id",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {
    await getLessonDetailController({ req, res, next });
  }
);

router.get(
  "/getLessonList",
  roleWatch(["DEPARTMENT_GROUP_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {
    await getLessonListController({ req, res, next });
  }
);

export default router;
