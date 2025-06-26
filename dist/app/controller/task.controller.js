"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRoutes = void 0;
const express_1 = __importDefault(require("express"));
const task_modeel_1 = require("../models/task.modeel");
exports.taskRoutes = express_1.default.Router();
exports.taskRoutes.post("/create-task", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield task_modeel_1.Task.create(data);
        res.status(201).json({
            success: true,
            message: "Task Created Done",
            totalData: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err === null || err === void 0 ? void 0 : err.message,
            totalError: err,
        });
    }
}));
exports.taskRoutes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield task_modeel_1.Task.find().populate("user");
        res.status(201).json({
            success: true,
            message: "Task Get Done",
            totalData: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err === null || err === void 0 ? void 0 : err.message,
            totalError: err,
        });
    }
}));
exports.taskRoutes.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield task_modeel_1.Task.findById(id).populate("user");
        res.status(201).json({
            success: true,
            message: "Task Get Done",
            totalData: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err === null || err === void 0 ? void 0 : err.message,
            totalError: err,
        });
    }
}));
exports.taskRoutes.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = yield task_modeel_1.Task.findByIdAndUpdate(id, data, {
            new: true,
        });
        res.status(201).json({
            success: true,
            message: "Task Update Done",
            totalData: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err === null || err === void 0 ? void 0 : err.message,
            totalError: err,
        });
    }
}));
exports.taskRoutes.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield task_modeel_1.Task.findByIdAndDelete(id);
        res.status(201).json({
            success: true,
            message: "Task Delete Done",
            totalData: null,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err === null || err === void 0 ? void 0 : err.message,
            totalError: err,
        });
    }
}));
