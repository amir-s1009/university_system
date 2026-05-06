import { EditUserInfoService } from "../../../../core/modules/auth/service/web/editUserInfo.service.js";
import { AppError } from "../../../error.js";

export const editUserInfoService: EditUserInfoService = async ({
  data,
  userId,
  updateUserRepo,
  getUserInfoRepo,
  createDeletedFileRepo,
  unitOfWorkRepo,
  markNotExistingFilesAsDeleted,
}) => {
  const userInfo = await getUserInfoRepo({ id: userId });

  if (!userInfo) throw new AppError("اطلاعات کاربری شما یافت نشد", 404);

  await unitOfWorkRepo(async (tx) => {
    await updateUserRepo(
      {
        data: {
          id: userId,
          firstName: data.firstName,
          lastName: data.lastName,
          avatar: data.avatar ?? null,
          password: data.password ?? undefined,
        },
      },
      tx
    );
    await markNotExistingFilesAsDeleted(
      {
        incomingFiles: data.avatar,
        priorFiles: userInfo.avatar,
        createDeletedFileRepo: createDeletedFileRepo,
      },
      tx
    );
  });

  return {
    code: 200,
    message: "اطلاعات کاربری شما بروز رسانی شد",
  };
};
