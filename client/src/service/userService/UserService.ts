import { AxiosResponse } from "axios";
import $api from "../../API/api";
import { IUser } from "../../types/ApiTypes/authTypes/IUser";


export default class UserServic {
    static async getUser(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/user/auth')
    }
}