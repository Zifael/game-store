import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gameReducer from './Games-reducer/game-reducer'
import GameInBasketReducer from './gamesInBasket-reducer/gamesInBasket-reducer'
import GameInWishlistReducer from './gamesInWishlist-reducer/gamesInWishlist-reducer'
import userReducer from './user-reducer/user-reducer'



const rootReducer = combineReducers({
    gameState : gameReducer,
    gamesInBasket: GameInBasketReducer,
    gamesInWishlist: GameInWishlistReducer,
    user: userReducer,
})

export type iRootReducer = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
    reducer: rootReducer
})


export default store