import { StudentCourseStatus } from "@prisma/client";
import { CreateStudentCourseService } from "../../../../core/modules/studentCourse/service/student/createStudentCourse.service.js";
import { AppError } from "../../../error.js";

export const createStudentCourseService: CreateStudentCourseService = async ({
  data,
  userId,
  createStudentCourseRepo,
  getStudentByUserIdRepo,
  getSemesterCalanderRepo,
  getCourseByIdRepo,
  getLessonPrerequisitesRepo,
  getStudentAlreadyTakenCoursesRepo,
  getGeneralSettingsRepo,
}) => {
  const generalSettings = await getGeneralSettingsRepo();
  if (!generalSettings) throw new AppError("تنظیمات عمومی سیستم یافت نشد", 404);

  const student = await getStudentByUserIdRepo({
    userId,
  });
  if (!student) throw new AppError("دانشجو یافت نشد", 404);

  const course = await getCourseByIdRepo({
    id: data.body.courseId,
  });
  if (!course) throw new AppError("دوره مورد نظر یافت نشد", 404);

  const semesterCalander = await getSemesterCalanderRepo({
    semesterId: generalSettings.activeSemesterId,
  });
  if (!semesterCalander)
    throw new AppError("تقویم آموزشی نیمسال یافت نشد", 404);

  const now = new Date();
  // check for invalid days
  if (
    (now < semesterCalander.takeCourseStartsAt ||
      now > semesterCalander.takeCourseEndsAt) &&
    (now < semesterCalander.addRemoveCourseStartsAt ||
      now > semesterCalander.addRemoveCourseEndsAt)
  )
    throw new AppError("زمان مجاز انتخاب واحد به اتمام رسیده است", 403);

  const studentAlreadyTakenCourses = await getStudentAlreadyTakenCoursesRepo({
    studentId: student.id,
  });

  const courseAlreadyTaken = studentAlreadyTakenCourses.find(
    (satc) => satc.course.lesson.id === course.lessonId
  );

  //check if student has already taken this course
  if (courseAlreadyTaken) {
    // check for possible wrong conditions
    if (
      courseAlreadyTaken.status === StudentCourseStatus.SCORED_PERMENANTLY &&
      (courseAlreadyTaken.score ?? 0) >= 10
    )
      throw new AppError("شما این درس را قبلا با نمره قبولی گذرانده اید", 403);

    if (courseAlreadyTaken.status === StudentCourseStatus.SCORED_TEMPRORILY)
      throw new AppError(
        "شما در حال انتظار برای ثبت نهایی نمره این درس هستید",
        403
      );

    if (courseAlreadyTaken.status === StudentCourseStatus.NOT_FINISHED)
      throw new AppError("شما در حال گذراندن این درس هستید", 403);
  }

  const prerequisitesOfTheLesson = await getLessonPrerequisitesRepo({
    id: course.lessonId,
  });

  // check if prerequisites of this course is taken before
  for (const prerequisite of prerequisitesOfTheLesson) {
    if (
      !studentAlreadyTakenCourses.find(
        (satc) => satc.course.lesson.id === prerequisite.id
      )
    ) {
      throw new AppError("شما پیش نیاز(های) این درس را رعایت نکرده اید", 403);
    }
  }

  const studentAlreadyTakenCoursesThisSemester =
    studentAlreadyTakenCourses.filter(
      (satc) => satc.course.semesterId === generalSettings.activeSemesterId
    );

  const sumOfLessonCoefficientsTakenThisSemester =
    studentAlreadyTakenCoursesThisSemester.reduce((sum, current) => {
      return sum + current.course.lesson.coefficient;
    }, 0);

  if (sumOfLessonCoefficientsTakenThisSemester > 24)
    throw new AppError("سقف واحد های مجاز جهت انتخاب شما 24 واحد میباشد", 403);

  await createStudentCourseRepo({
    data: {
      courseId: data.body.courseId,
      status: StudentCourseStatus.NOT_FINISHED,
      studentId: student.id,
    },
  });

  return {
    ok: true,
    code: 200,
    message: "دوره مورد نظر به لیست انتخاب واحد نیمسال جاری شما اضافه گردید",
  };
};
