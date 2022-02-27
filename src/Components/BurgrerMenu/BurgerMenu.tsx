import React from 'react'
import './BurgerMenu.css'

const BurgerMenu = () => {

    return (
        <div className='drawer'>
            <div className='drawer__title__сategories'>Категории</div>
            <ul className='drawer__сategories__descriptions'>
                <li className='drawer__descriptions'>Новинки</li>
                <li className='drawer__descriptions'>Лидеры продаж</li>
                <li className='drawer__descriptions'>Скидки</li>
                <li className='drawer__descriptions'>Скоро выйдут</li>
            </ul>
            <div className='drawer__title__genre'>Поиск по жанру</div>
            <ul className='drawer__сategories__descriptions'>
                <li className='drawer__descriptions'>Приключение</li>
                <li className='drawer__descriptions'>Экшен</li>
                <li className='drawer__descriptions'>Симулятор</li>
                <li className='drawer__descriptions'>Стратегия</li>
                <li className='drawer__descriptions'>Гонки</li>
                <li className='drawer__descriptions'>Инди</li>
                <li className='drawer__descriptions'>ММО</li>
                <li className='drawer__descriptions'>Спортивная игра</li>
            </ul>
        </div>
    )
}


export default BurgerMenu