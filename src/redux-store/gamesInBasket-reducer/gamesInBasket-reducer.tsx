import { iGame } from "../Games-reducer/type-gameState/type-gameState"


interface initialState {
    gameInBasket: iGame | null
}

const inintalState: any = {
    gameInBasket: null
}


const GameInBasketReducer = (state = inintalState, action: any) => {
    switch (action.type) {
        default: 
            return state
    }
}


export default GameInBasketReducer