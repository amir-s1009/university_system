-- CreateEnum
CREATE TYPE "Day" AS ENUM ('SATURDAY', 'SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY');

-- CreateEnum
CREATE TYPE "TimeRange" AS ENUM ('f_8_t_10', 'f_10_t_12', 'f_14_t_16', 'f_16_t_18');

-- CreateEnum
CREATE TYPE "StudentCourseStatus" AS ENUM ('NOT_FINISHED', 'STUDENT_REMOVED', 'TEACHER_REMOVED_STUDENT', 'SCORED_TEMPRORILY', 'SCORED_PERMENANTLY');

-- CreateEnum
CREATE TYPE "StudyMode" AS ENUM ('FULLY_FUNDED', 'TUITION_PAYER');

-- CreateEnum
CREATE TYPE "LessonType" AS ENUM ('BASE', 'GENERAL', 'SPECIAL', 'PRACTICAL');

-- CreateTable
CREATE TABLE "GeneralSettings" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "activeSemesterId" TEXT NOT NULL,

    CONSTRAINT "GeneralSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "nationalCode" TEXT NOT NULL,
    "zipCode" TEXT,
    "phoneNumber" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "route" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DepartmentGroupManager" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "departmentGroupId" TEXT NOT NULL,

    CONSTRAINT "DepartmentGroupManager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DepartmentManager" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,

    CONSTRAINT "DepartmentManager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "studyMode" "StudyMode" NOT NULL,
    "enteranceSemesterId" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lesson" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "coefficient" INTEGER NOT NULL,
    "lessonType" "LessonType" NOT NULL,
    "departmentGroupId" TEXT NOT NULL,

    CONSTRAINT "Lesson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "capacity" INTEGER NOT NULL DEFAULT 25,
    "examAt" TIMESTAMP(3),
    "canceled" BOOLEAN NOT NULL DEFAULT false,
    "lessonId" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,
    "classRoomId" TEXT NOT NULL,
    "semesterId" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Semester" (
    "id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "isFirstSemester" BOOLEAN NOT NULL,
    "temproryScoringDeadLine" TIMESTAMP(3) NOT NULL,
    "permemantScoringDeadLine" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Semester_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseTime" (
    "id" TEXT NOT NULL,
    "day" "Day" NOT NULL,
    "time" "TimeRange" NOT NULL,
    "courseId" TEXT NOT NULL,

    CONSTRAINT "CourseTime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassRoom" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "departmentId" TEXT NOT NULL,

    CONSTRAINT "ClassRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DepartmentGroup" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,

    CONSTRAINT "DepartmentGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentCourse" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "score" DOUBLE PRECISION,
    "status" "StudentCourseStatus" NOT NULL DEFAULT 'NOT_FINISHED',

    CONSTRAINT "StudentCourse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DepartmentGroupToTeacher" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_DepartmentGroupToTeacher_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Address_userId_key" ON "Address"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "DepartmentGroupManager_userId_key" ON "DepartmentGroupManager"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "DepartmentGroupManager_departmentGroupId_key" ON "DepartmentGroupManager"("departmentGroupId");

-- CreateIndex
CREATE UNIQUE INDEX "DepartmentManager_userId_key" ON "DepartmentManager"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "DepartmentManager_departmentId_key" ON "DepartmentManager"("departmentId");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_userId_key" ON "Teacher"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_userId_key" ON "Student"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Course_number_classRoomId_lessonId_semesterId_teacherId_key" ON "Course"("number", "classRoomId", "lessonId", "semesterId", "teacherId");

-- CreateIndex
CREATE INDEX "_DepartmentGroupToTeacher_B_index" ON "_DepartmentGroupToTeacher"("B");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DepartmentGroupManager" ADD CONSTRAINT "DepartmentGroupManager_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DepartmentGroupManager" ADD CONSTRAINT "DepartmentGroupManager_departmentGroupId_fkey" FOREIGN KEY ("departmentGroupId") REFERENCES "DepartmentGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DepartmentManager" ADD CONSTRAINT "DepartmentManager_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DepartmentManager" ADD CONSTRAINT "DepartmentManager_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_enteranceSemesterId_fkey" FOREIGN KEY ("enteranceSemesterId") REFERENCES "Semester"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_departmentGroupId_fkey" FOREIGN KEY ("departmentGroupId") REFERENCES "DepartmentGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_classRoomId_fkey" FOREIGN KEY ("classRoomId") REFERENCES "ClassRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_semesterId_fkey" FOREIGN KEY ("semesterId") REFERENCES "Semester"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseTime" ADD CONSTRAINT "CourseTime_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassRoom" ADD CONSTRAINT "ClassRoom_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DepartmentGroup" ADD CONSTRAINT "DepartmentGroup_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentCourse" ADD CONSTRAINT "StudentCourse_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentCourse" ADD CONSTRAINT "StudentCourse_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DepartmentGroupToTeacher" ADD CONSTRAINT "_DepartmentGroupToTeacher_A_fkey" FOREIGN KEY ("A") REFERENCES "DepartmentGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DepartmentGroupToTeacher" ADD CONSTRAINT "_DepartmentGroupToTeacher_B_fkey" FOREIGN KEY ("B") REFERENCES "Teacher"("id") ON DELETE CASCADE ON UPDATE CASCADE;
