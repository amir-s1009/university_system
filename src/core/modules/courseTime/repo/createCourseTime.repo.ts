import { CourseTimeEntity } from "../entity/CourseTime.entity.js";

export type CreateCourseTimeRepo = ({
  data,
}: {
  data: Pick<CourseTimeEntity, "classRoomId" | "day" | "time" | "courseId">;
}) => Promise<CourseTimeEntity>;
