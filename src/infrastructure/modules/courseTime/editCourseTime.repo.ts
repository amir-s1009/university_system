import { EditCourseTimeRepo } from "../../../core/modules/courseTime/repo/editCourseTime.repo.js";
import prisma from "../../prisma.js";

export const editCourseTimeRepo: EditCourseTimeRepo = async ({ data }, tx) => {
  const db = tx ?? prisma;

  return await db.courseTime.update({
    where: {
      id: data.id,
    },
    data: {
      day: data.day,
      time: data.time,
      classRoomId: data.classRoomId,
      courseId: data.courseId,
    },
  });
};
