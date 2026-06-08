import { changeStudentCourseStatusService } from "../../../application/modules/studentCourse/teacher/changeStudentCourseStatus.service.js"
import { editScoreService } from "../../../application/modules/studentCourse/teacher/editScore.service.js";
import { getStudentCourseDetailService } from "../../../application/modules/studentCourse/teacher/getStudentCourseDetail.service.js";
import { getStudentCourseListService } from "../../../application/modules/studentCourse/teacher/getStudentCourseList.service.js";
import { TControllerProps } from "../../../core/types.js";
import { getCourseByIdRepo } from "../../../infrastructure/modules/course/getCourseById.repo.js";
import { editStudentCourseRepo } from "../../../infrastructure/modules/studentCourse/editStudentCourse.repo.js";
import { getStudentCourseByIdRepo } from "../../../infrastructure/modules/studentCourse/getStudentCourseById.repo.js";
import { getStudentCourseDetailRepo } from "../../../infrastructure/modules/studentCourse/teacher/getStudentCourseDetail.repo.js";
import { getStudentCourseListRepo } from "../../../infrastructure/modules/studentCourse/teacher/getStudentCourseList.repo.js";
import { getTeacherByUserIdRepo } from "../../../infrastructure/modules/teacher/getTeacherByUserId.repo.js";
import { response } from "../../../utils/response.js";

export const changeStudentCourseStatusController = async ({ req, res, next }: TControllerProps) => {
  try{
    const result = await changeStudentCourseStatusService({
    data: {
      body: req.body,
    },
    userId: req.userId!,
    editStudentCourseRepo,
    getCourseByIdRepo,
    getStudentCourseByIdRepo,
    getTeacherByUserIdRepo
    });
    
    return response(res, result);
  } catch (err) {
    return next(err);
  }
};



export const editScoreController = async ({ req, res, next }: TControllerProps) => {
  try{
    const result = await editScoreService({
    data: {
      body: req.body,
    },
    userId: req.userId!,
    editStudentCourseRepo,
    getCourseByIdRepo,
    getStudentCourseByIdRepo,
    getTeacherByUserIdRepo,    
    });
    
    return response(res, result);
  } catch (err) {
    return next(err);
  }
};



export const getStudentCourseDetailController = async ({ req, res, next }: TControllerProps) => {
  try{
    const result = await getStudentCourseDetailService({
    id: req.params.id,
    userId: req.userId!,
    getTeacherByUserIdRepo,
    getStudentCourseDetailRepo
    });
    
    return response(res, result);
  } catch (err) {
    return next(err);
  }
};


export const getStudentCourseListController = async ({ req, res, next }: TControllerProps) => {
  try{
    const result = await getStudentCourseListService({
    data: {
      queries: req.query as { courseId: string }
    },
    userId: req.userId!,
    getTeacherByUserIdRepo,
    getStudentCourseListRepo
    });
    
    return response(res, result);
  } catch (err) {
    return next(err);
  }
};



