import { GetCourseDetailRepo } from "../../../../core/modules/course/repo/departmentGroupManager/getCourseDetail.repo.js";
import prisma from "../../../prisma.js";

export const getCourseDetailRepo: GetCourseDetailRepo = async ({ id }, tx) => {
  const db = tx ?? prisma;

  const courseDetail = await db.course.findUnique({
    where: { id },
    include: {
      lesson: true,
      teacher: {
        select: {
          user: {
            select: {
              firstName: true,
              lastName: true,
            },
          },
        },
      },
      semester: true,
      times: {
        include: {
          classRoom: true,
        },
      },
      _count: {
        select: {
          courseStudents: true,
        },
      },
    },
  });

  if (!courseDetail) return null;

  return {
    id: courseDetail.id,
    cancelled: courseDetail.canceled,
    capacity: courseDetail.capacity,
    lessonId: courseDetail.lessonId,
    number: courseDetail.number,
    semesterId: courseDetail.semesterId,
    teacherId: courseDetail.teacherId,
    examAt: courseDetail.examAt,
    lesson: {
      title: courseDetail.lesson.title,
    },
    semester: {
      year: courseDetail.semester.year,
      isFirstSemester: courseDetail.semester.isFirstSemester,
    },
    teacher: {
      user: {
        firstName: courseDetail.teacher.user.firstName,
        lastName: courseDetail.teacher.user.lastName,
      },
    },
    times: courseDetail.times.map((t) => ({
      id: t.id,
      day: t.day,
      time: t.time,
      courseId: t.courseId,
      classRoomId: t.classRoomId,
      classRoom: {
        number: t.classRoom.number,
      },
    })),
    remaining: courseDetail.capacity - courseDetail._count.courseStudents,
  };
};
