import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRoutes } from "./app/controller/user.controller";
import { taskRoutes } from "./app/controller/task.controller";
const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);

app.use("/api/task", taskRoutes);

app.use("/", async (req: Request, res: Response) => {
  res.status(200).json({
    message: "Server is Running Successfully",
  });
});

export default app;
