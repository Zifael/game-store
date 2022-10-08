import { IPayload } from "../types/user/types";


export class UserDto {    
    readonly email: string;
    readonly RoleId: number

    constructor(model: IPayload) {        
        this.email = model.email
        this.RoleId = model.RoleId
    }
} 