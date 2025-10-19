import React, { Suspense } from 'react';
import Categories from '../Categories';
import { BeatLoader } from 'react-spinners';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<BeatLoader className='text-center' />}>
                <Categories />
            </Suspense>
        </div>
    );
};

export default LeftAside;