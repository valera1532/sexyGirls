import React from 'react';
import CategoryItem from './CategoryItem';

import SettingsImg from '../../img/main/Settingsimg.svg'
import ReportsImg from '../../img/main/Reportsimg.svg'
import HelpImg from '../../img/main/Helpimg.svg'
import FitbackImg from '../../img/main/Fitbackimg.svg'


const OthersLeftBar = () => {
    return (
        <div className='category-leftbar'>
            <CategoryItem category_item_text='Настройки' src={SettingsImg} active={false} />
            <CategoryItem category_item_text='Жалобы' src={ReportsImg} active={false} />
            <CategoryItem category_item_text='Справки' src={HelpImg} active={false} />
            <CategoryItem category_item_text='Отправить отзыв' src={FitbackImg} nameCategoryItem={"category-item__borger"} active={false} />
        </div>
    );
}

export default OthersLeftBar;
