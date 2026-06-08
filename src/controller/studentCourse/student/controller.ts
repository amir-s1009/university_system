import { createStudentCourseService } from "../../../application/modules/studentCourse/student/createStudentCourse.service.js"
import { getStudentCourseListService } from "../../../application/modules/studentCourse/teacher/getStudentCourseList.service.js"
import { TControllerProps } from "../../../core/types.js"
import { getCourseByIdRepo } from "../../../infrastructure/modules/course/getCourseById.repo.js"
import { getGeneralSettingsRepo } from "../../../infrastructure/modules/generalSettings/getGeneralSettings.repo.js"
import { getLessonPrerequisitesRepo } from "../../../infrastructure/modules/lesson/getLessonPrerequisites.repo.js"
import { getSemesterCalanderRepo } from "../../../infrastructure/modules/semesterCalander/getSemesterCalander.repo.js"
import { getStudentByUserIdRepo } from "../../../infrastructure/modules/student/getStudentByUserId.repo.js"
import { createStudentCourseRepo } from "../../../infrastructure/modules/studentCourse/createStudentCourse.repo.js"
import { getStudentAlreadyTakenCoursesRepo } from "../../../infrastructure/modules/studentCourse/getStudentAlreadyTakenCourses.repo.js"
import { getStudentCourseListRepo } from "../../../infrastructure/modules/studentCourse/teacher/getStudentCourseList.repo.js"
import { getTeacherByUserIdRepo } from "../../../infrastructure/modules/teacher/getTeacherByUserId.repo.js"
import { response } from "../../../utils/response.js"

export const createStudentCourseController = async ({ req, res, next }: TControllerProps) => {
  try{
    const result = await createStudentCourseService({
      data: {
        body: req.body,
      },
      userId: req.userId!,
      createStudentCourseRepo,
      getCourseByIdRepo,
      getGeneralSettingsRepo,
      getLessonPrerequisitesRepo,
      getSemesterCalanderRepo,
      getStudentAlreadyTakenCoursesRepo,
      getStudentByUserIdRepo,
    })
    return response(res, result);
  } catch (err) {
    return next(err);
  }
};


export const getStudentCourseListController = async ({ req, res, next }: TControllerProps) => {
  try{
    const result = await getStudentCourseListService({
      data: {
        queries: req.query as { courseId: string}
      },
      userId: req.userId!,
      getStudentCourseListRepo,
      getTeacherByUserIdRepo
    })
    return response(res, result);
  } catch (err) {
    return next(err);
  }
};


