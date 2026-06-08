import { getCourseListService } from "../../../application/modules/course/teacher/getCourseList.service.js"
import { TControllerProps } from "../../../core/types.js";
import { getCourseListRepo } from "../../../infrastructure/modules/course/teacher/getCourseList.repo.js"
import { getTeacherByUserIdRepo } from "../../../infrastructure/modules/teacher/getTeacherByUserId.repo.js"
import { response } from "../../../utils/response.js";

export const getCourseListController = async ({req, res, next}: TControllerProps) => {
  try{
    const result = await getCourseListService({
      data: {
        queries: req.query,
      },
      userId: req.userId!,
      getCourseListRepo,
      getTeacherByUserIdRepo,
    });

    return response(res, result);
  } catch (err) {
    return next(err);
  }
};