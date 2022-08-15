import { iGame } from "../Games-reducer/type-gameState/type-gameState"

const SET_GAME_IN_BASKET = 'SET_GAME_IN_BASKET'
const REMOVE_GAME_IN_BASKET = 'REMOVE_GAME_IN_BASKET'

interface initialState {
    gameInBasket: Array<iGame>
}

const inintalState: initialState = {
    gameInBasket: []
}


const GameInBasketReducer = (state = inintalState, action: any) => {
    switch (action.type) {
        case SET_GAME_IN_BASKET:
            const haveGame = state.gameInBasket.some(game => game.id === action.game.id)             
            return {
                ...state,
                gameInBasket: haveGame === false ? [...state.gameInBasket, action.game] : state.gameInBasket

            }
        case REMOVE_GAME_IN_BASKET:
            return {
                ...state,
                gameInBasket: state.gameInBasket.filter(game => game.id !== action.id)
            }
        default: 
            return state
    }
}

export const setGameInBasket = (game: iGame) => ({type: SET_GAME_IN_BASKET, game})
export const removeGameInBasket = (id: number) => ({type: REMOVE_GAME_IN_BASKET, id})

export default GameInBasketReducer  