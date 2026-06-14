import { Router } from "express";

import departmentManagerRouter from "./departmentManager/router.js";
import teacherRouter from "./teacher/router.js";

const router = Router();

router.use("/departmentManager", departmentManagerRouter);
router.use("/teacher", teacherRouter);

export default router;
