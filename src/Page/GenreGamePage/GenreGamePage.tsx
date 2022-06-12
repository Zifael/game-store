import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { gamesGenres, gamesInBasket } from '../../Components/Selectors/Selectors'
import { setGameGenre } from '../../redux-store/Games-reducer/game-reducer'
import './GenreGamePage.css'
import gameStoreImg from '../../Img/game-store.png'
import LinkToBasketIcon from '../../Components/LinkToBasketIcon/LinkToBasketIcon'
import { iGame } from '../../redux-store/Games-reducer/type-gameState/type-gameState'
import { AppDispatch } from '../../redux-store/redux'
import { removeGameInBasket, setGameInBasket } from '../../redux-store/gamesInBasket-reducer/gamesInBasket-reducer'

interface UserParams {
    genreGame: string
}

const GenreGamePage = () => {
    const {genreGame} = useParams<keyof UserParams>() as UserParams 
    const navigate = useNavigate()

    const dispatch = useDispatch<AppDispatch>()    
    useEffect(() => {
        dispatch( setGameGenre(genreGame) ) 
    }, [])        

    const gameGenre = useSelector(gamesGenres) 
    const gameInBasket = useSelector(gamesInBasket)
    
    const addGameInBasket = (game: iGame) => {
        dispatch( setGameInBasket(game))
    }
    const removeGameFromBasket = (id: number) => {
        dispatch( removeGameInBasket(id))
    }

    if(gameGenre.length === 0) {
        return <h1>Игры в данном жанре не найдены</h1>
    }

    return (
        <Container>
            <div className='genre__game__header'>                
                <LinkToBasketIcon /> 
            </div>
            <h2 className='genre__game__title'>{genreGame}</h2>
            <div className='genre__game__block'>
                {gameGenre && gameGenre.map((gameGenre: any) => 
                    <div key={gameGenre.id} className='genre__game'>
                        <div className='genre__game__description__block'>
                            <img  className='genre__game__img' src={gameGenre.img}/>
                            <div className='genre__game__description'>
                                <h3 className='genre__game__description__title'>{gameGenre.nameGame}</h3>
                                <div className='genre__game__description__genre__block'>
                                    {gameGenre.genres.map((gameGenre: string) => 
                                        <div key={gameGenre} className='genre__game__description__genre'>{gameGenre}</div>
                                    )}  
                                </div>
                                <div className='genre__game__releaseDate__block'>
                                    {gameGenre.releaseDate.map((gameDate: string | number) => 
                                        <div key={gameDate} className='genre__game__releaseDate'>{gameDate}</div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='genre__game__buy__block'>                            
                            <div className='genre__game__price'>{gameGenre.price} руб.</div>
                            {gameInBasket.some(gb => gb.id === gameGenre.id) 
                                ? <button onClick={() => removeGameFromBasket(gameGenre.id)} className='genre__game__removeButton'>Убрать из корзины</button>
                                : <button onClick={() => addGameInBasket(gameGenre)} className='genre__game__addButton'>Добавить в корзину</button>                            
                            }                            
                        </div>
                    </div>
                )}
            </div>
        </Container>
    )   
}

export default GenreGamePage

function toLowerCase(gG: string) {
    throw new Error('Function not implemented.')
}
