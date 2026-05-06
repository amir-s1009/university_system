import { Response } from "../../../../response.js";
import { UnitOfWorkRepo } from "../../../../../application/unitOfWork.repo.js";
import { CreateDeletedFileRepo } from "../../../deletedFile/repo/createDeletedFile.repo.js";
import { MarkNotExistingFilesAsDeleted } from "../../../deletedFile/util/interface/markNotExistingFilesAsDeleted.js";
import { UserEntity } from "../../../user/entity/User.entity.js";
import { GetUserInfoRepo } from "../../../user/repo/cms/getUserInfo.repo.js";
import { UpdateUserRepo } from "../../../user/repo/updateUser.repo.js";
import { Hash } from "../../utils/interface/hash.js";

export type EditUserInfoService = ({
  data,
  userId,
  getUserInfoRepo,
  createDeletedFileRepo,
  updateUserRepo,
  unitOfWorkRepo,
  markNotExistingFilesAsDeleted,
  hash,
}: {
  userId: string;
  data: Pick<UserEntity, "firstName" | "lastName" | "avatar"> &
    Partial<Pick<UserEntity, "password">>;
  getUserInfoRepo: GetUserInfoRepo;
  updateUserRepo: UpdateUserRepo;
  createDeletedFileRepo: CreateDeletedFileRepo;
  unitOfWorkRepo: UnitOfWorkRepo;
  markNotExistingFilesAsDeleted: MarkNotExistingFilesAsDeleted;
  hash: Hash;
}) => Response;
