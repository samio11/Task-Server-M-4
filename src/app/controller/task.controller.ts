import express, { Request, Response } from "express";
import { Task } from "../models/task.modeel";
export const taskRoutes = express.Router();

taskRoutes.post("/create-task", async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await Task.create(data);
    res.status(201).json({
      success: true,
      message: "Task Created Done",
      totalData: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err?.message,
      totalError: err,
    });
  }
});

taskRoutes.get("/", async (req: Request, res: Response) => {
  try {
    const result = await Task.find().populate("user");
    res.status(201).json({
      success: true,
      message: "Task Get Done",
      totalData: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err?.message,
      totalError: err,
    });
  }
});
taskRoutes.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await Task.findById(id).populate("user");
    res.status(201).json({
      success: true,
      message: "Task Get Done",
      totalData: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err?.message,
      totalError: err,
    });
  }
});
taskRoutes.patch("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await Task.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.status(201).json({
      success: true,
      message: "Task Update Done",
      totalData: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err?.message,
      totalError: err,
    });
  }
});

taskRoutes.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await Task.findByIdAndDelete(id);
    res.status(201).json({
      success: true,
      message: "Task Delete Done",
      totalData: null,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err?.message,
      totalError: err,
    });
  }
});
