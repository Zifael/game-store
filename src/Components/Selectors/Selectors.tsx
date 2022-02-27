import React from 'react'
import { iRootReducer } from '../../redux-store/redux'



export const games = (state: iRootReducer) => state.gameState.game
export const oneGame = (state: iRootReducer) => state.gameState.gameOne