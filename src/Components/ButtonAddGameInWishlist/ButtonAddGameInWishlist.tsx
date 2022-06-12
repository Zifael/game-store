import React from 'react';
import './ButtonAddGameInWishlist.css'
import { useDispatch, useSelector } from 'react-redux';
import { iGame } from '../../redux-store/Games-reducer/type-gameState/type-gameState';
import { AppDispatch } from '../../redux-store/redux';
import { gamesInWishlist } from '../Selectors/Selectors';
import { removeGameFromWishlist, setGameInWishlist } from '../../redux-store/gamesInWishlist-reducer/gamesInWishlist-reducer';


interface IGameBasket {
    game: iGame
}

const ButtonAddGameInWishlist = ({game} :IGameBasket) => {
   
   
    const dispatch = useDispatch<AppDispatch>()
    const gameInWishlist = useSelector(gamesInWishlist)
   

    const addGameInWishlist = () => {        
        dispatch(setGameInWishlist(game))               
    }
    const removeGameFromWishlistButton = () => {
        dispatch(removeGameFromWishlist(game.id))
    }

    return (        
        <div className='oneGame__block__Button'>
            {gameInWishlist.some(gb => gb.id === game.id) 
                ? <button onClick={removeGameFromWishlistButton} className='removeWishlistButton'>Убрать из списка желаемого</button> 
                : <button onClick={addGameInWishlist} className='wishListButton'>В список желаемого</button>             
            }
        </div>      
    )
}

export default ButtonAddGameInWishlist;