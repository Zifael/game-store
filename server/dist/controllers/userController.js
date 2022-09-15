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
const bcrypt_1 = __importDefault(require("bcrypt"));
const models_1 = __importDefault(require("../models/models"));
const user_service_1 = require("../service/user-service");
const { User, Role } = models_1.default;
class UserController {
    registration(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                // return object { user: email, roleId, refreshToken, accessToken}
                const userData = yield user_service_1.UserService.registration(email, password);
                // add token in cookie
                res.cookie('refreshToken', userData.refreshToken, { httpOnly: true });
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
                const user = yield User.findOne({ where: { email } });
                if (!user) {
                    return res.status(404).json('User not found');
                }
                // Decrypts the password and returns true if the password matches from the database
                const hasPassword = bcrypt_1.default.compareSync(password, user.password);
                if (!hasPassword) {
                    return res.status(404).json('Invalid password');
                }
                res.status(200).json('Login was successful');
            }
            catch (error) {
                next(error);
            }
        });
    }
    auth(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield Role.findAll({ include: { model: User } });
                res.json(users);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = new UserController();
