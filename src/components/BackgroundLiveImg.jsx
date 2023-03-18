import React from 'react';

const BackgroundLiveImg = ({ active, ...props }) => {
    return (
        <div className='background-liveimg'>
            <video {...props}>

            </video>
        </div>
    );
}

export default BackgroundLiveImg;
