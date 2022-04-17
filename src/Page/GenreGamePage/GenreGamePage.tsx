import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { gamesGenres } from '../../Components/Selectors/Selectors'
import { setGameGenre } from '../../redux-store/Games-reducer/game-reducer'
import './GenreGamePage.css'

interface UserParams {
    genreGame: string
}

const GenreGamePage = () => {
    const {genreGame} = useParams<keyof UserParams>() as UserParams 

    const dispatch = useDispatch()    
    useEffect(() => {
        dispatch( setGameGenre(genreGame) ) 
    }, []) 

       
    const gameGenre = useSelector(gamesGenres)
    console.log(gameGenre)

    if(gameGenre.length === 0) {
        return <h1>Игры в данном жанре не найдены</h1>
    }

    return (
        <Container>
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
                            <button className='genre__game__button'>Добавить в корзину</button>
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
