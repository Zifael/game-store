import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { gamesInWishlist } from "../../Components/Selectors/Selectors";
import { removeGameFromWishlist } from "../../redux-store/gamesInWishlist-reducer/gamesInWishlist-reducer";
import './WishlistPage.css'

const WishlistPage = () => {   

    const gameInWishlist = useSelector(gamesInWishlist)
    const dispatch = useDispatch()

    const removeGameFromWishlistButton = (id: number) => {
        dispatch(removeGameFromWishlist(id))
    }

    return (
        <Container className="Wishlist">
            {gameInWishlist.length !== 0
            ?
                <div>
                    {gameInWishlist.map(game => 
                        <div className="wishlist__games">
                                <div className='basket__gameAndImg'>
                                    <img className='basket__game' src={game.img} />
                                    <div className='basket__nameGame'>{game.nameGame}</div>
                                </div>
                                <div className='basket__game__info'>
                                    <div className='basket__priceGame'>{game.price} руб.</div>                            
                                    <div onClick={() => removeGameFromWishlistButton(game.id)} className='basket__delet__game'>Удалить</div>
                                </div>
                        </div>
                        )}
                </div>
            : 
                <div className="wishlist__NoGame">Нет игр в списке желаемых</div>
            }
        </Container>
    );
}

export default WishlistPage;