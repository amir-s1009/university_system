import { ROLE } from "@prisma/client";
import { Response } from "../../../../response.js";
import { UserEntity } from "../../../user/entity/User.entity.js";
import { SignupEntity } from "../../entity/response/web/signup.entity.js";
import { UserExistsRepo } from "../../../user/repo/web/userExists.repo.js";
import { GetSignupPendingRepo } from "../../repo/web/getSignupPending.repo.js";
import { UpdateSignupPendingRepo } from "../../repo/updateSignupPending.repo.js";
import { GetRoleByNameRepo } from "../../../role/repo/web/getRoleByName.repo.js";
import { GenerateOTP } from "../../utils/interface/generateOTP.js";
import { Hash } from "../../utils/interface/hash.js";
import { CreateSignupPendingRepo } from "../../repo/createSignupPending.repo.js";

export type SignupService = ({
  data,
  userExistsRepo,
  getSignupPendingRepo,
  updateSignupPendingRepo,
  getRoleByNameRepo,
  createSignupPendingRepo,
  generateOTP,
  hash,
}: {
  data: Pick<UserEntity, "email" | "password" | "firstName" | "lastName"> & {
    role: ROLE;
  };
  userExistsRepo: UserExistsRepo;
  getSignupPendingRepo: GetSignupPendingRepo;
  updateSignupPendingRepo: UpdateSignupPendingRepo;
  getRoleByNameRepo: GetRoleByNameRepo;
  createSignupPendingRepo: CreateSignupPendingRepo;
  generateOTP: GenerateOTP;
  hash: Hash;
}) => Response<SignupEntity>;
