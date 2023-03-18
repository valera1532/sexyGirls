import React from 'react';
import LeftNavBar from './main/LeftNavBar';
import MainContent from './MainContent';

const Main = () => {
    return (
        <div className='main'>
            <div className="_container">
                <div className="main-wrapper">
                    <LeftNavBar />
                    <MainContent />
                </div>
            </div>
        </div>
    );
}

export default Main;
