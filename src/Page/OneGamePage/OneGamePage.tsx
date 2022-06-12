import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { oneGame } from '../../Components/Selectors/Selectors'
import './OneGamePage.css'
import {useNavigate, useParams} from 'react-router-dom'
import { setOneGame } from '../../redux-store/Games-reducer/game-reducer'
import { AppDispatch } from '../../redux-store/redux'
import ButtonAddGameInBasket from '../../Components/ButtonAddGameInBasket/ButtonAddGameInBasket'
import gameStoreImg from '../../Img/game-store.png'
import LinkToBasketIcon from '../../Components/LinkToBasketIcon/LinkToBasketIcon'
import ButtonAddGameInWishlist from '../../Components/ButtonAddGameInWishlist/ButtonAddGameInWishlist'

interface UserParams {
    id: string
}

const OneGamePage = () => { 

    const {id} = useParams<keyof UserParams>() as UserParams

    const dispatch = useDispatch<AppDispatch>()             
    dispatch( setOneGame( Number(id)) ) 
    const navigate = useNavigate()
     
    const game = useSelector(oneGame)

    const gameImgStart = game ? game.infoGameImg[0] : null    
    const [selectedImg, setSelectedImg] = useState(gameImgStart)    

    if(!game) {
        return <h1>error</h1>
    }

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
            <div className='oneGame__header'>                
                <LinkToBasketIcon />
            </div>
            {game && 
                <div>
                    <header className='oneGame__title'>{game.nameGame}</header>
                    <div className='oneGame__block'>
                        <div className='oneGame__block__img'>
                            <img className='oneGame__main__img' src={selectedImg.img}/>
                            <div className='oneGame__imgs'>
                                <div onClick={() => clickPrevImage()} className='oneGame__block__arrow__left'>
                                    <div className='oneGame__arrow__left'>&#60;</div>
                                </div>
                                {game.infoGameImg.map((imgGame: any) => 
                                    <img 
                                        key={imgGame.id}
                                        onClick={() => clickImageInfo(imgGame.id)} 
                                        className={`oneGame_img ${selectedImg.id === imgGame.id ? `oneGame_img__active` : ''}`} src={imgGame.img}
                                    />
                                )} 
                                <div onClick={() => clickNextImage()} className='oneGame__block__arrow__right'>
                                    <div className='oneGame__arrow__right'>&#62;</div>
                                </div>                       
                            </div>
                        </div>
                        <div className='oneGame__block__description'>
                            <img className='oneGame__description__img' src={game.img} />
                            <div className='oneGame__price'>{game.price} руб.</div>
                            <div className='oneGame__block__Button'>
                                <button className='oneGame__buyButton'>Купить сейчас</button>
                            </div>
                            <ButtonAddGameInBasket game={game}/>
                            <ButtonAddGameInWishlist game={game} />          
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