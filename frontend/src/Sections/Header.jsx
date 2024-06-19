import React from 'react';
import { assets } from '../assets/assets';
import Navbar from '../Components/Navbar';
import SelectOptions from '../Components/SelectOptions';

const Header = () => {
    return (
        <div className='relative mx-auto min-h-[45rem] px-8 md:px-[3.5rem] pb-6 animate-fadein3s'>
            <div
                className='absolute inset-0 bg-cover bg-center bg-no-repeat scale-x-[-1] overlay'
                style={{
                    backgroundImage: `url(${assets.HeaderBg})`,
                }}
            ></div>
            <div className='relative z-10 text-white'>
                <Navbar />
                <div
                    className='text-center my-8 md:mt-24 md:mb-20 md:w-1/2 m-auto'
                    id='about'
                >
                    <h1 className='font-bold text-4xl md:text-6xl mb-4'>
                        Putting The Car In Carpi <br /> Diem Since 1987
                    </h1>
                    <p className='font-medium'>
                        Seize the day with our top-notch rental cars <br /> and
                        unbeatable service
                    </p>
                </div>
                <SelectOptions />
            </div>
        </div>
    );
};

export default Header;
