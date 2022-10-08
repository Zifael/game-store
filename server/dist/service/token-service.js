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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = __importDefault(require("../models/models"));
const { Token } = models_1.default;
class TokenService {
    generateToken(dto) {
        const accessToken = jsonwebtoken_1.default.sign(dto, process.env.JWT_ACCESS_SECRET, { expiresIn: '15m' });
        const refreshToken = jsonwebtoken_1.default.sign(dto, process.env.JWT_REFRESH_SECRET, { expiresIn: '15d' });
        return {
            accessToken,
            refreshToken
        };
    }
    // Save token in db
    saveToken(userId, refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenData = yield Token.findOne({ where: { UserId: userId } });
            if (tokenData) {
                tokenData.refreshToken = refreshToken;
                yield tokenData.save();
            }
            const token = yield Token.create({ UserId: userId, refreshToken });
            return token;
        });
    }
    // Remove token from db
    removeToken(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenData = yield Token.destroy({ where: { refreshToken } });
            return tokenData;
        });
    }
    // Find token in db
    findToken(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenData = yield Token.findOne({ where: { refreshToken } });
            return tokenData;
        });
    }
    validateAccessToken(token) {
        try {
            const userData = jsonwebtoken_1.default.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData;
        }
        catch (error) {
            return null;
        }
    }
    validateRefreshToken(token) {
        try {
            const userData = jsonwebtoken_1.default.verify(token, process.env.JWT_REFRESH_SECRET);
            return userData;
        }
        catch (error) {
            return null;
        }
    }
}
exports.default = new TokenService();
