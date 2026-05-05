import { GetCourseListRepo } from "../../../../core/modules/course/repo/student/getCourseList.repo.js";
import prisma from "../../../prisma.js";

export const getCourseListRepo: GetCourseListRepo = async ({ data }, tx) => {
  const db = tx ?? prisma;

  const courses = await db.course.findMany({
    where: {
      semesterId: data.semesterId,
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
    number: c.number,
    canceled: c.canceled,
    examAt: c.examAt,
    capacity: c.capacity,
    remaining: c.capacity - c._count.courseStudents,
    lesson: {
      id: c.lesson.id,
      title: c.lesson.title,
      coefficient: c.lesson.coefficient,
      lessonType: c.lesson.lessonType,
    },
    teacher: {
      user: {
        firstName: c.teacher.user.firstName,
        lastName: c.teacher.user.lastName,
      },
    },
    times: c.times.map((t) => ({
      day: t.day,
      time: t.time,
      classRoom: {
        number: t.classRoom.number,
      },
    })),
  }));
};
