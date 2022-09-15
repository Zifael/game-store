import { Request, Response } from "express"



export interface typeResponse extends Response {}


export interface TypeRequestBody<T> extends Request {
    body: T
}

export interface IReqRegistationOrLogin {    
    readonly email: string | undefined     
    readonly password: string | undefined
}

export interface IPayload {
    email: string,
    RoleId: number
}




