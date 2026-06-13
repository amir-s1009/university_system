import { NextFunction, Request, Response, Router } from "express";

const router = Router();

router.post(
  "/auth/login",
  async (req: Request, res: Response, next: NextFunction) => {}
);

export default router;
