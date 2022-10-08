import { Request } from "express"
import { IncomingHttpHeaders } from "http"
import { JwtPayload } from "jsonwebtoken"

export interface IReqRegistationOrLogin {    
    email: string | undefined     
    password: string | undefined
}

export interface IPayload {
    email: string,
    RoleId: number
}

export interface ITokens {
    accessToken: string, 
    refreshToken: string
}

export interface IReqHeader extends Request {
    headers: IncomingHttpHeaders
}

export interface IReqCookie extends Request {
    cookies: {
        refreshToken: string
    }
}

export interface iReturnUserData {
    user: IPayload,
    accessToken: string
    refreshToken: string
}

export interface userModel {
    id: number
    email: string
    password: string
    RoleId: number | undefined
}

export interface UserIDJwtPayload  extends JwtPayload {
    email: string,
    roleId: number
 }