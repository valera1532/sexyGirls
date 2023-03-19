import React, { useState } from 'react';
import Player from './player';
import videosrc from '../../video/back.mp4';
import Description from './Description';
/* import MainItemVideo from './MainItemVideo'; */
import BannerVideo from '../../video/back.mp4';
import avatarImg from '../../img/header/Avatar.jpg';
import videoPosterImg from '../../img/main/poster.jpg';

const VideoSection = () => {
    return (
        <div className="video-section">
            <Player srcVideo={videosrc} />
            <Description video={{
                likes: "35 тыс",
                videoPoster: videoPosterImg,
                srcVideo: BannerVideo,
                srcAvatar: avatarImg,
                title: 'HackTube create mobile calculator',
                nameUser: 'Альбина Синица',
                subscribers: '10 000'
            }} />
        </div>
    );
}

export default VideoSection;
