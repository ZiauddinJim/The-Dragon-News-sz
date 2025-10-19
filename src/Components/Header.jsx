import React from 'react';
import { assets } from '../assets/assets';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col w-fit mx-auto justify-center items-center-safe mt-12 gap-3'>
            <img className='w-96' src={assets.logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-accent'>
                <span className="text-gray-900 font-semibold">{format(new Date(), "EEEE")}</span>,{" "}
                {format(new Date(), "MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;