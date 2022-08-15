import React from "react";
import { useNavigate } from "react-router-dom";
import './LinkToBasketIcon.css'
import imgBasket from '../../Img/basket.png'
import { useSelector } from "react-redux";
import {gamesInBasket} from '../Selectors/Selectors'

const LinkToBasketIcon = () => {

    const navigate = useNavigate()
    const gamesInBasketAmount = useSelector(gamesInBasket)

    return (
        <div className='block__img__basket__icons'>
            <p className='img__basket__amount__game'>{gamesInBasketAmount.length}</p>
            <img className='img__basket__icons' onClick={() => navigate('/basket')} src={imgBasket} />
            
        </div>
    )
}

export default LinkToBasketIcon;