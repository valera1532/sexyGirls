import React from 'react';

const FollowItem = ({ nameCategoryItem, active, category_follow_name, ...props }) => {

    return (
        <button className={nameCategoryItem + ' category__follow-item'}>
            <div className="category-item__img-follow ">
                <img {...props} />
            </div>
            <div className={active ? 'active category-follow__text' : 'category-follow__text'}>
                {category_follow_name}
            </div>
        </button>
    );
}

export default FollowItem;