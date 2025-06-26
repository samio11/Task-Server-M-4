import express, { Request, Response } from "express";
import { User } from "../models/user.model";
export const userRoutes = express.Router();

userRoutes.post("/create-user", async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await User.create(data);
    res.status(201).json({
      success: true,
      message: "User created Successfully",
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
userRoutes.get("/get-all-user", async (req: Request, res: Response) => {
  try {
    const result = await User.find();
    res.status(201).json({
      success: true,
      message: "User Get Successfully",
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
userRoutes.get("/get-a-user/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await User.findById(id);
    res.status(201).json({
      success: true,
      message: "User Get Successfully",
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
userRoutes.patch("/update-user/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await User.findByIdAndUpdate(id, data, { new: true });
    res.status(201).json({
      success: true,
      message: "User update Successfully",
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
userRoutes.delete("/delete-user/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await User.findByIdAndDelete(id);
    res.status(201).json({
      success: true,
      message: "User update Successfully",
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
