import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayouts from '../Layouts/HomeLayouts';
import Home from '../Pages/Home';
import CategoryNews from '../Pages/CategoryNews';

const Root = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayouts,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/category/:id',
                element: <CategoryNews />,
                loader: async () => await fetch("/news.json"),
            }
        ]
    },
    {
        path: '/auth',
        element: <h2>This is my Auth page</h2>
    },
    {
        path: '/news',
        element: <h2>This is my News page</h2>
    },
    {
        path: '/*',
        element: <h2>Error-404</h2>
    },
])

export default Root;