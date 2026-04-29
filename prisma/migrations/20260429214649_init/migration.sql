/*
  Warnings:

  - You are about to drop the column `permemantScoringDeadLine` on the `Semester` table. All the data in the column will be lost.
  - You are about to drop the column `temproryScoringDeadLine` on the `Semester` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Semester" DROP COLUMN "permemantScoringDeadLine",
DROP COLUMN "temproryScoringDeadLine";

-- CreateTable
CREATE TABLE "SemesterCalander" (
    "semesterId" TEXT NOT NULL,
    "takeCourseStartsAt" TIMESTAMP(3) NOT NULL,
    "takeCourseEndsAt" TIMESTAMP(3) NOT NULL,
    "addRemoveCourseStartsAt" TIMESTAMP(3) NOT NULL,
    "addRemoveCourseEndsAt" TIMESTAMP(3) NOT NULL,
    "removeCourseRequestStartsAt" TIMESTAMP(3) NOT NULL,
    "removeCourseRequestEndsAt" TIMESTAMP(3) NOT NULL,
    "temproryScoringDeadLine" TIMESTAMP(3) NOT NULL,
    "permemantScoringDeadLine" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SemesterCalander_pkey" PRIMARY KEY ("semesterId")
);

-- AddForeignKey
ALTER TABLE "SemesterCalander" ADD CONSTRAINT "SemesterCalander_semesterId_fkey" FOREIGN KEY ("semesterId") REFERENCES "Semester"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
