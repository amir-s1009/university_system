import { EditCourseService } from "../../../../core/modules/course/service/departmentGroupManager/editCourse.service.js";
import { AppError } from "../../../error.js";

export const editCourseService: EditCourseService = async ({
  data,
  userId,
  editCourseRepo,
  editCourseTimeRepo,
  getCourseByIdRepo,
  getCourseTimeListByCourseIdRepo,
  deleteCourseTimeRepo,
  createCourseTimeRepo,
  getDepartmentGroupManagerByUserIdRepo,
  getLessonByIdRepo,
  unitOfWorkRepo,
}) => {
  const course = await getCourseByIdRepo({
    id: data.params.id,
  });
  if (!course) throw new AppError("دوره مورد نظر یافت نشد", 404);

  const departmentGroupManager = await getDepartmentGroupManagerByUserIdRepo({
    userId,
  });
  if (!departmentGroupManager)
    throw new AppError("مدیر گروه آموزشی یافت نشد", 404);

  const lesson = await getLessonByIdRepo({
    id: course.id,
  });
  if (!lesson) throw new AppError("درس دوره یافت نشد", 404);

  if (departmentGroupManager.departmentGroupId !== lesson.departmentGroupId)
    throw new AppError(
      "شما فقط مجاز به ویرایش دوره گروه آموزشی خود هستید",
      403
    );

  const currentTimes = await getCourseTimeListByCourseIdRepo({
    courseId: course.id,
  });

  const newCourseTimes = data.body.times.filter((t) => !t.id);

  await unitOfWorkRepo(async (tx) => {
    await Promise.all(
      currentTimes.map((ct) => {
        if (!data.body.times.find((t) => t.id === ct.id))
          return deleteCourseTimeRepo({ id: ct.id }, tx);
      })
    );

    await Promise.all(
      newCourseTimes.map((nct) => {
        if (!nct.id) {
          return createCourseTimeRepo(
            {
              data: {
                classRoomId: nct.classRoomId,
                day: nct.day,
                time: nct.time,
                courseId: course.id,
              },
            },
            tx
          );
        } else {
          return editCourseTimeRepo(
            {
              data: {
                id: nct.id,
                classRoomId: nct.classRoomId,
                day: nct.day,
                time: nct.time,
                courseId: course.id,
              },
            },
            tx
          );
        }
      })
    );

    await editCourseRepo(
      {
        data: {
          id: data.params.id,
          capacity: data.body.capacity,
          examAt: data.body.examAt,
          number: data.body.number,
        },
      },
      tx
    );
  });

  return {
    ok: true,
    code: 200,
    message: "دوره مورد نظر ویرایش گردید",
  };
};
