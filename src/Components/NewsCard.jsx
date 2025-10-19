import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';
// import { assets } from '../assets/assets';

const NewsCard = ({ news }) => {
    // console.log(news);
    const { title, author, image_url, details, rating, total_view } = news
    return (
        <div>
            <div className='flex justify-between bg-base-200 p-5 items-center rounded-t-lg'>
                {/* Header */}
                <div className='flex'>
                    <img className='w-10 h-10 mr-4 rounded-full' src={author.img} alt={author.name} />
                    <div>
                        <p className='font-semibold'>{author.name}</p>
                        <p className='text-accent'>{author.published_date.slice(0, 10)}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <CiBookmark className='w-7 h-7 cursor-pointer hover:scale-105 transition' />
                    <CiShare2 className='w-7 h-7 cursor-pointer hover:scale-105 transition' />
                </div>
            </div>
            {/* title & image */}
            <div className='border border-base-300 rounded-b-lg p-5'>
                <h2 className='font-bold text-xl mb-5'>{title}</h2>
                <img className='object-cover w-full h-72 rounded-xl' src={image_url} alt="" />

                {/* Details */}
                <div className='mt-7 pb-5 border-b-2 border-base-300'>
                    {
                        details.length > 200 ? <>
                            {details.slice(0, 200)}...
                            <Link to={`/news-details/id`} className='text-orange-500 font-semibold hover:underline'> Read More</Link>
                        </> : details
                    }
                </div>
                {/* Footer */}
                <div className='flex justify-between items-center px-5 pt-5'>
                    {/* Rating */}
                    <div className='flex gap-2 items-center text-orange-400'>
                        {Array.from({ length: rating.number }).map((_, i) => <FaStar key={i} />)}
                        <span className='ml-2 text-accent'>{rating.number}</span>
                    </div>
                    {/* Views */}
                    <div className='flex gap-2 items-center text-accent'>
                        <FaEye />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;