import React from 'react'
import BackgroundLiveImg from './components/BackgroundLiveImg';
import Header from './components/Header';
import Main from './components/main';
import './css/style.css';
import videosrc from './video/back.mp4';

function App() {
  return (
    <div className="App">
      <Header />
      {/*       <Main />
      <BackgroundLiveImg src={videosrc} autoplay="autoplay" muted /> */}
    </div>
  );
}

export default App;
