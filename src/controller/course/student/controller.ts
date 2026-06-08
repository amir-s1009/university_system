
import { getCourseListService } from "../../../application/modules/course/student/getCourseList.service.js";
import { TControllerProps } from "../../../core/types.js";
import { getCourseListRepo } from "../../../infrastructure/modules/course/student/getCourseList.repo.js";
import { response } from "../../../utils/response.js";

export const getCourseListController = async ({req, res, next}: TControllerProps) => {
  try{
    const result = await getCourseListService({
      data: {
        queries: req.query as { semesterId: string },
      },
      getCourseListRepo,
    });

    return response(res, result);
  } catch (err) {
    return next(err);
  }
};