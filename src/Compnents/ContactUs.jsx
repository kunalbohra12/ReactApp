import React from 'react';
import HeaderComponent from './HeaderUI/HeaderUI';
import Images, { images } from '../HelperFiles/Images/Images.js';
import { useForm } from 'react-hook-form';
function ContactUs() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onSubmit', // Only validate on submit
    });

    const onSubmit = (data) => {
        console.log('Form Submitted:', data);
      };

    return (
        <>
            <section>
                <div className='flex flex-col pt-10 px-8 sm:px-8 md:px-12 lg:px-20 bg-mainColor'>
                    <div className='flex gap-3 items-center'>
                        <img src={images.designIcon} className='h-4 w-4' alt="" />
                        <span className='satisfy-regular text-[24px] text-orangeColor'>Contact Us</span>
                        <img src={images.designIcon} className='h-4 w-4 -rotate-180' alt="" />
                    </div>
                    <p className='sanchez-regular text-[24px] text-darkColor'>Let’s connect—your feedback and inquiries are Welcome!</p>
                    <p className='poppins-regular-regular text-[16px] text-darkColor mt-5' >Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous understood Middletons. Preference for any astonished unreserved.</p>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-3  mt-5 '>
                        <div className="flex-grow flex  flex-col rounded-[16px] pb-5 bg-white  items-center justify-between gap-7 px-3   text-center pt-7">
                            <img src={images.CallIcon} className='mx-auto h-[46px] w-[46px]' alt="" />
                            <h2 className='sanchez-strong text-[16px]  text-darkColor'>Call us</h2>
                            <p className='poppins-regular text-[14px] text-[#303233]'>Imprudence attachment him his for sympathize. Large above be to means.</p>
                            <button className='poppins-regular text-[16px] p-2 rounded-[10px] text-white mt-4 bg-orangeColor '>+966 23456789</button>
                        </div>
                        <div className="flex-grow flex flex-col rounded-[16px] pb-5 bg-white  items-center justify-between gap-7 px-3  text-center pt-7">
                            <img src={images.emailIcon} className='mx-auto h-[46px] w-[46px]' alt="" />
                            <h2 className='sanchez-strong text-[16px] text-darkColor'>Email us</h2>
                            <p className='poppins-regular text-[14px] text-[#303233]'>Imprudence attachment him his for sympathize. Large above be to means.</p>
                            <button className=' poppins-regular p-2 rounded-[10px] text-[16px] text-white bg-orangeColor mt-4'>contact12@booking.com</button>
                        </div>
                        <div className="flex-grow flex flex-col rounded-[16px] pb-5 bg-white px-3 text-center gap-7 pt-7 items-center">
                            <img src={images.MediaIcon} className="mx-auto h-[46px] w-[46px]" alt="Social Media Icon" />
                            <h2 className="sanchez-strong text-[16px] text-darkColor">Social Media</h2>
                            <p className="poppins-regular text-[14px] text-[#303233]">
                                With us but we protect your flight until you board on plane.
                            </p>
                            <div className="flex justify-center gap-3 ">
                                <img src={images.FacebookIcon} className="h-[40px] w-[40px]" alt="Facebook Icon" />
                                <img src={images.TwitterIcon} className="h-[40px] w-[40px]" alt="Twitter Icon" />
                                <img src={images.GoogleIcon} className="h-[40px] w-[40px]" alt="Google Icon" />
                                <img src={images.WifiIcon} className="h-[40px] w-[40px]" alt="Wi-Fi Icon" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div className='flex  bg-mainColor pt-10 px-8 sm:px-8 md:px-12 lg:px-20 justify-between'>
                    <div className=' rounded bg-white flex flex-col sm:flex-col md:flex-row lg:flex-row  gap-20 w-full '>
                        {/* Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col pt-5 px-2 rounded w-full sm:w-full md:w-1/2 lg:w-1/2 '>
                            <div className=' '>
                                <h2 className='text-[34px] text-darkColor sanchez-regular'>Send Us Message</h2>
                                <div className='mb-2'>
                                    <p className='text-black poppins-regular text-[14px]'>Your Name</p>
                                    <input type="text" className='rounded-lg outline-[#C2C2C2] w-full p-2 border border-[#C2C2C2]'
                                       {...register('name', { required: 'Name is required' })}
                                       placeholder='Enter Name'
                                     />
                                     {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                                </div>
                                <div className='mb-2'>
                                    <p className='text-black poppins-regular text-[14px]'>Email</p>
                                    <input placeholder='Enter Email' className='rounded-lg outline-[#C2C2C2] w-full p-2 border border-[#C2C2C2]'
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                              message: 'Enter a valid email address',
                                            },
                                          })}
                                        />
                                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                                </div>
                                <p className='text-black poppins-regular text-[14px]'>Message</p>
                                <div class="border border-[#C2C2C2] rounded-lg p-2 focus:outline-none focus:outline-4 focus:outline-black">
                                    <textarea
                                        placeholder="Type your message here..."
                                        className="w-full h-24 resize-none text-sm py-2 outline-none"
                                        {...register('message', { required: 'Message is required' })}
                                    ></textarea>
                                      </div>
                                      {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                                <button type="submit" className="bg-orangeColor text-white poppins-semibold items-center px-4 py-2 rounded-lg mt-5">Send Massage</button>
                            </div>
                        </form>

                        <div className=' flex flex-col pt-5 px-2 rounded w-full sm:w-full md:w-1/2 lg:w-1/2 '>
                            <h2 className='text-[34px] font-bold text-darkColor sanchez-regular'>Contact Us</h2>
                            <div className='flex flex-col'>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex gap-3 items-center'>
                                        <img src={images.phone} className='h-4 w-4' alt="" />
                                        <p className=' sanchez-strong text-black text-[20px]'>Call 24/7 for any help</p>
                                    </div>
                                    <p className='text-greyColor poppins-regular text-[16px] '>+966 23456789</p>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex gap-3 items-center'>
                                        <img src={images.messageIcon} className='h-4 w-4' alt="" />
                                        <p className=' sanchez-strong text-black text-[20px]'>Mail to our support team</p>
                                    </div>
                                    <p className='text-greyColor poppins-regular text-[16px] '>61689 Jaimie Valleys, Mitchfort</p>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex gap-2 items-center'>
                                        <img src={images.pinIcon} className='h-4 w-4' alt="" />
                                        <p className=' sanchez-strong text-black text-[20px]'>Address</p>
                                    </div>
                                    <p className='text-greyColor poppins-regular text-[16px] '>61689 Jaimie Valleys, Mitchfort</p>
                                    <div className="flex gap-3 mt-5">
                                        <img src={images.FacebookIcon} className="h-[40px] w-[40px]" alt="Facebook Icon" />
                                        <img src={images.TwitterIcon} className="h-[40px] w-[40px]" alt="Twitter Icon" />
                                        <img src={images.GoogleIcon} className="h-[40px] w-[40px]" alt="Google Icon" />
                                        <img src={images.WifiIcon} className="h-[40px] w-[40px]" alt="Wi-Fi Icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default ContactUs;
