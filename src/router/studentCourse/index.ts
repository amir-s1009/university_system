import { Router } from "express";

import studentRouter from "./student/router.js";
import teacherRouter from "./teacher/router.js";

const router = Router();

router.use("/studentCourse/student", studentRouter);
router.use("/studentCourse/teacher", teacherRouter);

export default router;
