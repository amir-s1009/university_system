import { SALT_ROUND } from "./src/core/modules/auth/constant.js";
import { hash } from "./src/core/modules/auth/utils/impl/hash.js";
import prisma from "./src/infrastructure/prisma.js";

/* 
1.init department
2.init department manager
3.init semester and specify active semester
4.init semester calander
*/

export const initializeDatabase = async () => {
  const department = await prisma.department.findFirst({
    where: {
      title: "دانشکده مهندسی برق و کامپیوتر",
    },
  });
  if (department) {
    console.log("database is already initialized...didn't altered!");
    return;
  }
  await prisma.$transaction(async (tx) => {
    console.log("initializing database...");
    await tx.department.create({
      data: {
        title: "دانشکده مهندسی برق و کامپیوتر",
        manager: {
          create: {
            user: {
              create: {
                firstName: "رضا",
                lastName: "موحد",
                fatherName: "کاظم",
                nationalCode: "0123456789",
                phoneNumber: "09141234567",
                birthDate: new Date("1978-10-05"),
                password: await hash({ raw: "1234567", salt: SALT_ROUND }),
                role: "DEPARTMENT_MANAGER",
              },
            },
          },
        },
      },
    });

    const semesterCreated = await tx.semester.create({
      data: {
        year: 1404,
        isFirstSemester: false,
      },
    });

    await tx.generalSettings.create({
      data: {
        activeSemesterId: semesterCreated.id,
      },
    });

    await tx.semesterCalander.create({
      data: {
        semesterId: semesterCreated.id,
        takeCourseStartsAt: new Date(),
        takeCourseEndsAt: new Date(),
        addRemoveCourseStartsAt: new Date(),
        addRemoveCourseEndsAt: new Date(),
        removeCourseRequestStartsAt: new Date(),
        removeCourseRequestEndsAt: new Date(),
        temproryScoringDeadLine: new Date(),
        permemantScoringDeadLine: new Date(),
      },
    });
  });
};
