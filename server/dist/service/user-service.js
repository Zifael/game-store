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
exports.UserService = void 0;
const user_dto_1 = require("../dto/user-dto");
const api_error_1 = require("../exceptions/api-error");
const models_1 = __importDefault(require("../models/models"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const token_service_1 = require("./token-service");
const { User, Role } = models_1.default;
class UserService {
    static registration(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email || !password) {
                throw api_error_1.ApiError.BadRequest('No email or password');
            }
            const candidate = yield User.findOne({ where: { email } });
            // If the user already exists, we issue an error on message
            if (candidate) {
                throw api_error_1.ApiError.BadRequest('This user already exists');
            }
            const hasPassword = yield bcrypt_1.default.hash(password, 5);
            const role = yield Role.findOne({ where: { value: 'USER' } });
            const user = yield User.create({ email, password: hasPassword, RoleId: role.id });
            // create new object : {email: user.email, RoleId: role.id}
            const userDto = new user_dto_1.UserDto(user);
            // create tokents (refresh and access)
            const tokens = token_service_1.tokenService.generateToken(Object.assign({}, userDto));
            // add token in cookie
            return Object.assign({ user: userDto }, tokens);
        });
    }
}
exports.UserService = UserService;
