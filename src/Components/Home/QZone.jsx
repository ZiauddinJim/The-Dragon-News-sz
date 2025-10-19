import React from 'react';
import { assets } from '../../assets/assets';

const QZone = () => {
    return (
        <div className='bg-base-200 py-4'>
            <h2 className='font-semibold text-xl mb-5 px-4'>Q-Zone</h2>
            <div className='grid grid-cols-1 gap-5 mx-1'>
                <img className='w-full' src={assets.swimming} alt="" />
                <img className='w-full' src={assets.classroom} alt="" />
                <img className='w-full' src={assets.playground} alt="" />
            </div>
        </div>
    );
};

export default QZone;