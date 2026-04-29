import prisma from "./src/infrastructure/prisma.js";

/* 
1.init department
2.init department manager
3.init semester and specify active semester
4.init semester calander

*/
const initializeDatabase = async () => {
  await prisma.department.create({
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
            },
          },
        },
      },
    },
  });

  const semesterCreated = await prisma.semester.create({
    data: {
      year: 1404,
      isFirstSemester: false,
    },
  });

  await prisma.generalSettings.create({
    data: {
      activeSemesterId: semesterCreated.id,
    },
  });

  await prisma.semesterCalander.create({
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
};
