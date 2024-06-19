import React, { useState } from 'react';
import { TbWheel } from 'react-icons/tb';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className='' id='Navbar'>
            <div className='flex items-center justify-between pt-6'>
                <div className='flex items-center'>
                    <TbWheel className='text-primary text-5xl mr-1' />{' '}
                    <p className='font-semibold text-lg'>DriveEase</p>
                </div>
                <div className='hidden md:flex space-x-6 '>
                    <ul className='flex justify-evenly space-x-12'>
                        <li className='hover:text-primary hover:transition hover:duration-300 hover:ease-in-out'>
                            <Link
                                activeClass='active'
                                to='about'
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                className='font-semibold cursor-pointer px-2'
                            >
                                About
                            </Link>
                        </li>
                        <li className='hover:text-primary hover:transition hover:duration-300 hover:ease-in-out'>
                            <Link
                                activeClass='active'
                                to='cars'
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                className='font-semibold cursor-pointer px-2'
                            >
                                Cars
                            </Link>
                        </li>
                        <li className='hover:text-primary hover:transition hover:duration-300 hover:ease-in-out'>
                            <Link
                                activeClass='active'
                                to='advantages'
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                className='font-semibold cursor-pointer px-2'
                            >
                                Why choose us
                            </Link>
                        </li>
                        <li className='hover:text-primary hover:transition hover:duration-300 hover:ease-in-out'>
                            <Link
                                activeClass='active'
                                to='testimonial'
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                className='font-semibold cursor-pointer px-2'
                            >
                                Testimonial
                            </Link>
                        </li>
                        <li className='hover:text-primary hover:transition hover:duration-300 hover:ease-in-out'>
                            <Link
                                activeClass='active'
                                to='faq'
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                className='font-semibold cursor-pointer px-2'
                            >
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </div>
                <button className='hidden md:flex bg-primary px-4 py-2 cursor-pointer border-none rounded text-[14px] font-medium hover:bg-white hover:border hover:border-primary hover:text-primary hover:transition hover:ease-in-out hover:duration-300'>
                    Rent Now
                </button>
                <div className='md:hidden'>
                    <div className='bg-primary p-2 rounded hover:cursor-pointer md:hidden'>
                        {showMenu ? (
                            <FaXmark
                                className='text-2xl text-white'
                                onClick={() => setShowMenu(!showMenu)}
                            />
                        ) : (
                            <FaBars
                                className='text-2xl text-white'
                                onClick={() => setShowMenu(!showMenu)}
                            />
                        )}
                    </div>
                    <div
                        className={`bg-white text-content flex flex-col py-6 rounded absolute top-20 right-8 w-full h-full bg-opacity-60 transition-transform ease duration-300 md:hidden ${
                            showMenu
                                ? 'transform translate-x-0'
                                : 'transform -translate-x-full'
                        }`}
                        style={{ zIndex: 999, backdropFilter: 'blur(10px)' }}
                    >
                        <Link
                            activeClass='active'
                            to='about'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className='text-start my-1 py-2 px-6 font-bold tracking-wide cursor-pointer hover:text-primary'
                            onClick={() => setShowMenu(false)}
                        >
                            About
                        </Link>
                        <Link
                            activeClass='active'
                            to='cars'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className='text-start my-1 py-2 px-6 font-bold tracking-wide cursor-pointer hover:text-primary'
                            onClick={() => setShowMenu(false)}
                        >
                            Cars
                        </Link>
                        <Link
                            activeClass='active'
                            to='advantages'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className='text-start my-1 py-2 px-6 font-bold tracking-wide cursor-pointer hover:text-primary'
                            onClick={() => setShowMenu(false)}
                        >
                            Why choose us
                        </Link>
                        <Link
                            activeClass='active'
                            to='testimonial'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className='text-start my-1 py-2 px-6 font-bold tracking-wide cursor-pointer hover:text-primary'
                            onClick={() => setShowMenu(false)}
                        >
                            Testimonial
                        </Link>
                        <Link
                            activeClass='active'
                            to='faq'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className='text-start my-1 py-2 px-6 font-bold tracking-wide cursor-pointer hover:text-primary'
                            onClick={() => setShowMenu(false)}
                        >
                            F.A.Qs.
                        </Link>
                        <Link
                            activeClass='active'
                            to='rent-now'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className='text-start my-1 py-2 px-6 font-bold tracking-wide cursor-pointer hover:text-primary'
                            onClick={() => setShowMenu(false)}
                        >
                            Rent Now
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
