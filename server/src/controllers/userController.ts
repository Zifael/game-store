import { IPayload, IReqRegistationOrLogin, TypeRequestBody, typeResponse } from "../types/types"
import bcrypt from 'bcrypt'
import model from "../models/models"
import { tokenService } from "../service/token-service"
import { UserDto } from "../dto/user-dto"
import { NextFunction } from "express"
import { UserService } from "../service/user-service"

const {User, Role} = model

class UserController {
    async registration(req: TypeRequestBody<IReqRegistationOrLogin>, res: typeResponse, next: NextFunction) {
        try {
            const {email, password} = req.body

            // return object { user: email, roleId, refreshToken, accessToken}
            const userData = await UserService.registration(email, password)            
            // add token in cookie
            res.cookie('refreshToken', userData.refreshToken, {httpOnly: true})            
            res.json(userData)
        } catch (error) {            
            next(error)
        }       
    }
    async login(req: TypeRequestBody<IReqRegistationOrLogin>, res: any, next: NextFunction) {
        try {
            const {email, password} = req.body

            const user = await User.findOne({where: {email}})
            if (!user) {
                return res.status(404).json('User not found')
            }
                        
            // Decrypts the password and returns true if the password matches from the database
            const hasPassword = bcrypt.compareSync(password!, user!.password)        
            if (!hasPassword) {
                return res.status(404).json('Invalid password')                
            }             
            res.status(200).json('Login was successful')
        } catch (error) {
            next(error)
        }
    }
    async auth(req: any, res: any, next: any) {
       
        try {
            const users = await Role.findAll({include: {model: User}})
            res.json(users)
        } catch (error) {
            next(error)
        }
    }
}

export default new UserController()