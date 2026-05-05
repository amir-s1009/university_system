import { GetCourseListRepo } from "../../../../core/modules/course/repo/departmentGroupManager/getCourseList.repo.js";
import prisma from "../../../prisma.js";

export const getCourseListRepo: GetCourseListRepo = async (
  { departmentGroupId },
  tx
) => {
  const db = tx ?? prisma;

  const courses = await db.course.findMany({
    where: {
      lesson: {
        departmentGroupId,
      },
    },
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

  return courses.map((c) => ({
    id: c.id,
    cancelled: c.canceled,
    capacity: c.capacity,
    lessonId: c.lessonId,
    number: c.number,
    semesterId: c.semesterId,
    teacherId: c.teacherId,
    examAt: c.examAt,
    lesson: {
      title: c.lesson.title,
    },
    semester: {
      year: c.semester.year,
      isFirstSemester: c.semester.isFirstSemester,
    },
    teacher: {
      user: {
        firstName: c.teacher.user.firstName,
        lastName: c.teacher.user.lastName,
      },
    },
    times: c.times.map((t) => ({
      id: t.id,
      day: t.day,
      time: t.time,
      courseId: t.courseId,
      classRoomId: t.classRoomId,
      classRoom: {
        number: t.classRoom.number,
      },
    })),
    remaining: c.capacity - c._count.courseStudents,
  }));
};
