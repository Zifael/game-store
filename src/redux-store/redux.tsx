import {combineReducers, createStore} from 'redux'
import gameReducer from './Games-reducer/game-reducer'
import GameInBasketReducer from './gamesInBasket-reducer/gamesInBasket-reducer'



const rootReducer = combineReducers({
    gameState : gameReducer,
    gamesInBasket: GameInBasketReducer
})

export type iRootReducer = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

const store = createStore(rootReducer)


export default store