import { TypeRequestBody } from "../types/types"
import { IReqCookie, IReqRegistationOrLogin } from "../types/user/types"
import model from "../models/models"
import { NextFunction, Response } from "express"
import UserService from "../service/user-service"
import { ApiError } from "../exceptions/api-error"


const {User, Role, Token} = model

class UserController {
    async registration(req: TypeRequestBody<IReqRegistationOrLogin>, res: Response, next: NextFunction) {
        try {
            const {email, password} = req.body

            // return object { user: email, roleId, refreshToken, accessToken}
            const userData = await UserService.registration(email, password)            
            // add token in cookie
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})            
            res.json(userData)
        } catch (error) {            
            next(error)
        }       
    }
    async login(req: TypeRequestBody<IReqRegistationOrLogin>, res: Response, next: NextFunction) {
        try {
            const {email, password} = req.body
            
            const userData = await UserService.login(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            res.json(userData)
        } catch (error) {
            next(error)
        }
    }

    async logout(req: IReqCookie, res: Response, next: NextFunction) {        
        try {
            const {refreshToken} = req.cookies     
            if (!refreshToken) {
                throw ApiError.UnauthorizedError()
            }     
            // Clear cookies and remove a refreshToken from the db             
            UserService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json({message: 'exit completed successfully'})
        } catch (error) {
            next(error)
        }
    }

    async refresh(req: IReqCookie, res: Response, next: NextFunction) {
        try {
            const {refreshToken} = req.cookies            
            const userData = await UserService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            res.json(userData)
        } catch (error) {
            next(error)
        }
    }

    async auth(req: any, res: any, next: any) {       
        try {
            const users = await User.findAll({include: [
                {
                    model: Role
                },
                {
                    model: Token
                }
            ]})
            res.json(users)
        } catch (error) {
            next(error)
        }
    }
}

export default new UserController()