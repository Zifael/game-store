"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewareError = void 0;
const api_error_1 = require("../exceptions/api-error");
const middlewareError = (err, req, res, next) => {
    console.log('\x1b[33m%s\x1b[0m', `Error: ${err.message}`);
    if (err instanceof api_error_1.ApiError) {
        return res.status(err.status).json({ message: err.message, errors: err.errors });
    }
    return res.status(500).json({ message: 'Unexpected error' });
};
exports.middlewareError = middlewareError;
