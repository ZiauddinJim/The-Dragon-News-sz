import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login With</h2>
            {/* Google */}
            <button className="btn btn-secondary btn-outline w-full mb-3">
                <FaGoogle size={24} />
                Login with Google
            </button>
            {/* GitHub */}
            <button className="btn btn-primary btn-outline w-full">
                <IoLogoGithub size={24} />
                Login with GitHub
            </button>

        </div>
    );
};

export default SocialLogin;