import React from 'react';
import Logo from './Logo';
import mobileSeach from '../../img/mobileSeach.png'
import '../../styles/Header/HeaderMobile.css'
import MobileNavigation from './MobileNavigation';

const HeaderMobile = () => {

    return (
        <div className='HeaderMobile'>
            <div className = 'mobileSeach'>
                <Logo />
                <img src={mobileSeach} onclick="openSearch()" />
            </div>
            <MobileNavigation />
        </div>
    );
}

export default HeaderMobile;
