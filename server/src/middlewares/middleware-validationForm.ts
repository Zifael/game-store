import { IReqRegistationOrLogin } from "../types/user/types";
import { NextFunction, Response } from "express"
import { ApiError } from "../exceptions/api-error";
import { TypeRequestBody } from "../types/types";

const middlewareValidationForm = (req: TypeRequestBody<IReqRegistationOrLogin>, res: Response, next: NextFunction) => {
    try {
        const {email, password} = req.body      
        if (!email || email.indexOf('@') < 0) {
            throw ApiError.invalidValidation('Email entered incorrectly')
        }
        if (!password) {
            throw ApiError.invalidValidation('Enter password')
        }
        if (password.length < 5) {
            throw ApiError.invalidValidation('The password is too short')
        }
        next()
    } catch (error) {
        throw next(error)
    }
}

export default middlewareValidationForm

