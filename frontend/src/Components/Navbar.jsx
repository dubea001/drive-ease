import { useState } from 'react';
import { TbWheel } from 'react-icons/tb';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import { links } from '../Utils/api';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav
            className='flex md:flex-row justify-between bg-secondary h-28 items-center sticky top-0 z-50 px-8 md:px-12 lg:px-16 text-content'
            id='Navbar'
        >
            <div className='flex items-center justify-between w-full'>
                <a
                    href='/'
                    className='flex items-center justify-center text-primary font-bold'
                >
                    <TbWheel className='text-primary text-5xl mr-1' />{' '}
                    <span className='text-xl md:text-2xl ml-2'>DriveEase</span>
                </a>
                <span className='bg-primary p-2 rounded hover:cursor-pointer md:hidden'>
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
                </span>
            </div>
            <div
                className={`md:static bg-white md:bg-secondary md:min-w-max text-content absolute md:min-h-fit min-h-[100vh] left-0 w-full md:w-auto flex flex-col md:flex-row items-start md:items-center px-5 transition-all duration-500 ease-in-out
                    ${
                        showMenu
                            ? 'top-[100%] opacity-100'
                            : 'top-[-900%] opacity-0 md:opacity-100'
                    }`}
            >
                <ul className='flex lg:items-center lg:gap-12 gap-8 flex-col lg:flex-row mt-8 lg:mt-0'>
                    {links.map((item, index) => (
                        <li
                            className='px-2 font-bold cursor-pointer py-1 text-lg'
                            key={index}
                        >
                            <Link
                                to={item.href}
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-170}
                                duration={500}
                                onClick={() => setShowMenu(false)}
                                className='transition duration-150 text-gray hover:text-primary'
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link
                    activeClass='active'
                    to='rent-now'
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}
                    className='text-start my-8 md:my-0 md:ml-16 py-2 px-6 font-bold tracking-wide cursor-pointer hover:bg-primary rounded border border-primary text-primary hover:text-white  transition-all duration-200'
                    onClick={() => setShowMenu(false)}
                >
                    Rent Now
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;

//  <div className='hidden md:flex space-x-6 '>
//                     <ul className='flex justify-evenly space-x-12'>
//                         <li className='hover:text-primary hover:transition hover:duration-300 hover:ease-in-out'>
//                             <Link
//                                 activeClass='active'
//                                 to='about'
//                                 spy={true}
//                                 smooth={true}
//                                 offset={-50}
//                                 duration={500}
//                                 className='font-semibold cursor-pointer px-2'
//                             >
//                                 About
//                             </Link>
//                         </li>
//                         <li className='hover:text-primary hover:transition hover:duration-300 hover:ease-in-out'>
//                             <Link
//                                 activeClass='active'
//                                 to='cars'
//                                 spy={true}
//                                 smooth={true}
//                                 offset={-50}
//                                 duration={500}
//                                 className='font-semibold cursor-pointer px-2'
//                             >
//                                 Cars
//                             </Link>
//                         </li>
//                         <li className='hover:text-primary hover:transition hover:duration-300 hover:ease-in-out'>
//                             <Link
//                                 activeClass='active'
//                                 to='advantages'
//                                 spy={true}
//                                 smooth={true}
//                                 offset={-50}
//                                 duration={500}
//                                 className='font-semibold cursor-pointer px-2'
//                             >
//                                 Why choose us
//                             </Link>
//                         </li>
//                         <li className='hover:text-primary hover:transition hover:duration-300 hover:ease-in-out'>
//                             <Link
//                                 activeClass='active'
//                                 to='testimonial'
//                                 spy={true}
//                                 smooth={true}
//                                 offset={-50}
//                                 duration={500}
//                                 className='font-semibold cursor-pointer px-2'
//                             >
//                                 Testimonial
//                             </Link>
//                         </li>
//                         <li className='hover:text-primary hover:transition hover:duration-300 hover:ease-in-out'>
//                             <Link
//                                 activeClass='active'
//                                 to='faq'
//                                 spy={true}
//                                 smooth={true}
//                                 offset={-50}
//                                 duration={500}
//                                 className='font-semibold cursor-pointer px-2'
//                             >
//                                 FAQ
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//                 <button className='hidden md:flex bg-primary px-4 py-2 cursor-pointer border-none rounded text-[14px] font-medium hover:bg-white hover:border hover:border-primary hover:text-primary hover:transition hover:ease-in-out hover:duration-300'>
//                     Rent Now
//                 </button>
//                 <div className='md:hidden'>
//                     <div className='bg-primary p-2 rounded hover:cursor-pointer md:hidden'>
//                         {showMenu ? (
//                             <FaXmark
//                                 className='text-2xl text-white'
//                                 onClick={() => setShowMenu(!showMenu)}
//                             />
//                         ) : (
//                             <FaBars
//                                 className='text-2xl text-white'
//                                 onClick={() => setShowMenu(!showMenu)}
//                             />
//                         )}
//                     </div>
//                     <div
//                         className={`bg-white text-content flex flex-col py-6 rounded absolute top-20 right-8 w-full h-full bg-opacity-60 transition-transform ease duration-300 md:hidden ${
//                             showMenu
//                                 ? 'transform translate-x-0'
//                                 : 'transform -translate-x-full'
//                         }`}
//                         style={{ zIndex: 999, backdropFilter: 'blur(10px)' }}
//                     >
//                         <Link
//                             activeClass='active'
//                             to='about'
//                             spy={true}
//                             smooth={true}
//                             offset={-50}
//                             duration={500}
//                             className='text-start my-1 py-2 px-6 font-bold tracking-wide cursor-pointer hover:text-primary'
//                             onClick={() => setShowMenu(false)}
//                         >
//                             About
//                         </Link>
//                         <Link
//                             activeClass='active'
//                             to='cars'
//                             spy={true}
//                             smooth={true}
//                             offset={-50}
//                             duration={500}
//                             className='text-start my-1 py-2 px-6 font-bold tracking-wide cursor-pointer hover:text-primary'
//                             onClick={() => setShowMenu(false)}
//                         >
//                             Cars
//                         </Link>
//                         <Link
//                             activeClass='active'
//                             to='advantages'
//                             spy={true}
//                             smooth={true}
//                             offset={-50}
//                             duration={500}
//                             className='text-start my-1 py-2 px-6 font-bold tracking-wide cursor-pointer hover:text-primary'
//                             onClick={() => setShowMenu(false)}
//                         >
//                             Why choose us
//                         </Link>
//                         <Link
//                             activeClass='active'
//                             to='testimonial'
//                             spy={true}
//                             smooth={true}
//                             offset={-50}
//                             duration={500}
//                             className='text-start my-1 py-2 px-6 font-bold tracking-wide cursor-pointer hover:text-primary'
//                             onClick={() => setShowMenu(false)}
//                         >
//                             Testimonial
//                         </Link>
//                         <Link
//                             activeClass='active'
//                             to='faq'
//                             spy={true}
//                             smooth={true}
//                             offset={-50}
//                             duration={500}
//                             className='text-start my-1 py-2 px-6 font-bold tracking-wide cursor-pointer hover:text-primary'
//                             onClick={() => setShowMenu(false)}
//                         >
//                             F.A.Qs.
//                         </Link>
//                         <Link
//                             activeClass='active'
//                             to='rent-now'
//                             spy={true}
//                             smooth={true}
//                             offset={-50}
//                             duration={500}
//                             className='text-start my-1 py-2 px-6 font-bold tracking-wide cursor-pointer hover:text-primary'
//                             onClick={() => setShowMenu(false)}
//                         >
//                             Rent Now
//                         </Link>
//                     </div>
//                 </div>
