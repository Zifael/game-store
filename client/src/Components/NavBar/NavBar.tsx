import React from "react";
import './NavBar.css'
import gameStoreImg from '../../Img/game-store.png'
import LinkToBasketIcon from "../LinkToBasketIcon/LinkToBasketIcon";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate()

    return (
        <div className="NavBar">
            <div className="NavBar__left">
                <img onClick={() => navigate('/')} className="NavBar__icons" src={gameStoreImg}/>
                <Link className="NavBar__linkToMain" to={'/'}>Магазин</Link>
            </div>
            <div className="NavBar__right">
                <Link className="NavBar__wishlist" to={'/wishlist'}>Список желаемого</Link>                
            </div>
        </div>
    );
}

export default NavBar;