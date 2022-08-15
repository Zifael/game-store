import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { gamesInBasket } from "../../Components/Selectors/Selectors";
import { removeGameInBasket } from "../../redux-store/gamesInBasket-reducer/gamesInBasket-reducer";
import './BasketPage.css'
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../redux-store/redux";

const BasketPage = () => {

    const gameBasket = useSelector(gamesInBasket)   
    const dispatch = useDispatch<AppDispatch>()
    

    const gameTopSellers = [
        {id:1, price: 1500, img: 'null'},
        {id:2, price: 1500, img: 'null'},
        {id:3, price: 1500, img: 'null'},
        {id:4, price: 1500, img: 'null'},
    ]

    const removeGame = (id: number) => {
        dispatch(removeGameInBasket(id))
    }

    let sum = 0 
    for (let value of gameBasket) {
        sum += value.price
    }
    let sumPercent = Math.round(sum + sum / 100 * 2)

    return (
        <Container className='basket'>             
            <div className='basket__content'>                        
                <div className='basket__block'>
                    <h2 className='basket__title'>Моя Корзина</h2>
                    {gameBasket.length !== 0
                    ? 
                        <div>
                            {gameBasket.map(game => 
                                <div key={game.id} className='basket__product'>
                                    <div className='basket__gameAndImg'>
                                        <img className='basket__game' src={game.img} />
                                        <div className='basket__nameGame'>{game.nameGame}</div>
                                    </div>
                                    <div className='basket__game__info'>
                                        <div className='basket__priceGame'>{game.price} руб.</div>                            
                                        <div onClick={() => removeGame(game.id)} className='basket__delet__game'>Удалить</div>
                                    </div>
                                </div>    
                            )}
                            <div className='basket__price'>
                                <div className='basket__price__taxes__block'>
                                    <div className='basket__price__taxes__text'>Комиссия</div>
                                    <div className='basket__price__taxes'>2 %</div>
                                </div>
                                <div className='basket__price__sum__total__block'>
                                    <div>Общая сумма</div>
                                    <div className='basket__price__sum__total'>{sumPercent} руб.</div>
                                </div>
                                <button className='basket__price__button'>Купить</button>
                            </div>
                        </div> 
                    : 
                        <div className='noGameInBacket'>
                            Корзина Пуста
                        </div>
                    }
                </div>
                <div className='basket__topSellers'>
                    <div className='basket__topSellers__title'>Лидеры продаж</div>
                    {gameTopSellers.map(game => 
                        <div key={game.id}>
                            <img className='basket__topSellers__game__img' src={game.img}/>
                            <div className='basket__topSellers__game__price'>{game.price} руб.</div>
                        </div>
                    )}
                </div>
            </div>
        </Container>
    )
}

export default BasketPage