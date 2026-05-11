import { Router } from "express";

import departmentManagerRouter from "./departmentManager/router.js";
import teacherRouter from "./teacher/router.js";

const router = Router();

router.use("/departmentGroup/departmentManager", departmentManagerRouter);
router.use("/departmentGroup/teacher", teacherRouter);

export default router;
