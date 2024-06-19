import React from 'react';
import cars from '../Apis/Cars.json';
import { PiSeatLight } from 'react-icons/pi';
import { CiStar } from 'react-icons/ci';
import { LiaTachometerAltSolid } from 'react-icons/lia';

const images = import.meta.glob('../assets/cars/*.png', {
    eager: true,
    as: 'url',
});

const Cars = () => {
    return (
        <div className='mt-12' id='cars'>
            <div className='mb-4'>
                <h1 className='text-content font-bold text-4xl text-center'>
                    Our Top Deals
                </h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8'>
                {cars.map((car, index) => (
                    <div
                        key={index}
                        className='bg-white flex flex-col items-center justify-between rounded-lg shadow-md overflow-hidden p-4 transition-transform duration-300 hover:transform hover:scale-105 hover:bg-secondary'
                    >
                        <img
                            src={
                                images[
                                    `../assets/cars/${car.image
                                        .split('/')
                                        .pop()}`
                                ]
                            }
                            alt={car.name}
                            className='w-full h-48 object-cover rounded-lg'
                        />
                        <div className='p-4'>
                            <h2 className='text-lg font-bold'>{car.name}</h2>
                            <p className=' mt-2 text-sm min-h-16 text-gray'>
                                {car.description}
                            </p>
                            <div className='mt-4 flex flex-col items-start justify-between'>
                                <span className='text-sm text-gray'>
                                    starting from
                                </span>
                                <span className='text-primary font-bold text-xl'>
                                    ${car.price_starting_from.toFixed(2)}
                                </span>
                            </div>
                            <hr className='my-4 text-gray' />
                            <div className='mt-2 flex items-center justify-between'>
                                <span className='flex items-center justify between bg-secondary px-3 py-1 rounded-[4rem] text-sm text-gray'>
                                    <LiaTachometerAltSolid className='mr-2' />
                                    {car.top_speed_kmh} km/h
                                </span>
                                <span className='flex items-center justify between bg-secondary px-3 py-1 rounded-[4rem] text-sm text-gray'>
                                    <PiSeatLight className='mr-2' />
                                    {car.seats} Seats
                                </span>
                                <span className='flex items-center justify between bg-secondary px-3 py-1 rounded-[4rem] text-sm text-gray'>
                                    <CiStar className='mr-2 text-primary text-base' />
                                    {car.rating}.0
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cars;
