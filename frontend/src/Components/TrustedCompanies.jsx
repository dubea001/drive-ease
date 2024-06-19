import React from 'react';
import { assets } from '../assets/assets';

const TrustedCompanies = () => {
    return (
        <div className=''>
            <p className='text-2xl text-center text-gray mb-4 font-semibold'>
                Trusted Manufacturers
            </p>
            <div className='wrapper flex items-center justify-center gap-1 md:gap-3'>
                <div className='item item1 flex items-center justify-center flex-col'>
                    <img src={assets.Audi} alt='Audi' className='w-16' />{' '}
                    <p className='text-primary mt-3 text-xs'>Audi</p>
                </div>
                <div className='item item2 flex items-center justify-center flex-col'>
                    <img src={assets.BMW} alt='BMW' className='w-16' />{' '}
                    <p className='text-primary mt-3 text-xs'>BMW</p>
                </div>
                <div className='item item3 flex items-center justify-center flex-col'>
                    <img
                        src={assets.Chevrolet}
                        alt='Chevrolet'
                        className='w-16'
                    />{' '}
                    <p className='text-primary mt-3 text-xs'>Chevrolet</p>
                </div>
                <div className='item item4 flex items-center justify-center flex-col'>
                    <img src={assets.Ford} alt='Ford' className='w-16' />{' '}
                    <p className='text-primary mt-3 text-xs'>Ford</p>
                </div>
                <div className='item item5 flex items-center justify-center flex-col'>
                    <img src={assets.Hyundai} alt='Hyundai' className='w-16' />{' '}
                    <p className='text-primary mt-3 text-xs'>Hyundai</p>
                </div>
                <div className='item item6 flex items-center justify-center flex-col'>
                    <img src={assets.Jaguar} alt='Jaguar' className='w-16' />{' '}
                    <p className='text-primary mt-3 text-xs'>Jaguar</p>
                </div>
                <div className='item item7 flex items-center justify-center flex-col'>
                    <img src={assets.Lexus} alt='Lexus' className='w-16' />{' '}
                    <p className='text-primary mt-3 text-xs'>Lexus</p>
                </div>
                <div className='item item8 flex items-center justify-center flex-col'>
                    <img
                        src={assets.MercedesBenz}
                        alt='Mercedes Benz'
                        className='w-16'
                    />{' '}
                    <p className='text-primary mt-3 text-xs'>Mercedes Benz</p>
                </div>
                <div className='item item9 flex items-center justify-center flex-col'>
                    <img src={assets.Porsche} alt='Porshe' className='w-16' />{' '}
                    <p className='text-primary mt-3 text-xs'>Porshe</p>
                </div>
                <div className='item item10 flex items-center justify-center flex-col'>
                    <img
                        src={assets.Volkswagen}
                        alt='Volkswagen'
                        className='w-16'
                    />{' '}
                    <p className='text-primary mt-3 text-xs'>Volkswagen</p>
                </div>
            </div>
        </div>
    );
};

export default TrustedCompanies;
