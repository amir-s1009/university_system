import { createClassRoomService } from "../../../application/modules/classRoom/departmentManager/createClassRoom.service.js";
import { getDepartmentManagerByUserIdRepo } from "../../../infrastructure/modules/departmentManager/getDepartmentManagerById.repo.js";
import { createClassRoomRepo } from "../../../infrastructure/modules/classRoom/createClassRoom.repo.js";
import { TControllerProps } from "../../../core/types.js";
import { response } from "../../../utils/response.js";
import { deleteClassRoomService } from "../../../application/modules/classRoom/departmentManager/deleteClassRoom.service.js";
import { deleteClassRoomRepo } from "../../../infrastructure/modules/classRoom/deleteClassRoom.repo.js";
import { getClassRoomListRepo } from "../../../infrastructure/modules/classRoom/departmentManager/getClassRoomList.repo.js";
import { getClassRoomListService } from "../../../application/modules/classRoom/departmentManager/getClassRoomList.service.js";


export const createClassRoomController = async ({ req, res, next}: TControllerProps) => {
  try{
    const result = await createClassRoomService({
      data: {
        body: req.body,
      },
      userId: req.userId!,
      createClassRoomRepo,
      getDepartmentManagerByUserIdRepo,
    });

    return response(res, result);
  } catch(err) {
    return next(err);
  }
};


export const deletClassRoomController = async ({ req, res, next }: TControllerProps) => {
  try{
    const result = await deleteClassRoomService({
      id: req.params.id,
      deleteClassRoomRepo,
    });
    return response(res, result);
  }
  catch (err) {
    return next(err);
  }
};


export const getClassRoomListController = async({ req, res, next}: TControllerProps) => {
  try{
    const result = await getClassRoomListService({
      userId: req.userId!,
      getClassRoomListRepo,
      getDepartmentManagerByUserIdRepo
    });

    return response(res, result);
  }
  catch (err) {
    return next(err);
  }
};