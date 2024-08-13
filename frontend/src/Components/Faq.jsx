import { useState } from 'react';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

const Faq = () => {
    const [viewAnswer, setViewAnswer] = useState({});

    const toggleResponse = (index) => {
        setViewAnswer((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };
    return (
        <div className='mt-12 text-center px-8' id='faq'>
            {' '}
            <p className='text-sm text-primary mb-2'>F.A.Qs.</p>
            <h3 className='text-3xl md:w-1/2 md:mx-auto font-semibold mb-4'>
                Questions and requests we have recieved from clients like you
                overtime.
            </h3>
            <div className='flex flex-col md:w-1/2 mx-auto my-16'>
                <div className='my-4 mx-1 border-b border-gray pb-6'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-lg font-bold text-start'>
                            Can i rent a car if i'm under the age of 18 years?
                        </h3>
                        {viewAnswer[0] ? (
                            <FiMinusCircle
                                className='cursor-pointer text-2xl text-primary'
                                onClick={() => toggleResponse(0)}
                            />
                        ) : (
                            <FiPlusCircle
                                className='cursor-pointer text-2xl'
                                onClick={() => toggleResponse(0)}
                            />
                        )}
                    </div>
                    {viewAnswer[0] && (
                        <p className='py-4 max-w-[80%] text-gray text-start text-[14px] md:text-[1rem]'>
                            No, DriveEase requires renters to be atleast 18
                            years old.
                        </p>
                    )}
                </div>
                <div className='my-4 mx-1 border-b border-gray pb-6'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-lg font-bold text-start'>
                            How does DriveEase works?
                        </h3>
                        {viewAnswer[1] ? (
                            <FiMinusCircle
                                className='cursor-pointer text-2xl text-primary'
                                onClick={() => toggleResponse(1)}
                            />
                        ) : (
                            <FiPlusCircle
                                className='cursor-pointer text-2xl'
                                onClick={() => toggleResponse(1)}
                            />
                        )}
                    </div>
                    {viewAnswer[1] && (
                        <p className='py-4 max-w-[80%] text-gray text-start text-[14px] md:text-[1rem]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aperiam repellat odit illo vel debitis
                            corrupti.
                        </p>
                    )}
                </div>
                <div className='my-4 mx-1 border-b border-gray pb-6'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-lg font-bold text-start'>
                            What documents do i need to rent a car?
                        </h3>
                        {viewAnswer[2] ? (
                            <FiMinusCircle
                                className='cursor-pointer text-2xl text-primary'
                                onClick={() => toggleResponse(2)}
                            />
                        ) : (
                            <FiPlusCircle
                                className='cursor-pointer text-2xl'
                                onClick={() => toggleResponse(2)}
                            />
                        )}
                    </div>
                    {viewAnswer[2] && (
                        <p className='py-4 max-w-[80%] text-gray text-start text-[14px] md:text-[1rem]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aperiam repellat odit illo vel debitis
                            corrupti.
                        </p>
                    )}
                </div>
                <div className='my-4 mx-1 border-b border-gray pb-6'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-lg font-bold text-start'>
                            Are they any milage restrictions?
                        </h3>
                        {viewAnswer[3] ? (
                            <FiMinusCircle
                                className='cursor-pointer text-2xl text-primary'
                                onClick={() => toggleResponse(3)}
                            />
                        ) : (
                            <FiPlusCircle
                                className='cursor-pointer text-2xl'
                                onClick={() => toggleResponse(3)}
                            />
                        )}
                    </div>
                    {viewAnswer[3] && (
                        <p className='py-4 max-w-[80%] text-gray text-start text-[14px] md:text-[1rem]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aperiam repellat odit illo vel debitis
                            corrupti.
                        </p>
                    )}
                </div>
                <div className='my-4 mx-1 border-b border-gray pb-6'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-lg font-bold text-start'>
                            What happens if i need to cancel my reservation?
                        </h3>
                        {viewAnswer[4] ? (
                            <FiMinusCircle
                                className='cursor-pointer text-2xl text-primary'
                                onClick={() => toggleResponse(4)}
                            />
                        ) : (
                            <FiPlusCircle
                                className='cursor-pointer text-2xl'
                                onClick={() => toggleResponse(4)}
                            />
                        )}
                    </div>
                    {viewAnswer[4] && (
                        <p className='py-4 max-w-[80%] text-gray text-start text-[14px] md:text-[1rem]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aperiam repellat odit illo vel debitis
                            corrupti.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Faq;
