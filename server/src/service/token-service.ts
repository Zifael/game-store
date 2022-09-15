import jsonwebtoken from 'jsonwebtoken'
import { UserDto } from '../dto/user-dto'


class TokenService {
    generateToken(dto: UserDto) {
        const accessToken = jsonwebtoken.sign(dto, process.env.JWT_ACCESS_SECRET as string, {expiresIn: '15m'})
        const refreshToken = jsonwebtoken.sign(dto, process.env.JWT_REFRESH_SECRET as string, {expiresIn: '15d'})
        return {
            accessToken,
            refreshToken
        }
    }
    saveToken(id: any, refreshToken: any) {
        
    }
}


export const tokenService = new TokenService()