import { createSlice } from "@reduxjs/toolkit"
import { iGame } from "../Games-reducer/type-gameState/type-gameState"


interface initialState {
    gameInBasket: Array<iGame>
}

const GameInBasketReducer = createSlice({
    name: 'GameInBasketReducer',
    initialState: {
        gameInBasket: []
    } as initialState,
    reducers: {
        setGameInBasket(state, action) {
            const haveGame = state.gameInBasket.some(game => game.id === action.payload.id)
            state.gameInBasket = haveGame === false ? [...state.gameInBasket, action.payload] : state.gameInBasket
        },
        removeGameInBasket(state, action) {
            state.gameInBasket = state.gameInBasket.filter(game => game.id !== action.payload)
        }
    }

})


export const {removeGameInBasket, setGameInBasket} = GameInBasketReducer.actions
export default GameInBasketReducer.reducer  