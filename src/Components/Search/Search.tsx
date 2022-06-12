import React from 'react'
import { useNavigate } from 'react-router-dom'
import { iGame, iInintalState } from '../../redux-store/Games-reducer/type-gameState/type-gameState'
import './Search.css'


interface isss {
    game: Array<iGame>,    
}

const Search = ({game} : isss) => {  

    const navigate = useNavigate()   

    const clickOneGame = (id: number) => {                     
        navigate(`/game/${id}`)        
    }

    return (
        <div className='search'> 
            {game.length !== 0 ?
           <div>        
                {game.map((game, index) => 
                    <div key={game.id} onClick={() => clickOneGame(game.id)}>
                        <div className='search__game__block'>
                            <img className='search__game__img' src={game.img}/>
                            <div className='search__game__nameGame__price'>
                                <div className='search__game__nameGame'>{game.nameGame}</div>
                                <div className='search__game__price'>{game.price} руб.</div>
                            </div>
                        </div>
                        {game.length! - 1 === index ?  '' :  <div className='search__line'></div>} 
                    </div>
                )}
            </div>    
            : <div className='search__noGame'>игр с данным названием не найдены</div>}
        </div>
    )
}


export default Search