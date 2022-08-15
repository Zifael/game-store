import React from 'react';
import './ButtonAddGameInBasket.css'
import { useDispatch, useSelector } from 'react-redux';
import { iGame } from '../../redux-store/Games-reducer/type-gameState/type-gameState';
import { removeGameInBasket, setGameInBasket } from '../../redux-store/gamesInBasket-reducer/gamesInBasket-reducer';
import { AppDispatch } from '../../redux-store/redux';
import { gamesInBasket } from '../Selectors/Selectors';


interface IGameBasket {
    game: iGame
}

const ButtonAddGameInBasket = ({game} :IGameBasket) => {
   
   
    const dispatch = useDispatch<AppDispatch>()
    const gameInBasket = useSelector(gamesInBasket)
   

    const addGameInBasket = () => {        
        dispatch(setGameInBasket(game))               
    }
    const removeGameFromBasket = () => {
        dispatch(removeGameInBasket(game.id))
    }

    return (        
        <div className='oneGame__block__Button'>
            {gameInBasket.some(gb => gb.id === game.id) 
                ? <button onClick={removeGameFromBasket} className='oneGame__removeBasketButton'>Убрать из корзины</button> 
                :<button onClick={addGameInBasket} className='oneGame__addBasketButton'>Добавить в корзину</button>            
            }
        </div>      
    )
}

export default ButtonAddGameInBasket;