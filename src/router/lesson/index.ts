import { Router } from "express";

import departmentGroupManagerRouter from "./departmentGroupManager/router.js";

const router = Router();

router.use("/departmentGroupManager", departmentGroupManagerRouter);

export default router;