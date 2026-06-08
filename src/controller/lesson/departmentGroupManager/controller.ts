import { createLessonService } from "../../../application/modules/lesson/departmentGroupManager/createLesson.service.js"
import { deleteLessonService } from "../../../application/modules/lesson/departmentGroupManager/deleteLesson.service.js";
import { editLessonService } from "../../../application/modules/lesson/departmentGroupManager/editLesson.service.js";
import { getLessonDetailService } from "../../../application/modules/lesson/departmentGroupManager/getLessonDetail.service.js";
import { getLessonListService } from "../../../application/modules/lesson/departmentGroupManager/getLessonList.service.js";
import { TControllerProps } from "../../../core/types.js";
import { getDepartmentGroupManagerByUserIdRepo } from "../../../infrastructure/modules/departmentGroupManager/getDepartmentGroupManagerByUserId.repo.js"
import { createLessonRepo } from "../../../infrastructure/modules/lesson/createLesson.repo.js"
import { deleteLessonRepo } from "../../../infrastructure/modules/lesson/deleteLesson.repo.js";
import { editLessonRepo } from "../../../infrastructure/modules/lesson/editLesson.repo.js";
import { getLessonByIdRepo } from "../../../infrastructure/modules/lesson/getLessonById.repo.js";
import { response } from "../../../utils/response.js";

export const creatLessonController = async ({req, res, next}: TControllerProps) => {
  try{
    const result = await createLessonService({
      data: {
        body: req.body,
      },
      userId: req.userId!,
      getDepartmentGroupManagerByUserIdRepo,
      createLessonRepo,
    });

    return response(res, result);
  } catch (err) {
    return next(err);
  }
};


export const deleteLessonController = async ({req, res, next}: TControllerProps) => {
  try{
    const result = await deleteLessonService({
      id: req.params.id,
      userId: req.userId!,
      deleteLessonRepo,
      getDepartmentGroupManagerByUserIdRepo,
      getLessonByIdRepo
    });

    return response(res, result);
  } catch (err) {
    return next(err);
  }
};


export const editLessonController = async ({req, res, next}: TControllerProps) => {
  try{
    const result = await editLessonService({
      data: {
        body: req.body,
        params: req.params as { id: string }
      },
      userId: req.userId!,
      editLessonRepo,
      getDepartmentGroupManagerByUserIdRepo,
      getLessonByIdRepo
    });

    return response(res, result);
  } catch (err) {
    return next(err);
  }
}

export const getLessonDetailController = async ({req, res, next}: TControllerProps) => {
  try{
    const result = await getLessonDetailService({
      id: req.params.id,
      getLessonDetailRepo
    });

    return response(res, result);
  } catch (err) {
    return next(err);
  }
}



export const getLessonListController = async ({req, res, next}: TControllerProps) => {
  try{
    const result = await getLessonListService({
      userId: req.userId!,
      getDepartmentGroupManagerByUserIdRepo,
      getLessonListRepo,
    });

    return response(res, result);
  } catch (err) {
    return next(err);
  }
}


