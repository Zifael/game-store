import { cp } from 'fs/promises'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { oneGame } from '../../Components/Selectors/Selectors'
import './OneGamePage.css'
import {useParams} from 'react-router-dom'
import {games} from '../../Components/Selectors/Selectors'
import { setOneGame } from '../../redux-store/Games-redux/game-reducer'
import { AppDispatch } from '../../redux-store/redux'


interface UserParams {
    id: string
}

const OneGamePage = () => { 

    const {id} = useParams<keyof UserParams>() as UserParams

    const dispatch = useDispatch<AppDispatch>()             
    dispatch(setOneGame(Number(id))) 
     
    const game = useSelector(oneGame)    

    
    const [selectedImg, setSelectedImg] = useState(game.infoGameImg[0])

    const clickImageInfo = (id: number) => {
        setSelectedImg(game.infoGameImg[id - 1])
    }    
        
    const clickNextImage = () => {
        if (selectedImg.id < 5) {
            setSelectedImg(game.infoGameImg[(selectedImg.id - 1) + 1])
        } else {
            setSelectedImg(game.infoGameImg[0])
        }
    }

    const clickPrevImage = () => {
        if (selectedImg.id > 1) {
            setSelectedImg(game.infoGameImg[(selectedImg.id - 1) - 1])
        } else {
            setSelectedImg(game.infoGameImg[game.infoGameImg.length - 1])
        }
    }

    return (
        <Container className='OneGame'>
            {game && 
            <div>
            <header className='oneGame__title'>{game.nameGame}</header>
            <div className='oneGame__block'>
                <div className='oneGame__block__img'>
                    <img className='oneGame__main__img' src={selectedImg.img}/>
                    <div className='oneGame__imgs'>
                        <div onClick={() => clickPrevImage()} className='oneGame__block__arrow__left'>
                            <img className='oneGame__arrow__left' src={'https://s3-alpha-sig.figma.com/img/10c9/4d78/f392ac8dc7ddea78d1982699df6311b0?Expires=1646611200&Signature=Jqym8t9EnVUyW74yUWKq~d9WEm0Jf9NR0Cb~iguafNeewD5pTqc19JI18MXjHlJHSHsNUZRUyAxmgoJ1Xc-QbJnch~olZ3lHdYbwK1fGdLuau37~8iPIkCOXnrc707nSGuitUSAik-GqAbRqfyfMc2B7FKq1X000wlzY2y5QaA8laCGIgk8LxR2-52QiFxBaYmg5WNbbaNTaeAwyY1sswj95lqGDXoB-yALPuMnh8YkwZWsxcOh~jFymN26v~yFJz8rPn1fb8tU7wNbZWOwquj9hvRopRzoG-q~guN9qisylkjZg9GwZfEh7y-VY7sR712ybyFFVK9DcYTKhZCn6rg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}/>
                        </div>
                        {game.infoGameImg.map((imgGame: any) => 
                            <img 
                                key={imgGame.id}
                                onClick={() => clickImageInfo(imgGame.id)} 
                                className={`oneGame_img ${selectedImg.id === imgGame.id ? `oneGame_img__active` : ''}`} src={imgGame.img}
                            />
                        )} 
                        <div onClick={() => clickNextImage()} className='oneGame__block__arrow__right'>
                            <img className='oneGame__arrow__right' src={'https://s3-alpha-sig.figma.com/img/10c9/4d78/f392ac8dc7ddea78d1982699df6311b0?Expires=1646611200&Signature=Jqym8t9EnVUyW74yUWKq~d9WEm0Jf9NR0Cb~iguafNeewD5pTqc19JI18MXjHlJHSHsNUZRUyAxmgoJ1Xc-QbJnch~olZ3lHdYbwK1fGdLuau37~8iPIkCOXnrc707nSGuitUSAik-GqAbRqfyfMc2B7FKq1X000wlzY2y5QaA8laCGIgk8LxR2-52QiFxBaYmg5WNbbaNTaeAwyY1sswj95lqGDXoB-yALPuMnh8YkwZWsxcOh~jFymN26v~yFJz8rPn1fb8tU7wNbZWOwquj9hvRopRzoG-q~guN9qisylkjZg9GwZfEh7y-VY7sR712ybyFFVK9DcYTKhZCn6rg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}/>
                        </div>                       
                    </div>
                </div>
                <div className='oneGame__block__description'>
                    <img className='oneGame__description__img' src={game.img} />
                    <div className='oneGame__price'>{game.price} руб.</div>
                    <div className='oneGame__block__Button'>
                        <button className='oneGame__buyButton'>Купить сейчас</button>
                    </div>
                    <div className='oneGame__block__Button'>
                        <button className='oneGame__addBasketButton'>Добавить в корзину</button>
                    </div> 
                    <div className='oneGame__block__Button'>
                        <button className='oneGame__wishListButton'>В список желаемого</button>            
                    </div>           
                    <div className='oneGame__block__info'>
                        <div>Разработчик</div>
                        <div>{game.developer}</div>
                    </div>
                    <div className='oneGame__line'></div>
                    <div className='oneGame__block__info'>
                        <div>Издатель</div>
                        <div>{game.publisher}</div>
                    </div>
                    <div className='oneGame__line'></div>
                    <div className='oneGame__block__info'>
                        <div>Дата выхода</div>
                        <div>{game.releaseDate.map((date:any) => date)}</div>
                    </div>
                    <div className='oneGame__line'></div>
                </div>
            </div>
            </div>
            }       
        </Container>
    )
}

export default OneGamePage