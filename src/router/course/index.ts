import { Router } from "express";

import departmentGroupManagerRouter from "./departmentGroupManager/router.js";
import studentRouter from "./student/router.js";
import teacherRouter from "./teacher/router.js";


const router = Router();

router.use("/course/departmentGroupManager", departmentGroupManagerRouter);
router.use("/course/student", studentRouter);
router.use("/course/teacher", teacherRouter);

export default router;