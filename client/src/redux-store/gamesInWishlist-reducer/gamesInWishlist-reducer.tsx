import { createSlice } from "@reduxjs/toolkit"
import { iGame } from "../Games-reducer/type-gameState/type-gameState"

const SET_GAME_IN_WISHLIST = 'SET_GAME_IN_WISHLIST'
const REMOVE_GAME_FROM_WISHLIST = 'REMOVE_GAME_FROM_WISHLIST'

interface initialState {
    gamesInWishlist: Array<iGame>
}



const GameInWishlistReducer = createSlice({
    name: 'GameInWishlistReducer',
    initialState: {
        gamesInWishlist: []
    } as initialState,
    reducers: {
        setGameInWishlist(state, action) {
            const haveGame = state.gamesInWishlist.some(game => game.id === action.payload.id)
            state.gamesInWishlist =  haveGame === false ? [...state.gamesInWishlist, action.payload] : state.gamesInWishlist
        },
        removeGameFromWishlist(state, action) {
            state.gamesInWishlist = state.gamesInWishlist.filter(game => game.id !== action.payload)
        }
    }
})

export const {removeGameFromWishlist, setGameInWishlist} = GameInWishlistReducer.actions
export default GameInWishlistReducer.reducer