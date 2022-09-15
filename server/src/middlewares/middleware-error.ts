import { NextFunction } from "express"
import { ApiError } from "../exceptions/api-error"
import { typeResponse } from "../types/types"

export const middlewareError = (err: ApiError, req: any, res: typeResponse, next: NextFunction) => {
    console.log('\x1b[33m%s\x1b[0m', err.message)
    if (err instanceof ApiError) {
        return res.status(err.status).json({message: err.message, errors: err.errors})
    }
    return res.status(500).json({message: 'Unexpected error'})
}