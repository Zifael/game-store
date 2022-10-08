"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth-middleware"));
const middleware_validationForm_1 = __importDefault(require("../middlewares/middleware-validationForm"));
const userRouter = (0, express_1.Router)();
userRouter.post('/registration', middleware_validationForm_1.default, userController_1.default.registration);
userRouter.post('/login', middleware_validationForm_1.default, userController_1.default.login);
userRouter.post('/logout', userController_1.default.logout);
userRouter.get('/refresh', userController_1.default.refresh);
userRouter.get('/auth', auth_middleware_1.default, userController_1.default.auth);
exports.default = userRouter;
