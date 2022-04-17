import React from 'react'
import { iRootReducer } from '../../redux-store/redux'



export const games = (state: iRootReducer) => state.gameState.game
export const oneGame = (state: iRootReducer) => state.gameState.gameOne
export const gamesGenres = (state: iRootReducer) => state.gameState.gameGenre
export const gamesInBasket = (state: iRootReducer) => state.gamesInBasket.gameInBasket