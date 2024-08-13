import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TbWheel } from 'react-icons/tb';

const Footer = () => {
    return (
        <div className='px-[2.5rem] mb-12 mt-20'>
            <div className='flex flex-col justify-between mb-4 md:flex-row'>
                <div className='mb-8'>
                    <div className='flex items-center'>
                        <TbWheel className='text-primary text-5xl mr-1' />{' '}
                        <p className='font-bold text-lg'>DriveEase</p>
                    </div>
                    <small className='text-sm'>
                        Putting The Car In Carpi Diem Since 1987
                    </small>
                </div>
                <div className='md:w-1/2 flex justify-between'>
                    <div className=''>
                        <p className='font-bold mb-3 text-primary'>Company</p>
                        <ul>
                            <li className='my-2 text-gray cursor-pointer'>
                                about
                            </li>
                            <li className='my-2 text-gray cursor-pointer'>
                                careers
                            </li>
                            <li className='my-2 text-gray cursor-pointer'>
                                press
                            </li>
                            <li className='my-2 text-gray cursor-pointer'>
                                contact us
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        <p className='font-bold mb-3 text-primary'>
                            Quick Links
                        </p>
                        <ul>
                            <li className='my-2 text-gray cursor-pointer'>
                                about us
                            </li>
                            <li className='my-2 text-gray cursor-pointer'>
                                cars
                            </li>
                            <li className='my-2 text-gray cursor-pointer'>
                                benefits
                            </li>
                            <li className='my-2 text-gray cursor-pointer'>
                                how it works
                            </li>
                            <li className='my-2 text-gray cursor-pointer'>
                                testimonials
                            </li>
                            <li className='my-2 text-gray cursor-pointer'>
                                F.A.Qs.
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        <p className='font-bold mb-3 text-primary'>Resources</p>
                        <ul>
                            <li className='my-2 text-gray cursor-pointer'>
                                privacy policy
                            </li>
                            <li className='my-2 text-gray cursor-pointer'>
                                terms of service
                            </li>
                            <li className='my-2 text-gray cursor-pointer'>
                                support
                            </li>
                            <li className='my-2 text-gray cursor-pointer'>
                                license
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='text-gray w-full' />
            <div className='flex items-center justify-between mt-4'>
                <p className='text-gray'> &copy; 2024 DriveEase</p>
                <div className='flex item-center justify-between w-28'>
                    <FaInstagram />
                    <FaXTwitter />
                    <FaFacebookF />
                    <FaLinkedinIn />
                </div>
            </div>
        </div>
    );
};

export default Footer;
