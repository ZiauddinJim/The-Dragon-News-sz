import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import QZone from './QZone';
import { assets } from '../../assets/assets';

const RightAside = () => {
    return (
        <div>
            <SocialLogin />
            <FindUs />
            <QZone />
            <img className='py-5 pb-10 w-full h-full' src={assets.background} alt="" />
        </div>
    );
};

export default RightAside;