"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class TokenService {
    generateToken(dto) {
        const accessToken = jsonwebtoken_1.default.sign(dto, process.env.JWT_ACCESS_SECRET, { expiresIn: '15m' });
        const refreshToken = jsonwebtoken_1.default.sign(dto, process.env.JWT_REFRESH_SECRET, { expiresIn: '15d' });
        return {
            accessToken,
            refreshToken
        };
    }
    saveToken(id, refreshToken) {
    }
}
exports.tokenService = new TokenService();
