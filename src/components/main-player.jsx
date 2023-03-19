import React from 'react';
import CarouselSection from './main/carousel-section';
import VideoSection from './main/video-section';

const MainPlayer = () => {
    return (
        <div className='main-player'>
            <div className="_container">
                <div className="main-player__block">
                    <VideoSection />
                    <CarouselSection />
                </div>
            </div>
        </div>
    );
}

export default MainPlayer;
