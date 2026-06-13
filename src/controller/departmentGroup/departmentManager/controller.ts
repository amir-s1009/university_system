import { changeDepartmentGroupManagerService } from "../../../application/modules/departmentGroup/departmentManager/changeDepartmentGroupManager.service.js"
import { createDepartmentGroupService } from "../../../application/modules/departmentGroup/departmentManager/createDepartmentGroup.service.js"
import { editDepartmentGroupService } from "../../../application/modules/departmentGroup/departmentManager/editDepartmentGroup.service.js"
import { getDepartmentGroupDetailService } from "../../../application/modules/departmentGroup/departmentManager/getDepartmentGroupDetail.service.js"
import { getDepartmentGroupListService } from "../../../application/modules/departmentGroup/departmentManager/getDepartmentGroupList.service.js"
import { TControllerProps } from "../../../core/types.js"
import { createDepartmentGroupRepo } from "../../../infrastructure/modules/departmentGroup/createDepartmentGroup.repo.js"
import { getDepartmentGroupDetailRepo } from "../../../infrastructure/modules/departmentGroup/departmentManager/getDepartmentGroupDetail.repo.js"
import { getDepartmentGroupListRepo } from "../../../infrastructure/modules/departmentGroup/departmentManager/getDepartmentGroupList.repo.js"
import { editDepartmentGroupRepo } from "../../../infrastructure/modules/departmentGroup/editDepartmentGroup.repo.js"
import { getDepartmentGroupByIdRepo } from "../../../infrastructure/modules/departmentGroup/getDepartmentGroupById.repo.js"
import { editDepartmentGroupManagerRepo } from "../../../infrastructure/modules/departmentGroupManager/editDepartmentGroupManager.repo.js"
import { getDepartmentGroupManagerByIdRepo } from "../../../infrastructure/modules/departmentGroupManager/getDepartmentGroupManagerById.repo.js"
import { getDepartmentManagerByUserIdRepo } from "../../../infrastructure/modules/departmentManager/getDepartmentManagerById.repo.js"
import { response } from "../../../utils/response.js"


export const createDepartmentGroupController = async ({ req , res, next}: TControllerProps) => {
  try{
    const result = await createDepartmentGroupService({
      data: {
        body: req.body
      },
      userId: req.userId!,
      createDepartmentGroupRepo,
      getDepartmentManagerByUserIdRepo
    });

    return response(res, result);
  } catch (err) {
    return next(err);
  }
};

export const editDepartmentGroupController = async ({ req, res, next }: TControllerProps) => {
  try{
    const result = await editDepartmentGroupService({
      data: {
        body: req.body,
        params: req.params as { id: string},
      },
      userId: req.userId!,
      editDepartmentGroupRepo,
      getDepartmentGroupByIdRepo,
      getDepartmentManagerByUserIdRepo
    });

    return response(res, result);
  } catch (err) {
    return next(err);
  }
};

export const changeDepartmentGroupManagerController = async ({ req, res, next }: TControllerProps) => {
  try{
    const result = await changeDepartmentGroupManagerService({
      data: {
        body: req.body,
      },
      userId: req.userId!,
      editDepartmentGroupManagerRepo,
      getDepartmentGroupByIdRepo,
      getDepartmentGroupManagerByIdRepo,
      getDepartmentManagerByUserIdRepo,
    });
    return response(res, result);
  } catch (err) {
    return next(err);
  }
};

export const getDepartmentGroupDetailController = async ({ req, res, next}: TControllerProps) => {
  try{
    const result = await getDepartmentGroupDetailService({
      id: req.userId!,
      getDepartmentGroupDetailRepo,
    });

    return response(res, result);
  } catch (err) {
    return next(err);
  }
};


export const getDepartmentGroupListController = async ({ req, res, next }: TControllerProps) => {
  try{
    const result = await getDepartmentGroupListService({
      userId: req.userId!,
      getDepartmentGroupListRepo,
      getDepartmentManagerByUserIdRepo
    });
    
    return response(res, result);
  } catch (err) {
    return next(err);
  }
};

