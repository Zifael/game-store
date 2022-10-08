"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_error_1 = require("../exceptions/api-error");
const middlewareValidationForm = (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || email.indexOf('@') < 0) {
            throw api_error_1.ApiError.invalidValidation('Email entered incorrectly');
        }
        if (!password) {
            throw api_error_1.ApiError.invalidValidation('Enter password');
        }
        if (password.length < 5) {
            throw api_error_1.ApiError.invalidValidation('The password is too short');
        }
        next();
    }
    catch (error) {
        throw next(error);
    }
};
exports.default = middlewareValidationForm;
