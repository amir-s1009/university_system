import { cancelCourseService } from "../../../application/modules/course/departmentGroupManager/cancelCourse.service.js";
import { createCourseService } from "../../../application/modules/course/departmentGroupManager/createCourse.service.js";
import { deleteCourseService } from "../../../application/modules/course/departmentGroupManager/deleteCourse.service.js";
import { editCourseService } from "../../../application/modules/course/departmentGroupManager/editCourse.service.js";
import { getCourseDetailService } from "../../../application/modules/course/departmentGroupManager/getCourseDetail.service.js";
import { getCourseListService } from "../../../application/modules/course/departmentGroupManager/getCourseList.service.js";
import { EditCourseSchema } from "../../../core/modules/course/schema/departmentGroupManager/editCourse.schema.js";
import { TControllerProps } from "../../../core/types.js";
import { createCourseRepo } from "../../../infrastructure/modules/course/createCourse.repo.js";
import { deleteCourseRepo } from "../../../infrastructure/modules/course/deleteCourse.repo.js";
import { getCourseDetailRepo } from "../../../infrastructure/modules/course/departmentGroupManager/getCourseDetail.repo.js";
import { getCourseListRepo } from "../../../infrastructure/modules/course/departmentGroupManager/getCourseList.repo.js";
import { editCourseRepo } from "../../../infrastructure/modules/course/editCourse.repo.js";
import { getCourseByIdRepo } from "../../../infrastructure/modules/course/getCourseById.repo.js";
import { createCourseTimeRepo } from "../../../infrastructure/modules/courseTime/createCourseTime.repo.js";
import { deleteCourseTimeRepo } from "../../../infrastructure/modules/courseTime/deleteCourseTime.repo.js";
import { editCourseTimeRepo } from "../../../infrastructure/modules/courseTime/editCourseTime.repo.js";
import { getCourseTimeListByCourseIdRepo } from "../../../infrastructure/modules/courseTime/getCourseTimeListByCourseId.repo.js";
import { getDepartmentGroupManagerByUserIdRepo } from "../../../infrastructure/modules/departmentGroupManager/getDepartmentGroupManagerByUserId.repo.js";
import { getGeneralSettingsRepo } from "../../../infrastructure/modules/generalSettings/getGeneralSettings.repo.js";
import { getLessonByIdRepo } from "../../../infrastructure/modules/lesson/getLessonById.repo.js";
import { unitOfWorkRepo } from "../../../infrastructure/unitOfWork.repo.js";
import { response } from "../../../utils/response.js";

export const cancelCourseController = async ({
  req,
  res,
  next,
}: TControllerProps) => {
  try {
    const result = await cancelCourseService({
      userId: req.userId!,
      id: req.params.id,
      editCourseRepo,
      getCourseByIdRepo,
      getDepartmentGroupManagerByUserIdRepo,
      getLessonByIdRepo,
    });

    return response(res, result);
  } catch (err) {
    return next(err);
  }
};

export const createCourseController = async ({
  req,
  res,
  next,
}: TControllerProps) => {
  try {
    const result = await createCourseService({
      data: {
        body: req.body,
      },
      userId: req.userId!,
      createCourseRepo,
      getDepartmentGroupManagerByUserIdRepo,
      getGeneralSettingsRepo,
      getLessonByIdRepo,
    });

    return response(res, result);
  } catch (err) {
    return next(err);
  }
};

export const deleteCourseController = async ({
  req,
  res,
  next,
}: TControllerProps) => {
  try {
    const result = await deleteCourseService({
      id: req.params.id,
      userId: req.userId!,
      deleteCourseRepo,
      getCourseByIdRepo,
      getDepartmentGroupManagerByUserIdRepo,
      getLessonByIdRepo,
    });

    return response(res, result);
  } catch (err) {
    return next(err);
  }
};

export const editCourseController = async ({
  req,
  res,
  next,
}: TControllerProps) => {
  const body = req.body as EditCourseSchema["body"];
  const params = req.params as EditCourseSchema["params"];
  try {
    const result = await editCourseService({
      data: {
        body,
        params: params,
      },
      userId: req.userId!,
      createCourseTimeRepo,
      deleteCourseTimeRepo,
      editCourseRepo,
      editCourseTimeRepo,
      getCourseTimeListByCourseIdRepo,
      unitOfWorkRepo,
      getCourseByIdRepo,
      getDepartmentGroupManagerByUserIdRepo,
      getLessonByIdRepo,
    });

    return response(res, result);
  } catch (err) {
    return next(err);
  }
};

export const getCourseDetailController = async ({
  req,
  res,
  next,
}: TControllerProps) => {
  try {
    const result = await getCourseDetailService({
      id: req.params.id,
      getCourseDetailRepo,
    });

    return response(res, result);
  } catch (err) {
    return next(err);
  }
};

export const getCourseListController = async ({
  req,
  res,
  next,
}: TControllerProps) => {
  try {
    const result = await getCourseListService({
      userId: req.body.userId!,
      getCourseListRepo,
      getDepartmentGroupManagerByUserIdRepo,
    });

    return response(res, result);
  } catch (err) {
    return next(err);
  }
};
