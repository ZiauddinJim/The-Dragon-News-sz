import React, { use } from 'react';
import { NavLink } from 'react-router';

const fetchPromise = fetch('/categories.json').then(Response => Response.json());

const Categories = () => {
    const categories = use(fetchPromise)
    return (
        <div>
            <h2 className='font-bold'>All Category ({categories.length})</h2>
            <div className='grid grid-cols-1 mt-5 gap-2 category-btn'>
                {
                    categories.map(category => (
                        <NavLink key={category.id} className="bg-base-100 Rounded text-accent font-semibold p-2
                        hover:bg-base-200" to={`/category/${category.id}`} >{category.name}</NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;