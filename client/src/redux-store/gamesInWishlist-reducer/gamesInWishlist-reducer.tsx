import { iGame } from "../Games-reducer/type-gameState/type-gameState"

const SET_GAME_IN_WISHLIST = 'SET_GAME_IN_WISHLIST'
const REMOVE_GAME_FROM_WISHLIST = 'REMOVE_GAME_FROM_WISHLIST'

interface initialState {
    gamesInWishlist: Array<iGame>
}

const inintalState: initialState = {
    gamesInWishlist: []
}

const GameInWishlistReducer = (state = inintalState, action: any) => {
    switch(action.type){
        case SET_GAME_IN_WISHLIST:
            const haveGame = state.gamesInWishlist.some(game => game.id === action.game.id)       
            console.log(state.gamesInWishlist)      
            return {
                ...state,
                gamesInWishlist: haveGame === false ? [...state.gamesInWishlist, action.game] : state.gamesInWishlist

            }
        case REMOVE_GAME_FROM_WISHLIST:
            return {
                ...state,
                gamesInWishlist: state.gamesInWishlist.filter(game => game.id !== action.id)
            }
        default:
            return state
    }
}

export const setGameInWishlist = (game: iGame) => ({type: SET_GAME_IN_WISHLIST, game})
export const removeGameFromWishlist = (id: number) => ({type: REMOVE_GAME_FROM_WISHLIST, id})

export default GameInWishlistReducer