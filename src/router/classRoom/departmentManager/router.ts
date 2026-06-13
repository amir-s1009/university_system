import { Router, Request, Response, NextFunction } from "express";
import { roleWatch } from "../../../middlewares/index.js";
import { validator } from "../../../middlewares/validator.js";
import { CreateClassRoomSchema } from "../../../core/modules/classRoom/schema/departmentManager/createClassRoom.schema.js";
import { ValidationList } from "../../../core/enums.js";
import { DeleteClassRoomSchema } from "../../../core/modules/classRoom/schema/departmentManager/deleteClassRoom.schema.js";

const router = Router();

router.post(
  "/createClassRoom",
  roleWatch(["DEPARTMENT_MANAGER"]),
  validator(CreateClassRoomSchema, [ValidationList.BODY]),
  async (req: Request, res: Response, next: NextFunction) => {}
);

router.delete(
  "/deleteClassRoom/:id",
  roleWatch(["DEPARTMENT_MANAGER"]),
  validator(DeleteClassRoomSchema, [ValidationList.PARAMS]),
  async (req: Request, res: Response, next: NextFunction) => {}
);

router.get(
  "/getClassRoomList",
  roleWatch(["DEPARTMENT_MANAGER"]),
  async (req: Request, res: Response, next: NextFunction) => {}
);

export default router;
