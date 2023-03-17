import React from 'react'
import Burger from './header/Burger';
import logo from '../img/header/Logo.svg';
import Search from './header/Search';

const Header = function () {
    return (
        <div className='header'>
            <div className="_container">
                <div className="header__block">
                    <div className="header__body">
                        <Burger />
                        <img src={logo} alt="" className="header__logo" />
                    </div>
                    <form action="">
                        <Search placeholder='Search' type="text" className='header__input' />
                    </form>

                </div>
            </div>
        </div>
    )
}
export default Header;
