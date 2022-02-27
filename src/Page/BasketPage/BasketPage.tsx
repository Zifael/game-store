import React from "react";
import { Container } from "react-bootstrap";
import './BasketPage.css'

const BasketPage = () => {

    const gameBasket = [
        {id:1, nameGame: 'nameGame', price: 1500, img: 'null'},
        {id:2, nameGame: 'nameGame', price: 1000, img: 'null'}, 
    ]

    const gameTopSellers = [
        {id:1, price: 1500, img: 'null'},
        {id:2, price: 1500, img: 'null'},
        {id:3, price: 1500, img: 'null'},
        {id:4, price: 1500, img: 'null'},
    ]

    return (
        <Container className='basket'>           
            <div className='basket__block'>
                <h2 className='basket__title'>Моя Корзина</h2>
                {gameBasket.map(game => 
                    <div key={game.id} className='basket__product'>
                        <div className='basket__gameAndImg'>
                            <img className='basket__game' src={game.img} />
                            <div className='basket__nameGame'>{game.nameGame}</div>
                        </div>
                        <div className='basket__game__info'>
                            <div className='basket__priceGame'>{game.price} руб.</div>                            
                            <div className='basket__delet__game'>Удалить</div>
                        </div>
                    </div>    
                )}
                <div className='basket__price'>
                    <div className='basket__price__taxes__block'>
                        <div className='basket__price__taxes__text'>Налоги</div>
                        <div className='basket__price__taxes'>10 %</div>
                    </div>
                    <div className='basket__price__sum__total__block'>
                        <div>Общая сумма</div>
                        <div className='basket__price__sum__total'>2250 руб.</div>
                    </div>
                    <button className='basket__price__button'>Купить</button>
                </div>
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
        </Container>
    )
}

export default BasketPage