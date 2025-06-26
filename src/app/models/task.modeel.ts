import { model, Schema } from "mongoose";
import { ITask } from "../interfaces/task.interface";

const taskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  dueDate: { type: String, required: true },
  isCompleted: { type: Boolean, required: true, default: false },
  priority: {
    type: String,
    enum: {
      values: ["high", "mid", "low"],
      message: "{VALUE} is not valid priority",
    },
  },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export const Task = model<ITask>("Task", taskSchema);
