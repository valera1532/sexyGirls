import React from 'react';

const CategoryItem = ({ active, nameCategoryItem, category_item_text, ...props }) => {

    return (
        <button className={nameCategoryItem + ' category-item'}>
            <div className="category-item__img-block ">
                <img {...props} />
            </div>
            <div className={active ? 'active category-item__text' : 'category-item__text'}>
                {category_item_text}
            </div>
        </button>
    );
}

export default CategoryItem;
