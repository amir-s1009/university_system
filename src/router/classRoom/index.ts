import { Router } from "express";

import departmentManagerRouter from "./departmentManager/router.js";

const router = Router();

router.use("/departmentManager", departmentManagerRouter);

export default router;
