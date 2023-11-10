import React from 'react';
import cart_shopping from '../../img/cart-shopping-solid.svg'
import user_solid from '../../img/user-solid.svg'
import bars_solid from '../../img/bars-solid.svg'
import mainPage from '../../img/ToMainPage.svg'
import {NavLink} from "react-router-dom";
import { ROUTES } from '../../utils/router';
import '../../styles/Header/MobileNavigation.css'


const MobileNavigation = () => {
    return (
        <div className='MobileNavigation'>
            <NavLink to={ROUTES.MainPage}><img src={mainPage} alt='bars_solid'/></NavLink>
            <NavLink to={'/catalog'}><img src={bars_solid} alt='bars_solid'/></NavLink>
            <NavLink to={ROUTES.Login}><img src={user_solid} alt='user_solid'/></NavLink>
            <NavLink to={ROUTES.Basket}><img src={cart_shopping} alt='cart_shopping'/></NavLink>
        </div>
    );
}

export default MobileNavigation;
