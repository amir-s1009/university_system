import { getCourseListService } from "../../../application/modules/course/student/getCourseList.service.js";
import { GetCourseListSchema } from "../../../core/modules/course/schema/student/getCourseList.schema.js";
import { TControllerProps } from "../../../core/types.js";
import { getCourseListRepo } from "../../../infrastructure/modules/course/student/getCourseList.repo.js";
import { response } from "../../../utils/response.js";

export const getCourseListController = async ({
  req,
  res,
  next,
}: TControllerProps) => {
  const query = req.query as GetCourseListSchema["queries"];
  try {
    const result = await getCourseListService({
      data: {
        queries: query,
      },
      getCourseListRepo,
    });

    return response(res, result);
  } catch (err) {
    return next(err);
  }
};
