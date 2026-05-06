import { SALT_ROUND } from "../../../../core/modules/auth/constant.js";
import { EditUserInfoService } from "../../../../core/modules/auth/service/cms/editUserInfo.service.js";
import { AppError } from "../../../error.js";

export const editUserInfoService: EditUserInfoService = async ({
  userId,
  data,
  updateUserRepo,
  getUserInfoRepo,
  createDeletedFileRepo,
  unitOfWorkRepo,
  markNotExistingFilesAsDeleted,
  hash,
}) => {
  const userInfo = await getUserInfoRepo({ id: userId });
  if (!userInfo) throw new AppError("حساب کاربری شما یافت نشد", 404);

  let newPassword: string | undefined;

  if (data.password) {
    newPassword = await hash({
      raw: data.password,
      salt: SALT_ROUND,
    });
  }

  await unitOfWorkRepo(async (tx) => {
    await updateUserRepo(
      {
        data: {
          id: userId,
          firstName: data.firstName,
          lastName: data.lastName,
          password: newPassword,
          avatar: data.avatar ?? null,
        },
      },
      tx
    );

    await markNotExistingFilesAsDeleted(
      {
        incomingFiles: data.avatar ?? [],
        priorFiles: userInfo.avatar ?? [],
        createDeletedFileRepo: createDeletedFileRepo,
      },
      tx
    );
  });

  return {
    code: 200,
    message: "پروفایل کاربری شما آپدیت شد",
  };
};
