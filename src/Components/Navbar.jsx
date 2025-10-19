import React from 'react';
import { NavLink } from 'react-router';
import { assets } from '../assets/assets';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=''></div>
            <div className='nav'>
                <NavLink to={'/'} >Home</NavLink>
                <NavLink to={'/about'} >About</NavLink>
                <NavLink to={'/career'} >Career</NavLink>
            </div>
            <div className='login-btn'>
                <img className='w-9 h-9' src={assets.userIMG} alt="" />
                <button className='btn btn-primary px-10'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;