import jsonwebtoken from 'jsonwebtoken'
import { UserDto } from '../dto/user-dto'
import { ApiError } from '../exceptions/api-error'
import model from '../models/models'
import { ITokens, UserIDJwtPayload } from '../types/user/types'
const {Token} = model

class TokenService {
    generateToken(dto: UserDto): ITokens {
        const accessToken = jsonwebtoken.sign(dto, process.env.JWT_ACCESS_SECRET as string, {expiresIn: '15m'})
        const refreshToken = jsonwebtoken.sign(dto, process.env.JWT_REFRESH_SECRET as string, {expiresIn: '15d'})
        return {
            accessToken,
            refreshToken
        }
    }
    // Save token in db
    async saveToken(userId: number, refreshToken: string) {
        const tokenData = await Token.findOne({where: {UserId: userId}})        
        if (tokenData) {
            tokenData.refreshToken = refreshToken
            await tokenData.save()
        }
        const token = await Token.create({UserId: userId, refreshToken})
        return token
    }
    // Remove token from db
    async removeToken(refreshToken: string) {        
        const tokenData = await Token.destroy({where: {refreshToken}}) 
        return tokenData 
    }

    // Find token in db
    async findToken(refreshToken: string) {
        const tokenData = await Token.findOne({where: {refreshToken}})
        return tokenData
    }

    validateAccessToken(token: string) {
        try {
            const userData = <UserIDJwtPayload>jsonwebtoken.verify(token, process.env.JWT_ACCESS_SECRET!)
            return userData
        } catch (error) {
            return null
        }
    }

    validateRefreshToken(token: string) {
        try {
            const userData = <UserIDJwtPayload>jsonwebtoken.verify(token, process.env.JWT_REFRESH_SECRET!)
            return userData
        } catch (error) {
            return null
        }
    }
    
}


export default new TokenService()