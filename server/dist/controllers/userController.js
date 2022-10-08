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
const models_1 = __importDefault(require("../models/models"));
const user_service_1 = __importDefault(require("../service/user-service"));
const api_error_1 = require("../exceptions/api-error");
const { User, Role, Token } = models_1.default;
class UserController {
    registration(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                // return object { user: email, roleId, refreshToken, accessToken}
                const userData = yield user_service_1.default.registration(email, password);
                // add token in cookie
                res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
                res.json(userData);
            }
            catch (error) {
                next(error);
            }
        });
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const userData = yield user_service_1.default.login(email, password);
                res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
                res.json(userData);
            }
            catch (error) {
                next(error);
            }
        });
    }
    logout(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { refreshToken } = req.cookies;
                if (!refreshToken) {
                    throw api_error_1.ApiError.UnauthorizedError();
                }
                // Clear cookies and remove a refreshToken from the db             
                user_service_1.default.logout(refreshToken);
                res.clearCookie('refreshToken');
                return res.json({ message: 'exit completed successfully' });
            }
            catch (error) {
                next(error);
            }
        });
    }
    refresh(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { refreshToken } = req.cookies;
                const userData = yield user_service_1.default.refresh(refreshToken);
                res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
                res.json(userData);
            }
            catch (error) {
                next(error);
            }
        });
    }
    auth(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield User.findAll({ include: [
                        {
                            model: Role
                        },
                        {
                            model: Token
                        }
                    ] });
                res.json(users);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = new UserController();
