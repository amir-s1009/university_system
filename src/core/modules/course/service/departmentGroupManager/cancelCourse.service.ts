import { Response } from "../../../../response.js";
import { GetDepartmentGroupManagerByUserIdRepo } from "../../../departmentGroupManager/repo/getDepartmentGroupManagerByUserId.repo.js";
import { GetLessonByIdRepo } from "../../../lesson/repo/getLessonById.repo.js";
import { EditCourseRepo } from "../../repo/editCourse.repo.js";
import { GetCourseByIdRepo } from "../../repo/getCourseById.repo.js";

export type CancelCourseService = ({
  id,
  userId,
  editCourseRepo,
  getDepartmentGroupManagerByUserIdRepo,
  getCourseByIdRepo,
  getLessonByIdRepo,
}: {
  id: string;
  userId: string;
  editCourseRepo: EditCourseRepo;
  getDepartmentGroupManagerByUserIdRepo: GetDepartmentGroupManagerByUserIdRepo;
  getCourseByIdRepo: GetCourseByIdRepo;
  getLessonByIdRepo: GetLessonByIdRepo;
}) => Response;
