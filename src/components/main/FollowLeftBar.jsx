import React from 'react';
import FollowItem from './FollowItem';
import avatarLeftBarImg from '../../img/header/Avatar.jpg';

export default function FollowLeftBar() {
    return (
        <div className='FollowLeftBar'>
            <div className="follow__title">Подписки</div>
            <FollowItem active="true" category_follow_name='Test' src={avatarLeftBarImg} />
            <FollowItem active="true" category_follow_name='Test' src={avatarLeftBarImg} />
            <FollowItem active="true" category_follow_name='Test' src={avatarLeftBarImg} />
            <FollowItem active="true" category_follow_name='Test' src={avatarLeftBarImg} />
            <FollowItem active="true" category_follow_name='Test' src={avatarLeftBarImg} nameCategoryItem={"category-item__borger"} />


        </div>
    )
}
