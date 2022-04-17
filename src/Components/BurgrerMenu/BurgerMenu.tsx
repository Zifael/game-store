import React from 'react'
import { useNavigate } from 'react-router-dom'
import './BurgerMenu.css'

const BurgerMenu = () => {

    const navigate = useNavigate()
    const arrCategories = ['Новинки', 'Лидеры продаж', 'Скидки', 'Скоро выйдут']
    const arrGenres = ['Приключение', 'Экшен', 'Симулятор', 'Стратегия', 'Гонки', 'Инди', 'ММО', 'Спортивная игра']
    
    
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
                {arrGenres.map(genre => 
                    <li onClick={() => navigate(`/genre/${genre}`)} className='drawer__descriptions'>{genre}</li>
                )}
            </ul>
        </div>
    )
}


export default BurgerMenu