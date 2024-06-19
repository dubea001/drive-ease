import React from 'react';
import { CgNotes } from 'react-icons/cg';
import { FaLocationDot } from 'react-icons/fa6';
import { FaCar } from 'react-icons/fa';
import { assets } from '../assets/assets';

const Advantages = () => {
    return (
        <div className='mt-12 animate-fadein3s' id='advantages'>
            <div className='text-center'>
                <p className='text-sm text-primary mb-2'>How It Works</p>
                <h3 className='text-3xl font-semibold'>3 Simple Steps</h3>
                <div className='flex flex-col md:flex-row justify-between gap-2 mt-16 mx-12'>
                    <div className='flex flex-col items-center justify-center md:w-[25%]'>
                        <div className='bg-secondary rounded-lg px-4 py-2'>
                            <FaCar className='text-primary text-4xl' />
                        </div>

                        <p className='my-3 font-semibold text-lg'>
                            Choose Your Car
                        </p>
                        <p className='text-gray text-base'>
                            Browse through our extensive collection of cars to
                            find the perfect match for your needs.
                        </p>
                    </div>
                    <div className='flex-grow relative my-4'>
                        <div className='absolute top-[10%] transform -translate-y-1/2 left-0 right-0 border-t-2 border-dotted border-primary'></div>
                    </div>
                    <div className='flex flex-col items-center justify-center md:w-[25%]'>
                        <div className='bg-secondary rounded-lg px-4 py-2'>
                            <CgNotes className='text-primary text-4xl' />
                        </div>

                        <p className='my-3 font-semibold text-lg'>
                            Book Online
                        </p>
                        <p className='text-gray text-base'>
                            Use our straight forward booking system to reserve
                            your car, it's quick and hassle free.
                        </p>
                    </div>
                    <div className='flex-grow relative my-4'>
                        <div className='absolute top-[10%] transform -translate-y-1/2 left-0 right-0 border-t-2 border-dotted border-primary'></div>
                    </div>
                    <div className='flex flex-col items-center justify-center md:w-[25%]'>
                        <div className='bg-secondary rounded-lg px-4 py-2'>
                            <FaLocationDot className='text-primary text-4xl' />
                        </div>

                        <p className='my-3 font-semibold text-lg'>
                            Pick Up and Drive
                        </p>
                        <p className='text-gray text-base'>
                            Pick your car from one of our convenient location
                            and hit the road. Enjoy your journey!
                        </p>
                    </div>
                </div>
            </div>
            <div className='text-center mt-24'>
                {' '}
                <p className='text-sm text-primary mb-2'>
                    DriveEase Advantages
                </p>
                <h3 className='text-3xl font-semibold'>Why Choose DriveEase</h3>
                <div className='flex flex-col items-center justify-around md:flex-row mt-24'>
                    <div className='md:w-[40%] mb-6'>
                        <img
                            src={assets.HeaderBg}
                            alt=''
                            className='rounded-lg'
                        />
                    </div>
                    <div className='md:w-[50%] flex flex-wrap p-2 gap-4 items-center justify-evenly'>
                        <div className='flex flex-col justify-between items-center md:w-[40%] min-h-48 shadow-lg rounded-lg p-4 md:px-8 hover:bg-secondary'>
                            <div className='my-4 border-2 flex items-center justify-center border-primary rounded-full p-4 w-12 h-12'>
                                <span className='font-semibold text-2xl text-primary'>
                                    1
                                </span>
                            </div>

                            <div>
                                <p className='font-bold text-content mb-3'>
                                    Variety Of Cars
                                </p>
                                <p className='text-gray font-base'>
                                    Choose from a range of vehicles to suit
                                    every need and budget
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between items-center md:w-[40%] min-h-48 shadow-lg rounded-lg p-4 md:px-8 hover:bg-secondary'>
                            <div className='my-4 border-2 flex items-center justify-center border-primary rounded-full p-4 w-12 h-12'>
                                <span className='font-semibold text-2xl text-primary'>
                                    2
                                </span>
                            </div>

                            <div>
                                <p className='font-bold text-content mb-3'>
                                    Affordable Rates
                                </p>
                                <p className='text-gray font-base'>
                                    Our transparent pricing model ensures you
                                    get the best deal every time
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between items-center md:w-[40%] min-h-48 shadow-lg rounded-lg p-4 md:px-8 hover:bg-secondary'>
                            <div className='my-4 border-2 flex items-center justify-center border-primary rounded-full p-4 w-12 h-12'>
                                <span className='font-semibold text-2xl text-primary'>
                                    3
                                </span>
                            </div>

                            <div>
                                <p className='font-bold text-content mb-3'>
                                    Easy Booking Process
                                </p>
                                <p className='text-gray font-base'>
                                    Reserve your car in just a few minutes with
                                    our user-friendly online booking system
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between items-center md:w-[40%] min-h-48 shadow-lg rounded-lg p-4 md:px-8 hover:bg-secondary'>
                            <div className='my-4 border-2 flex items-center justify-center border-primary rounded-full p-4 w-12 h-12'>
                                <span className='font-semibold text-2xl text-primary'>
                                    4
                                </span>
                            </div>

                            <div>
                                <p className='font-bold text-content mb-3'>
                                    24/7 Customer Support
                                </p>
                                <p className='text-gray font-base'>
                                    Our dedicated support team is available 24/7
                                    to assist you with any questions you have
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;
