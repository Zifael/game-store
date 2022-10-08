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
const token_service_1 = __importDefault(require("./token-service"));
const { User, Role } = models_1.default;
class UserService {
    createTokenAndSaveDB(user) {
        return __awaiter(this, void 0, void 0, function* () {
            // create new object : {email: user.email, RoleId: role.id}
            const userDto = new user_dto_1.UserDto(user);
            // create tokents (refresh and access)
            const tokens = token_service_1.default.generateToken(Object.assign({}, userDto));
            // save refresh token in db
            yield token_service_1.default.saveToken(user.id, tokens.refreshToken);
            return Object.assign({ user: userDto }, tokens);
        });
    }
    registration(email, password) {
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
            console.log(role.id, 'VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV');
            const user = yield User.create({ email, password: hasPassword, RoleId: role.id });
            return this.createTokenAndSaveDB(user);
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User.findOne({ where: { email } });
            if (!user) {
                throw api_error_1.ApiError.BadRequest('User not found');
            }
            // Decrypts the password and returns true if the password matches from the database
            const hasPassword = bcrypt_1.default.compareSync(password, user.password);
            if (!hasPassword) {
                throw api_error_1.ApiError.BadRequest('Invalid password');
            }
            return this.createTokenAndSaveDB(user);
        });
    }
    logout(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenData = yield token_service_1.default.removeToken(refreshToken);
            return tokenData;
        });
    }
    refresh(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!refreshToken) {
                throw api_error_1.ApiError.UnauthorizedError();
            }
            const userData = token_service_1.default.validateRefreshToken(refreshToken);
            // Find token in db
            const findToken = yield token_service_1.default.findToken(refreshToken);
            // If the Refreshtoken is not found in the database and the validation fails,  returns an error
            if (!userData || !findToken) {
                throw api_error_1.ApiError.UnauthorizedError();
            }
            const user = yield User.findOne({ where: { email: userData.email } });
            token_service_1.default.removeToken(refreshToken);
            return this.createTokenAndSaveDB(user);
        });
    }
}
exports.UserService = UserService;
exports.default = new UserService();
