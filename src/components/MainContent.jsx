import React from 'react';
import MainBannerVideo from './main/main-content/MainBannerVideo';
import MainItemsVideos from './main/main-content/MainItemsVideos';

const MainContent = () => {
    return (
        <div className='main-content'>
            <MainBannerVideo autoplay="autoplay" muted />
            <MainItemsVideos />
        </div>
    );
}

export default MainContent;
