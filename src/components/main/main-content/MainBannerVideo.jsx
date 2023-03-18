import React from 'react';
import BannerVideo from '../../../video/back.mp4';

const MainBannerVideo = (props) => {
    return (
        <div className='main-banner-Video'>
            <video src={BannerVideo} {...props}></video>
        </div>
    );
}

export default MainBannerVideo;
