import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='mt-7 mb-5'>
            <h2 className='font-semibold text-xl mb-5'>Find Us On</h2>
            <div className="join join-vertical w-full">
                <button className="btn bg-base-100 join-item hover:bg-base-200 justify-start gap-3"><FaFacebookF size={25} /> Facebook</button>
                <button className="btn bg-base-100 join-item hover:bg-base-200 justify-start gap-3"><FaTwitter size={25} />Twitter</button>
                <button className="btn bg-base-100 join-item hover:bg-base-200 justify-start gap-3"><FaInstagram size={25} />Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;