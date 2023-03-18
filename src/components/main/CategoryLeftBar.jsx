import React from 'react';
import CategoryItem from './CategoryItem';
import mainImg from '../../img/main/mainimg.svg'
import subscribeImg from '../../img/main/subscribe.png'
import libraryImg from '../../img/main/library.svg'
import historyImg from '../../img/main/history.png'
import myVideoImg from '../../img/main/MyVideo.svg'
import viewNextImg from '../../img/main/viewnext.svg'
import likesImg from '../../img/main/Likes.svg'

const CategoryLeftBar = () => {
    return (
        <div className='category-leftbar'>
            <CategoryItem category_item_text='Главная' src={mainImg} active={true} />
            <CategoryItem category_item_text='Подписки' src={subscribeImg} nameCategoryItem={"category-item__borger"} active={false} />
            <CategoryItem category_item_text='Библиотека' src={libraryImg} active={false} />
            <CategoryItem category_item_text='История' src={historyImg} active={false} />
            <CategoryItem category_item_text='Ваши видео' src={myVideoImg} active={false} />
            <CategoryItem category_item_text='Смотреть позже' src={viewNextImg} active={false} />
            <CategoryItem category_item_text='Понравившиеся' src={likesImg} active={false} />
        </div>
    );
}

export default CategoryLeftBar;
