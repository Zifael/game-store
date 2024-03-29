"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
class ApiError extends Error {
    constructor(status, message, errors) {
        super(message);
        this.status = status;
        this.errors = errors;
    }
    static UnauthorizedError() {
        return new ApiError(401, 'User not authorized');
    }
    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors);
    }
    static invalidValidation(message) {
        return new ApiError(400, message);
    }
}
exports.ApiError = ApiError;
