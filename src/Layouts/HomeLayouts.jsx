import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/Home/LeftAside';
import RightAside from '../Components/Home/RightAside';

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Header />
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews />
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar />
                </nav>
            </header>
            <main className='grid grid-cols-12 w-11/12 mx-auto my-3 gap-5'>
                <aside className='col-span-3 sticky top-5 h-fit'>
                    <LeftAside />
                </aside>
                <section className="main col-span-6">
                    <Outlet />
                </section>
                <aside className='col-span-3 sticky top-5 h-screen'>
                    <div className='overflow-y-auto h-full no-scrollbar'>
                        <RightAside />
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayouts;