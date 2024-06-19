import React from 'react';
import { FaLocationDot, FaCalendarDays } from 'react-icons/fa6';
import { FaCar } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';

const SelectOptions = () => {
    return (
        <div
            className='bg-white w-4/5 m-auto rounded-md text-content px-8 md:px-16 py-8 flex flex-wrap gap-4 items-center'
            id='rent-now'
        >
            <div className='md:w-[30%] w-full'>
                <div className='flex items-center font-medium mb-2 text-gray'>
                    <FaCar className='text-primary text-base mr-2' />
                    Select car brand
                </div>
                {/* instead of input it should be changed to select when the backend api is properly set up */}
                <input
                    type='text'
                    disabled
                    placeholder='Tesla model 3'
                    className='border border-primary bg-transparent rounded p-1 placeholder:px-2 w-full'
                />
            </div>
            <div className='md:w-[30%] w-full'>
                <div className='flex items-center font-medium mb-2 text-gray'>
                    <FaLocationDot className='text-primary text-base mr-2' />{' '}
                    Pick-up Location
                </div>
                {/* pick up location should be set to the company location */}
                <input
                    type='text'
                    disabled
                    placeholder='23, ajayi street ifako agbanja'
                    className='border border-primary bg-transparent rounded p-1 placeholder:px-2 w-full'
                />
            </div>
            <div className='md:w-[30%] w-full'>
                <div className='flex items-center font-medium mb-2 text-gray'>
                    <FaLocationDot className='text-primary text-base mr-2' />{' '}
                    Drop-off Location
                </div>
                <input
                    type='text'
                    disabled
                    placeholder='23, ajayi street ifako agbanja'
                    className='border border-primary bg-transparent rounded p-1 placeholder:px-2 w-full'
                />
            </div>
            <div className='w-full md:w-[22%]'>
                <div className='flex items-center font-medium mb-2 text-gray'>
                    <FaCalendarDays className='text-primary text-base mr-2' />{' '}
                    Pick-up date
                </div>
                {/* the input should be set to input date to allow set dat */}
                <input
                    type='date'
                    disabled
                    className='border border-primary bg-transparent rounded p-1 placeholder:px-2 w-full'
                />
            </div>
            <div className='w-full md:w-[22%]'>
                <div className='flex items-center font-medium mb-2 text-gray'>
                    <MdAccessTime className='text-primary text-base mr-2' />
                    Pick-up Time
                </div>
                <input
                    type='text'
                    disabled
                    placeholder='Time'
                    className='border border-primary bg-transparent rounded p-1 placeholder:px-2 w-full'
                />
            </div>
            <div className='w-full md:w-[22%]'>
                <div className='flex items-center font-medium mb-2 text-gray'>
                    <FaCalendarDays className='text-primary text-base mr-2' />{' '}
                    Drop-off date
                </div>
                <input
                    type='date'
                    disabled
                    placeholder=''
                    className='border border-primary bg-transparent rounded p-1 placeholder:px-2 w-full'
                />
            </div>
            <div className='w-full md:w-[22%]'>
                <div className='flex items-center font-medium mb-2 text-gray'>
                    <MdAccessTime className='text-primary text-base mr-2' />
                    Drop-off Time
                </div>
                <input
                    type='text'
                    disabled
                    placeholder='Time'
                    className='border border-primary bg-transparent rounded p-1 placeholder:px-2 w-full'
                />
            </div>
            <div className='flex mx-auto mt-4'>
                <button className='bg-primary px-24 py-2 text-white cursor-pointer rounded font-semibold text-sm hover:font-bold hover:transition hover:duration-300 hover:ease-in-out hover:bg-opacity-80'>
                    Search
                </button>
            </div>
        </div>
    );
};

export default SelectOptions;
