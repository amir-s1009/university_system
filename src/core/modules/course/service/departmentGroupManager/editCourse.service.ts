import { UnitOfWorkRepo } from "../../../../../application/unitOfWork.repo.js";
import { Response } from "../../../../response.js";
import { CreateCourseTimeRepo } from "../../../courseTime/repo/createCourseTime.repo.js";
import { DeleteCourseTimeRepo } from "../../../courseTime/repo/deleteCourseTime.repo.js";
import { EditCourseTimeRepo } from "../../../courseTime/repo/editCourseTime.repo.js";
import { GetCourseTimeListByCourseIdRepo } from "../../../courseTime/repo/getCourseTimeListByCourseId.repo.js";
import { GetDepartmentGroupManagerByUserIdRepo } from "../../../departmentGroupManager/repo/getDepartmentGroupManagerByUserId.repo.js";
import { GetLessonByIdRepo } from "../../../lesson/repo/getLessonById.repo.js";
import { EditCourseRepo } from "../../repo/editCourse.repo.js";
import { GetCourseByIdRepo } from "../../repo/getCourseById.repo.js";
import { EditCourseSchema } from "../../schema/departmentGroupManager/editCourse.schema.js";

export type EditCourseService = ({
  data,
  userId,
  editCourseRepo,
  editCourseTimeRepo,
  getCourseByIdRepo,
  getCourseTimeListByCourseIdRepo,
  deleteCourseTimeRepo,
  createCourseTimeRepo,
  getDepartmentGroupManagerByUserIdRepo,
  getLessonByIdRepo,
  unitOfWorkRepo,
}: {
  data: EditCourseSchema;
  userId: string;
  editCourseRepo: EditCourseRepo;
  editCourseTimeRepo: EditCourseTimeRepo;
  getCourseByIdRepo: GetCourseByIdRepo;
  getCourseTimeListByCourseIdRepo: GetCourseTimeListByCourseIdRepo;
  deleteCourseTimeRepo: DeleteCourseTimeRepo;
  createCourseTimeRepo: CreateCourseTimeRepo;
  getDepartmentGroupManagerByUserIdRepo: GetDepartmentGroupManagerByUserIdRepo;
  getLessonByIdRepo: GetLessonByIdRepo;
  unitOfWorkRepo: UnitOfWorkRepo;
}) => Response;
