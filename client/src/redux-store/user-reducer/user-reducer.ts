import { IInitialStateUser } from "../../types/user/IUser"

const SET_LOGIN = 'SET_LOGIN'


const initialState: IInitialStateUser = {
    email: ''
}

const userReducer = (state = initialState, action: any) => {
    switch(action.type) {
        default: 
         return state
            
    }
}


export default userReducer 