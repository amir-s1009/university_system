import { Router } from "express";

import departmentManagerRouter from "./departmentManager/router.js";

const router = Router();

router.use("/classRoom/departmentManager", departmentManagerRouter);

export default router;