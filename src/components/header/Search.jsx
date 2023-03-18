import React from 'react'
import searchImg from '../../img/header/loopa.svg';

function Search({ isSearchOpen, ...props }) {
    return (
        <div className={isSearchOpen ? 'active header__search' : 'header__search'}>
            <input {...props} />
            <button className='header__search-button'>
                <img src={searchImg} className='header__img' />
            </button>
        </div>
    )
}

export default Search