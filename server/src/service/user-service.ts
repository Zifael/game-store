import { UserDto } from "../dto/user-dto"
import { ApiError } from "../exceptions/api-error"
import model from "../models/models"
import bcrypt from 'bcrypt'
import { IPayload } from "../types/types"
import { tokenService } from "./token-service"
const {User, Role} = model

export class UserService {

    static async registration(email?: string, password?: string) {
        if (!email || !password) {
            throw ApiError.BadRequest('No email or password')
        }
        const candidate = await User.findOne({where: {email}})
        // If the user already exists, we issue an error on message
        if (candidate) {             
            throw ApiError.BadRequest('This user already exists')
        }
        const hasPassword = await bcrypt.hash(password, 5) 
        const role = await Role.findOne({where: {value: 'USER'}})      
        const user = await User.create({email, password: hasPassword, RoleId: role!.id})
        
        // create new object : {email: user.email, RoleId: role.id}
        const userDto = new UserDto(user as IPayload)
        // create tokents (refresh and access)
        const tokens = tokenService.generateToken({...userDto}) 
        // add token in cookie
        return {
            user: userDto,
            ...tokens           
        }
    }    
    
    
}