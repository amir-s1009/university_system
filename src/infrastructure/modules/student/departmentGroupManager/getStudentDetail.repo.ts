import { GetStudentDetailRepo } from "../../../../core/modules/student/repo/departmentGroupManager/getStudentDetail.repo.js";
import prisma from "../../../prisma.js";

export const getStudentDetailRepo: GetStudentDetailRepo = async (
  { id },
  tx
) => {
  const db = tx ?? prisma;

  const studentDetail = await db.student.findUnique({
    where: {
      id,
    },
    include: {
      enteranceSemester: true,
      user: {
        include: {
          address: true,
        },
      },
    },
  });

  if (!studentDetail) return null;

  return {
    id: studentDetail.id,
    status: studentDetail.status,
    studyMode: studentDetail.studyMode,
    user: {
      firstName: studentDetail.user.firstName,
      lastName: studentDetail.user.lastName,
      fatherName: studentDetail.user.fatherName,
      nationalCode: studentDetail.user.nationalCode,
      phoneNumber: studentDetail.user.phoneNumber,
      zipCode: studentDetail.user.zipCode,
      address: studentDetail.user.address
        ? {
            province: studentDetail.user.address.province,
            city: studentDetail.user.address.city,
            router: studentDetail.user.address.route,
          }
        : null,
    },
    entranceSemester: {
      year: studentDetail.enteranceSemester.year,
      isFirstSemester: studentDetail.enteranceSemester.isFirstSemester,
    },
  };
};
