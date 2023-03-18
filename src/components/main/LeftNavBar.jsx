import React from 'react';
import CategoryLeftBar from './CategoryLeftBar';
import FollowLeftBar from './FollowLeftBar';
import NavigationsLeftBar from './NavigationLeftBar';
import OthersLeftBar from './OthersLeftBar';

const LeftNavBar = () => {
    return (
        <div className="left-navbar">
            <CategoryLeftBar />
            <FollowLeftBar />
            <NavigationsLeftBar />
            <OthersLeftBar />
        </div>
    );
}

export default LeftNavBar;
