import { GetCourseListService } from "../../../../core/modules/course/service/student/getCourseList.service.js";

export const getCourseListService: GetCourseListService = async ({
  data,
  getCourseListRepo,
}) => {
  const courses = await getCourseListRepo({
    data: {
      semesterId: data.queries.semesterId,
    },
  });

  return {
    ok: true,
    code: 200,
    data: courses,
  };
};
