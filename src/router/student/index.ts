import {Router} from "express";

import departmentGroupManagerRouter from "./departmentGroupManager/router.js"

const router = Router();

router.use("/student/departmentGroupManager", departmentGroupManagerRouter);

export default router;