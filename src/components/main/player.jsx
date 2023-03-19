import React, { useState } from 'react';
import playImg from '../../img/main/player/play.svg'
import pauseImg from '../../img/main/player/pause.svg'
import settingImg from '../../img/main/player/setting.svg'
import bigWidthImg from '../../img/main/player/big-width.svg'
import fullScreenImg from '../../img/main/player/full-screen.svg'
import normalScreenImg from '../../img/main/player/normal-screen.svg'


const Player = ({ srcVideo, ...props }) => {
    const [videoPlay, setVideoPlay] = useState(false)
    function toggleVideo() {
        setVideoPlay(prev => !prev);
    }
    const [valumePause, setvalumePause] = useState(false)
    function toggleValume() {
        setvalumePause(prev => !prev);
    }
    return (
        <div className="player">
            <video className="player__video" {...props} autoplay="autoplay" muted >
                <source src={srcVideo} />
            </video>
            <div className="player-overlay">
                <div className="player-overlay__progress-bar-block">
                    <input type="range" className="player-overlay__progress-bar" value='0' min="0" step="1" max='100' />
                </div>
                <div className="player-overlay__controls">
                    <div className="player-overlay__body">
                        <button className={`player-overlay__play-btn ${videoPlay ? 'active' : ''}`} onClick={toggleVideo}>
                            <img src={playImg} alt="Play" className="player-overlay__play-img-1" />
                            <img src={pauseImg} alt="Play" className="player-overlay__play-img-2" />
                        </button>
                        <button className={`player-overlay__volume-svg-btn ${valumePause ? 'muted' : ''}`} onClick={toggleValume}>
                            <svg className="player-overlay__play-svg" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.0329 8.83289C20.0328 7.99527 19.0646 7.52898 18.4096 8.05111L10.4584 14.3895C10.2813 14.5306 10.0616 14.6075 9.83509 14.6075H3.56274C3.01046 14.6075 2.56274 15.0552 2.56274 15.6075V20.6815C2.56274 20.6826 2.56222 20.6836 2.56134 20.6843V20.6843C2.55948 20.6857 2.55948 20.6885 2.56134 20.6899V20.6899C2.56222 20.6905 2.56274 20.6915 2.56274 20.6926V25.7038C2.56274 26.2561 3.01046 26.7038 3.56274 26.7038H9.87909C10.1029 26.7038 10.3203 26.7789 10.4964 26.9171L18.4165 33.1324C19.0727 33.6473 20.0339 33.1798 20.0339 32.3457V26.7051C20.0339 26.7044 20.0344 26.7038 20.0351 26.7038V26.7038C20.0359 26.7038 20.0364 26.7032 20.0364 26.7025V14.6088C20.0364 14.6081 20.0359 14.6075 20.0351 14.6075V14.6075C20.0344 14.6075 20.0339 14.607 20.0339 14.6062L20.0329 8.83289ZM18.6911 25.3598C18.6911 25.3605 18.6905 25.3611 18.6898 25.3611V25.3611C18.6891 25.3611 18.6886 25.3616 18.6886 25.3623V29.5833C18.6886 30.4174 17.7274 30.8849 17.0712 30.37L10.9603 25.5744C10.7841 25.4362 10.5668 25.3611 10.3429 25.3611H4.90677C4.35449 25.3611 3.90677 24.9133 3.90677 24.3611V16.9528C3.90677 16.4006 4.35449 15.9528 4.90677 15.9528H10.3053C10.5318 15.9528 10.7516 15.876 10.9287 15.7348L17.0665 10.8419C17.7215 10.3198 18.6898 10.7862 18.6898 11.6239V14.6088L18.6924 15.9528L18.6911 25.3598Z" fill="#D6BBEB" stroke="#B570EB" stroke-width="0.5" />
                                <path d="M23.712 13.3434C23.415 13.566 23.3567 13.9862 23.5616 14.2958C24.7725 16.1251 25.41 18.2427 25.41 20.4616C25.41 22.7315 24.7455 24.8902 23.483 26.7458C23.274 27.053 23.3272 27.4743 23.6217 27.7009V27.7009C23.9159 27.9272 24.3396 27.8732 24.5505 27.5677C25.995 25.4741 26.754 23.0317 26.754 20.4616C26.754 17.9489 26.0246 15.5518 24.6381 13.4879C24.4313 13.18 24.0088 13.1209 23.712 13.3434V13.3434Z" fill="#D6BBEB" stroke="#B570EB" stroke-width="0.5" />
                                <path d="M29.0072 9.40119C28.7815 9.1065 28.3568 9.06678 28.0706 9.30312V9.30312C27.7843 9.53948 27.745 9.96239 27.9699 10.2578C30.2306 13.2279 31.469 16.8875 31.469 20.6371C31.469 24.3398 30.3205 27.8341 28.1414 30.7876C27.9208 31.0866 27.9672 31.5094 28.2577 31.7411V31.7411C28.5481 31.9728 28.9725 31.9258 29.1938 31.6274C31.5635 28.4328 32.8131 24.6486 32.8131 20.6371C32.8131 16.5748 31.4659 12.6115 29.0072 9.40119Z" fill="#D6BBEB" stroke="#B570EB" stroke-width="0.5" />
                                <path d="M33.209 5.02152C32.9716 4.73646 32.5463 4.71003 32.2679 4.95521V4.95521C31.9894 5.2004 31.9634 5.62437 32.2003 5.90984C35.6303 10.0414 37.5114 15.2461 37.5114 20.6422C37.5114 25.9244 35.6983 31.0438 32.3945 35.1356C32.1614 35.4242 32.1932 35.8477 32.4749 36.0891V36.0891C32.7565 36.3304 33.1812 36.2983 33.4147 36.0103C36.9295 31.6758 38.8554 26.2449 38.8554 20.6422C38.8554 14.9193 36.8553 9.39928 33.209 5.02152Z" fill="#D6BBEB" stroke="#B570EB" stroke-width="0.5" />
                            </svg>
                        </button>
                        <div className="player-overlay__vlume-bar-block">
                            <input type="range" className="player-overlay__vlume-bar" />
                        </div>
                        <div className="player-overlay__time">
                            0:00 / 47:49
                        </div>
                    </div>
                    <div className="player-overlay__body">
                        <div className="player-overlay__settings-btn">
                            <img src={settingImg} alt="" className="player-overlay__settings-img" />
                        </div>
                        <button className="player-overlay__big-width-btn">
                            <img src={bigWidthImg} alt="" className="player-overlay__big-width-img" />
                        </button>
                        <div className="player-overlay__full-screen-btn">
                            <img src={fullScreenImg} alt="" className="player-overlay__full-screen-img-1" />
                            <img src={normalScreenImg} alt="" className="player-overlay__full-screen-img-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Player;
