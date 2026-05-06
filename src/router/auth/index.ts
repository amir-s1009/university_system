import express from "express";

import webRouter from "./web/router.js";
import cmsRouter from "./cms/auth.js";

const router = express.Router();

router.use("/web", webRouter);
router.use("/cms", cmsRouter);

export default router;
