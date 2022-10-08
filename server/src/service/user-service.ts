import { UserDto } from "../dto/user-dto"
import { ApiError } from "../exceptions/api-error"
import model from "../models/models"
import bcrypt from 'bcrypt'
import { IPayload, iReturnUserData, userModel } from "../types/user/types"
import TokenService from "./token-service"
const {User, Role} = model

export class UserService {

    async createTokenAndSaveDB(user: userModel) {
        // create new object : {email: user.email, RoleId: role.id}
        const userDto = new UserDto(user as IPayload)
        // create tokents (refresh and access)
        const tokens = TokenService.generateToken({...userDto}) 
        // save refresh token in db
        await TokenService.saveToken(user.id, tokens.refreshToken)
        return {
            user: userDto,
            ...tokens           
        }
    }

    async registration(email?: string, password?: string): Promise<iReturnUserData> {
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
        console.log(role!.id, 'VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV')  
        const user = await User.create({email, password: hasPassword, RoleId: role!.id})
        
        return this.createTokenAndSaveDB(user)
    }    

    async login(email?: string, password?: string): Promise<iReturnUserData> {
        const user = await User.findOne({where: {email}})        
        if (!user) {
            throw ApiError.BadRequest('User not found')
        }
        // Decrypts the password and returns true if the password matches from the database
        const hasPassword = bcrypt.compareSync(password!, user.password)    
        if (!hasPassword) {
            throw ApiError.BadRequest('Invalid password')
        }
        return this.createTokenAndSaveDB(user)
    }

    async logout(refreshToken: string) {             
        const tokenData = await TokenService.removeToken(refreshToken)               
        return tokenData
    }
    

    async refresh(refreshToken: string) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }
        const userData = TokenService.validateRefreshToken(refreshToken)
        // Find token in db
        const findToken = await TokenService.findToken(refreshToken)        
        // If the Refreshtoken is not found in the database and the validation fails,  returns an error
        if (!userData || !findToken) {
            throw ApiError.UnauthorizedError()
        }
        const user = await User.findOne({where: {email: userData.email}})
        TokenService.removeToken(refreshToken)
        return this.createTokenAndSaveDB(user!)
    }
    
}


export default new UserService()