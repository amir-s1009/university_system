import { Response } from "../../../../response.js";
import { GetCourseByIdRepo } from "../../../course/repo/getCourseById.repo.js";
import { GetGeneralSettingsRepo } from "../../../generalSettings/repo/getGeneralSettings.repo.js";
import { GetLessonPrerequisitesRepo } from "../../../lesson/repo/getLessonPrerequisites.repo.js";
import { GetSemesterCalanderRepo } from "../../../semesterCalander/repo/getSemesterCalander.repo.js";
import { GetStudentByUserIdRepo } from "../../../student/repo/getStudentByUserId.repo.js";
import { CreateStudentCourseRepo } from "../../repo/createStudentCourse.repo.js";
import { GetStudentAlreadyTakenCoursesRepo } from "../../repo/getStudentAlreadyTakenCourses.repo.js";
import { CreateStudentCourseSchema } from "../../schema/student/createStudentCourse.schema.js";

export type CreateStudentCourseService = ({
  data,
  userId,
  createStudentCourseRepo,
  getStudentByUserIdRepo,
  getSemesterCalanderRepo,
  getLessonPrerequisitesRepo,
  getStudentAlreadyTakenCoursesRepo,
  getCourseByIdRepo,
  getGeneralSettingsRepo,
}: {
  data: CreateStudentCourseSchema;
  userId: string;
  createStudentCourseRepo: CreateStudentCourseRepo;
  getStudentByUserIdRepo: GetStudentByUserIdRepo;
  getSemesterCalanderRepo: GetSemesterCalanderRepo;
  getLessonPrerequisitesRepo: GetLessonPrerequisitesRepo;
  getStudentAlreadyTakenCoursesRepo: GetStudentAlreadyTakenCoursesRepo;
  getCourseByIdRepo: GetCourseByIdRepo;
  getGeneralSettingsRepo: GetGeneralSettingsRepo;
}) => Response;
