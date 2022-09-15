"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const userRouter = (0, express_1.Router)();
userRouter.post('/registration', userController_1.default.registration);
userRouter.post('/login', userController_1.default.login);
userRouter.get('/auth', userController_1.default.auth);
exports.default = userRouter;
