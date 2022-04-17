import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import './MainPage.css'
import imgSearch from '../../Img/imgSearch.png'
import imgBurgerMenu from '../../Img/burgerMenu.png'
import BurgerMenu from '../../Components/BurgrerMenu/BurgerMenu';
import Search from '../../Components/Search/Search';
import { useSelector } from 'react-redux';
import {games} from '../../Components/Selectors/Selectors'
import { useNavigate } from 'react-router-dom';
import { iGame } from '../../redux-store/Games-reducer/type-gameState/type-gameState';




const MainPage = () => {

    const game = useSelector(games)
    const navigate = useNavigate()

    const clickOneGame = (gameOne: iGame) => {                     
        navigate(`/game/${gameOne.id}`)        
    }
     
    
    const [burgerMenuOff, setBurgerMenuOff] = useState(true)
    const [valueSearch, setValueSearch] = useState('')

    return (
        <Container>
            {!burgerMenuOff && <BurgerMenu />}
            {valueSearch && <Search game={game.filter(game => game.nameGame.toLowerCase().includes(valueSearch.toLowerCase()))} />}         
            <header className='MainPage__header'>
                <div className='MainPage__search'>                    
                    <input 
                        value={valueSearch} 
                        onChange={(e) => setValueSearch(e.target.value)} 
                        className='MainPage__input' placeholder='Поиск'
                    />                   
                    <img className='MainPage__img__search' src={imgSearch} />
                </div>
                <div className='MainPage__main__text'>Game store</div>
                <img 
                    className='MainPage__img__burgerMenu' 
                    onClick={() => setBurgerMenuOff(prev => !prev)} 
                    src={imgBurgerMenu} 
                />
            </header>
            <div className='MainPage__top__game'>
                {game.map(topGame => 
                    <img className='MainPage__top__game__img' 
                        key={topGame.id} 
                        onClick={() => navigate(`/game/${topGame.id}`)}
                        src={topGame.bestGameImg} alt={topGame.nameGame}
                    />    
                )}
            </div>
            <div className='MainPage__game'>
                {game.map(game => 
                    <div key={game.id} className='MainPage__block__game'>
                        <img onClick={() => clickOneGame(game)} className='MainPage__game__img' src={game.img}/>
                        <p className='MainPage__game__name'>{game.nameGame}</p>
                        <div className='MainPage__game__genres'>
                            {game.genres.map(genre =>
                                <p key={genre} className='MainPage__Game__genre'>{genre}</p>    
                            )}
                        </div>
                        <p className='MianPage__game__price'>{game.price} руб.</p>
                    </div>    
                )}                
            </div>
        </Container>
    )
}

export default MainPage