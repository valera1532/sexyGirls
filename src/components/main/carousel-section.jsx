import React, { useState } from 'react';
import MainItemVideo from './main-content/MainItemVideo';
import BannerVideo from '../../video/back.mp4';
import avatarImg from '../../img/header/Avatar.jpg';
import videoPosterImg from '../../img/main/poster.jpg';


const CarouselSection = () => {
    const [videos, setVideos] = useState([
        {
            videoPoster: videoPosterImg,
            srcVideo: BannerVideo,
            srcAvatar: avatarImg,
            title: 'HackTube create mobile calculator',
            nameUser: 'Альбина Синица',
            viewsVideo: '10 000'
        },
        {
            videoPoster: videoPosterImg,
            srcVideo: BannerVideo,
            srcAvatar: avatarImg,
            title: 'HackTube create mobile calculator',
            nameUser: 'Альбина Синица',
            viewsVideo: '10 000'
        },
        {
            videoPoster: videoPosterImg,
            srcVideo: BannerVideo,
            srcAvatar: avatarImg,
            title: 'HackTube create mobile calculator',
            nameUser: 'Альбина Синица',
            viewsVideo: '10 000'
        },
        {
            videoPoster: videoPosterImg,
            srcVideo: BannerVideo,
            srcAvatar: avatarImg,
            title: 'HackTube create mobile calculator',
            nameUser: 'Альбина Синица',
            viewsVideo: '10 000'
        },
        {
            videoPoster: videoPosterImg,
            srcVideo: BannerVideo,
            srcAvatar: avatarImg,
            title: 'HackTube create mobile calculator',
            nameUser: 'Альбина Синица',
            viewsVideo: '10 000'
        },
        {
            videoPoster: videoPosterImg,
            srcVideo: BannerVideo,
            srcAvatar: avatarImg,
            title: 'HackTube create mobile calculator',
            nameUser: 'Альбина Синица',
            viewsVideo: '10 000'
        },
        {
            videoPoster: videoPosterImg,
            srcVideo: BannerVideo,
            srcAvatar: avatarImg,
            title: 'HackTube create mobile calculator',
            nameUser: 'Альбина Синица',
            viewsVideo: '10 000'
        },
        {
            videoPoster: videoPosterImg,
            srcVideo: BannerVideo,
            srcAvatar: avatarImg,
            title: 'HackTube create mobile calculator',
            nameUser: 'Альбина Синица',
            viewsVideo: '10 000'
        },
        {
            videoPoster: videoPosterImg,
            srcVideo: BannerVideo,
            srcAvatar: avatarImg,
            title: 'HackTube create mobile calculator',
            nameUser: 'Альбина Синица',
            viewsVideo: '10 000'
        },
    ]);


    return (
        <div className='carousel-section'>
            {videos.map((video, i) => {
                return <MainItemVideo key={i} video={video} />
            })}
        </div>
    );
}

export default CarouselSection;
