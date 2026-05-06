import { Response } from "../../../../response.js";
import { UnitOfWorkRepo } from "../../../../../application/unitOfWork.repo.js";
import { CreateDeletedFileRepo } from "../../../deletedFile/repo/createDeletedFile.repo.js";
import { MarkNotExistingFilesAsDeleted } from "../../../deletedFile/util/interface/markNotExistingFilesAsDeleted.js";
import { UserEntity } from "../../../user/entity/User.entity.js";
import { UpdateUserRepo } from "../../../user/repo/updateUser.repo.js";
import { GetUserInfoRepo } from "../../../user/repo/web/getUserInfo.repo.js";

export type EditUserInfoService = ({
  data,
  userId,
  updateUserRepo,
  getUserInfoRepo,
  createDeletedFileRepo,
  unitOfWorkRepo,
  markNotExistingFilesAsDeleted,
}: {
  userId: string;
  data: Pick<UserEntity, "firstName" | "lastName" | "avatar"> &
    Partial<Pick<UserEntity, "password">>;
  getUserInfoRepo: GetUserInfoRepo;
  updateUserRepo: UpdateUserRepo;
  createDeletedFileRepo: CreateDeletedFileRepo;
  unitOfWorkRepo: UnitOfWorkRepo;
  markNotExistingFilesAsDeleted: MarkNotExistingFilesAsDeleted;
}) => Response;
