import { CreateCourseRepo } from "../../../core/modules/course/repo/createCourse.repo.js";
import prisma from "../../prisma.js";

export const createCourseRepo: CreateCourseRepo = async ({ data }, tx) => {
  const db = tx ?? prisma;

  return await db.course.create({
    data: {
      number: data.number,
      canceled: data.canceled,
      examAt: data.examAt,
      lessonId: data.lessonId,
      semesterId: data.semesterId,
      teacherId: data.teacherId,
      capacity: data.capacity,
    },
  });
};
