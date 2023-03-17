import React from 'react'

import avatarImg from '../../img/header/Avatar.jpg';
function Avatar(props) {
    return (
        <div className="header__avatar">
            <img {...props} />
        </div>
    )
}

export default Avatar