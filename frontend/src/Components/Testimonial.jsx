import React from 'react';
import Slider from 'react-slick';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { CgChevronDoubleLeftO, CgChevronDoubleRightO } from 'react-icons/cg';
import { assets } from '../assets/assets';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing   elit. Commodi nemo perspiciatis pariatur, debitis   provident omnis tempora dolore autem necessitatibus quidem, accusantium impedit quae tempore. Asperiores?',
        name: 'Bruno Fernandez',
        title: 'CEO of blueprint',
        image: assets.Brian,
    },
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing   elit. Commodi nemo perspiciatis pariatur, debitis   provident omnis tempora dolore autem necessitatibus quidem, accusantium impedit quae tempore. Asperiores?',
        name: 'Brian Authur',
        title: 'Marketing Specialist',
        image: assets.Bruno,
    },
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing   elit. Commodi nemo perspiciatis pariatur, debitis   provident omnis tempora dolore autem necessitatibus quidem, accusantium impedit quae tempore. Asperiores?',
        name: 'Nelson Becker',
        title: 'Ui/Ux designer Tex cafe',
        image: assets.Nelson,
    },
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing   elit. Commodi nemo perspiciatis pariatur, debitis   provident omnis tempora dolore autem necessitatibus quidem, accusantium impedit quae tempore. Asperiores?',
        name: 'Jamie Fassonaki',
        title: 'CEO of PhotoLabs',
        image: assets.Jamie,
    },
];

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: (
            <CgChevronDoubleRightO className='text-5xl text-gray cursor-pointer hover:text-primary hover:transition ease-in-out duration-300' />
        ),
        prevArrow: (
            <CgChevronDoubleLeftO className='text-5xl text-gray cursor-pointer hover:text-primary hover:transition ease-in-out duration-300' />
        ),
    };

    return (
        <div
            className='bg-secondary mt-12 px-16 text-center py-12'
            id='testimonial'
        >
            <p className='text-sm text-primary mb-2'>Testimonials</p>
            <h3 className='text-3xl font-semibold mb-4'>
                What our customers say
            </h3>
            <hr className='text-primary font-semibold md:w-1/2 m-auto' />
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className='my-16 flex flex-col items-center'
                    >
                        <div className='relative md:w-1/2 mx-auto'>
                            <RiDoubleQuotesL className='absolute text-primary text-3xl mt-4 ml-0 -top-8 left-0' />
                            <div className='flex flex-col items-center justify-center mx-6 my-12'>
                                <p className='text-gray text-lg font-semibold'>
                                    {testimonial.text}
                                </p>
                            </div>
                            <RiDoubleQuotesR className='absolute text-primary text-3xl -bottom-8 right-0 mb-4 mr-4' />
                        </div>

                        <div className='flex my-8 pl-12 justify-start items-center md:w-1/2 mx-auto'>
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className='rounded-full w-16 h-16'
                            />
                            <div className='flex flex-col items-start justify-center mx-4'>
                                <p className='text-bold text-lg'>
                                    {testimonial.name}
                                </p>
                                <small className='text-primary'>
                                    {testimonial.title}
                                </small>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <hr className='text-primary font-semibold md:w-1/2 m-auto' />
        </div>
    );
};

export default Testimonial;
