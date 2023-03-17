import React from 'react'
import searchImg from '../../img/header/loopa.svg';

function Search(props) {
    return (
        <div className='header__search' >
            <input {...props} />
            <button className='header__search-button'>
                <img src={searchImg} className='header__img' />
            </button>
        </div>
    )
}

export default Search