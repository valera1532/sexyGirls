import React, { useState } from 'react';

function Burger() {
    const [isMenuOpen, toggleMenu] = useState(false);
    function toggleMenuMode() {
        toggleMenu(!isMenuOpen)
    }
    return (
        <div className="header__burger-block">
            <div onClick={toggleMenuMode} className={isMenuOpen ? 'active header__burger' : 'header__burger'}>
                <span></span>
            </div>
        </div>
    )
}

export default Burger
