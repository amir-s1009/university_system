import { Response } from "../../../../response.js";
import { GetDepartmentGroupManagerByIdRepo } from "../../../departmentGroupManager/repo/getDepartmentGroupManagerById.repo.js";
import { GetDepartmentGroupManagerByUserIdRepo } from "../../../departmentGroupManager/repo/getDepartmentGroupManagerByUserId.repo.js";
import { GetLessonByIdRepo } from "../../../lesson/repo/getLessonById.repo.js";
import { DeleteCourseRepo } from "../../repo/deleteCourse.repo.js";
import { GetCourseByIdRepo } from "../../repo/getCourseById.repo.js";

export type DeleteCourseService = ({
  id,
  userId,
  deleteCourseRepo,
  getCourseByIdRepo,
  getDepartmentGroupManagerByUserIdRepo,
  getLessonByIdRepo,
}: {
  id: string;
  userId: string;
  deleteCourseRepo: DeleteCourseRepo;
  getCourseByIdRepo: GetCourseByIdRepo;
  getLessonByIdRepo: GetLessonByIdRepo;
  getDepartmentGroupManagerByUserIdRepo: GetDepartmentGroupManagerByUserIdRepo;
}) => Response;
