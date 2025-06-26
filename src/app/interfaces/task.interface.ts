import { Types } from "mongoose";

export interface ITask {
  title: string;
  desc: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "high" | "low" | "mid";
  user: Types.ObjectId;
}
