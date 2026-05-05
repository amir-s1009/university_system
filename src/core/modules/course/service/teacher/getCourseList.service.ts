import { Response } from "../../../../response.js";
import { GetTeacherByUserIdRepo } from "../../../teacher/repo/getTeacherByUserId.repo.js";
import { CourseListItemDTO } from "../../dto/teacher/courseListItem.dto.js";
import { GetCourseListRepo } from "../../repo/teacher/getCourseList.repo.js";
import { GetCourseListSchema } from "../../schema/teacher/getCourseList.schema.js";

export type GetCourseListService = ({
  userId,
  data,
  getCourseListRepo,
  getTeacherByUserIdRepo,
}: {
  userId: string;
  data: GetCourseListSchema;
  getCourseListRepo: GetCourseListRepo;
  getTeacherByUserIdRepo: GetTeacherByUserIdRepo;
}) => Response<CourseListItemDTO[]>;
