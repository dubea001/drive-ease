import React from 'react';
import { assets } from '../assets/assets';

const RentCars = () => {
    return (
        <div className='relative mx-auto h-[30rem] px-[3.5rem] flex justify-center'>
            <div
                className='absolute inset-0 bg-cover bg-center bg-no-repeat scale-x-[-1] overlay'
                style={{
                    backgroundImage: `url(${assets.HeaderBg})`,
                }}
            ></div>
            <div className='relative z-10 text-white flex flex-col items-center justify-center'>
                <h1 className='text-4xl font-extrabold md:text-6xl mb-12'>
                    Rent Cars The Easy Way
                </h1>
                <button className='bg-primary px-10 md:px-16 py-3 cursor-pointer border-none rounded text-lg font-medium hover:bg-white hover:border hover:border-primary hover:text-primary hover:transition hover:ease-in-out hover:duration-300'>
                    Rent now
                </button>
            </div>
        </div>
    );
};

export default RentCars;
