import React from 'react'
import Burger from './header/Burger';
import logo from '../img/header/Logo.svg';
import Search from './header/Search';
import Dowload from './header/Dowload';
import Notification from './header/Notification';
import avatarImg from '../img/header/Avatar.jpg';
import Avatar from './header/Avatar';

const Header = function () {
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
                        <Search placeholder='Search' type="text" className='header__input' />
                    </form>
                    <div className="header__tools">
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
