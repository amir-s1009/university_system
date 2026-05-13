import { Router } from "express";

import departmentManagerRouter from "./departmentManager/router.js";


const router = Router();

router.use("/teacher/departmentManager", departmentManagerRouter);

export default router;