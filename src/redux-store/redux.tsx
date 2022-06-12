import {combineReducers, createStore} from 'redux'
import gameReducer from './Games-reducer/game-reducer'
import GameInBasketReducer from './gamesInBasket-reducer/gamesInBasket-reducer'
import GameInWishlistReducer from './gamesInWishlist-reducer/gamesInWishlist-reducer'



const rootReducer = combineReducers({
    gameState : gameReducer,
    gamesInBasket: GameInBasketReducer,
    gamesInWishlist: GameInWishlistReducer
})

export type iRootReducer = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

const store = createStore(rootReducer)


export default store