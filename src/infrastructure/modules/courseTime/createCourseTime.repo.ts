import { CreateCourseTimeRepo } from "../../../core/modules/courseTime/repo/createCourseTime.repo.js";
import prisma from "../../prisma.js";

export const createCourseTimeRepo: CreateCourseTimeRepo = async (
  { data },
  tx
) => {
  const db = tx ?? prisma;

  return await db.courseTime.create({
    data: {
      day: data.day,
      time: data.time,
      classRoomId: data.classRoomId,
      courseId: data.courseId,
    },
  });
};
