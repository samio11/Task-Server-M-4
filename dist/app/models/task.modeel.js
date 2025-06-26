"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
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
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
});
exports.Task = (0, mongoose_1.model)("Task", taskSchema);
