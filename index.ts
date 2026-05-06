import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import authRouter from "./src/router/auth/index.js";
import bookRouter from "./src/router/book/index.js";
import bucketRouter from "./src/router/bucket/bucket.js";
import cartRouter from "./src/router/cart/index.js";
import categoryRouter from "./src/router/category/index.js";
import commentRouter from "./src/router/comment/index.js";
import contentRouter from "./src/router/content/index.js";
import dashboardRouter from "./src/router/dashboard/index.js";
import deletedFileRouter from "./src/router/deletedFile/index.js";
import examRouter from "./src/router/exam/index.js";
import featureRouter from "./src/router/feature/index.js";
import generalSettingsRouter from "./src/router/generalSettings/index.js";
import postRouter from "./src/router/post/index.js";
import productRouter from "./src/router/product/index.js";
import roleRouter from "./src/router/role/index.js";
import subscriptionRouter from "./src/router/subscription/index.js";
import systemLogRouter from "./src/router/systemLog/index.js";
import transactionRouter from "./src/router/transaction/index.js";
import userRouter from "./src/router/user/index.js";
import walletRouter from "./src/router/wallet/index.js";
import studentProfileRouter from "./src/router/studentProfile/index.js";
import teacherProfileRouter from "./src/router/teacherProfile/index.js";

import {
  initFeatures,
  initGeneralSettings,
  initPermissions,
  initRoles,
} from "./initializer.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";

dotenv.config();
console.log("loading enviroment...");

console.log("setting middlewares...");
const app = express();
app.use(cors());
app.use(express.json());

console.log("setting up routes...");
app.use("/api/auth", authRouter);
app.use("/api/book", bookRouter);
app.use("/api/bucket", bucketRouter);
app.use("/api/cart", cartRouter);
app.use("/api/category", categoryRouter);
app.use("/api/comment", commentRouter);
app.use("/api/content", contentRouter);
app.use("/api/dashboard", dashboardRouter);
app.use("/api/deletedFile", deletedFileRouter);
app.use("/api/exam", examRouter);
app.use("/api/feature", featureRouter);
app.use("/api/post", postRouter);
app.use("/api/product", productRouter);
app.use("/api/role", roleRouter);
app.use("/api/subscriptiion", subscriptionRouter);
app.use("/api/systemLog", systemLogRouter);
app.use("/api/transaction", transactionRouter);
app.use("/api/user", userRouter);
app.use("/api/wallet", walletRouter);
app.use("/api/generalSettings", generalSettingsRouter);
app.use("/api/studentProfile", studentProfileRouter);
app.use("/api/teacherProfile", teacherProfileRouter);

console.log("setting up error handler middleware...");
app.use(errorHandler);

// console.log("loading swagger...");
// const swaggerOptions = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Yadinow API",
//       version: "1.0.0",
//       description: "API documentation",
//     },
//     servers: [
//       {
//         url: process.env.VERCEL_URL
//           ? `https://${process.env.VERCEL_URL}`
//           : `http://localhost:${process.env.PORT || 3000}`,
//       },
//     ],
//   },
//   apis: ["./src/routes/**/*.ts"],
// };

// const swaggerSpec = swaggerJSDoc(swaggerOptions);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

await initGeneralSettings();
await initRoles();
await initPermissions();
await initFeatures();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`🔥 Server running on http://localhost:${PORT}`)
);
