import React, { useState } from 'react';
import Burger from './header/Burger';
import logo from '../img/header/Logo.svg';
import Search from './header/Search';
import Dowload from './header/Dowload';
import Notification from './header/Notification';
import avatarImg from '../img/header/Avatar.jpg';
import Avatar from './header/Avatar';
import searchImgMain from '../img/header/loopa.svg';

const Header = function () {
    const [isSearchOpen, toggleSearch] = useState(false);
    function toggleMobileSearch() {
        toggleSearch(!isSearchOpen)
    }
    return (
        <div className='header'>
            <div className="_container">
                <div className="header__block">
                    <div className="header__body">
                        <Burger />
                        <a href="/" className="header__link">
                            <img src={logo} alt="" className="header__logo" />
                        </a>
                    </div>
                    <form action="">
                        <Search placeholder='Search' type="text" className='header__input' isSearchOpen={isSearchOpen} />
                    </form>
                    <div className="header__tools">
                        <div onClick={toggleMobileSearch} className="header__open-m-search">
                            <img src={searchImgMain} />
                        </div>
                        <Dowload />
                        <Notification />
                        <Avatar src={avatarImg} alt='Avatar' loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;
