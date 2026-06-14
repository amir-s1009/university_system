import { Router } from "express";

import departmentGroupManagerRouter from "./departmentGroupManager/router.js";
import studentRouter from "./student/router.js";
import teacherRouter from "./teacher/router.js";


const router = Router();

router.use("/departmentGroupManager", departmentGroupManagerRouter);
router.use("/student", studentRouter);
router.use("/teacher", teacherRouter);

export default router;