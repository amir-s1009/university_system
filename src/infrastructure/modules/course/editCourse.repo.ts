import { EditCourseRepo } from "../../../core/modules/course/repo/editCourse.repo.js";
import prisma from "../../prisma.js";

export const editCourseRepo: EditCourseRepo = async ({ data }, tx) => {
  const db = tx ?? prisma;

  return await db.course.update({
    where: {
      id: data.id,
    },
    data: {
      canceled: data.canceled,
      capacity: data.capacity,
      examAt: data.examAt,
      lessonId: data.lessonId,
      number: data.number,
      semesterId: data.semesterId,
      teacherId: data.teacherId,
    },
  });
};
