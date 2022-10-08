import { NextFunction, Response } from "express";
import { ApiError } from "../exceptions/api-error";
import tokenService from "../service/token-service";
import { IReqHeader } from "../types/user/types";



const authMiddleware = (req: IReqHeader, res: Response, next: NextFunction) => {
    try {
        const authorizationHeader = req.headers.authorization
        if (!authorizationHeader) {
            return next(ApiError.UnauthorizedError())
        }
        const accessToken = authorizationHeader.split(' ')[1]
        if (!accessToken) {
            return next(ApiError.UnauthorizedError())
        }
        const userData = tokenService.validateAccessToken(accessToken)
        if (!userData) {
            return next(ApiError.UnauthorizedError())
        }
        next()
    } catch (error) {
        return next(ApiError.UnauthorizedError())
    }
}

export default authMiddleware