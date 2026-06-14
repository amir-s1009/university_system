import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { errorHandler } from "./src/middlewares/errorHandler.js";

import authRouter from "./src/router/auth/index.js";
import classRoomRouter from "./src/router/classRoom/index.js";
import courseRouter from "./src/router/course/index.js";
import departmentGroupRouter from "./src/router/departmentGroup/index.js";
import lessonRouter from "./src/router/lesson/index.js";
import studentRouter from "./src/router/student/index.js";
import studentCourseRouter from "./src/router/studentCourse/index.js";
import teacherRouter from "./src/router/teacher/index.js";
import { initializeDatabase } from "./initializer.js";

dotenv.config();
console.log("loading enviroment...");

console.log("setting middlewares...");
const app = express();
app.use(cors());
app.use(express.json());

console.log("setting up routes...");
app.use("/auth", authRouter);
app.use("/classRoom", classRoomRouter);
app.use("/course", courseRouter);
app.use("/departmentGroup", departmentGroupRouter);
app.use("/lesson", lessonRouter);
app.use("/student", studentRouter);
app.use("/studentCourse", studentCourseRouter);
app.use("/teacher", teacherRouter);

console.log("setting up error handler middleware...");
app.use(errorHandler);

await initializeDatabase();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`🔥 Server running on http://localhost:${PORT}`)
);
