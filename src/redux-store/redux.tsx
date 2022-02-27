import {combineReducers, createStore} from 'redux'
import gameReducer from './Games-redux/game-reducer'



const rootReducer = combineReducers({
    gameState : gameReducer
})

export type iRootReducer = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

const store = createStore(rootReducer)


export default store