import React from 'react';
import { useEffect } from 'react';
import HeaderComponent from './Header/Header.jsx';
import { images } from '../HelperFiles/Images/Images.js';
import playIcon from '../assets/Polygon.png';
import bg from '../assets/Sectionbg.png';
export default function HomePage() {
    useEffect(() => {
        document.body.style.backgroundColor = '#FEF9F6'; // Set your desired color here
    }, []);
    return (
        <>
            <header className='bg-[#FEF9F6]'>
                <HeaderComponent />
            </header>
            <main>
                {/* Top Section */}
                <section className='bg-[#FEF9F6]'>
                    <hr className='border border-[#E9EAED]  flex  lg:hidden my-5' />
                    <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row px-10 lg:px-20 items-center'>
                        {/* Page Description */}
                        <div className='flex flex-col pt-10 '>
                            <p className='font-bold text-[30px] sm:[40px] md:text-[50px] lg:text-[65px] text-black leading-tight'>Designed and built to keep you selling</p>
                            <p className='pt-8 font-regular text-[20px] text-gray-400'>When you need to stay focused and alert on the right deals, our CRM is here to support you.</p>
                            <div className='flex items-center mt-5 gap-3'>
                                <button className='mt-3 pt-3 pb-3 px-5 text-white bg-orange-500 rounded-2xl '>Try it for free</button>
                                <img src={images.playIcon} className='h-16 w-16' alt="" />
                            </div>
                        </div>
                        {/* Illustration Image */}
                        <div className=''>
                            <img src={images.IllustrationIcon} className=' object-contain bg-no-repeat ' />
                        </div>
                    </div>
                    {/* Companies Logo */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5  lg:grid-cols-5 gap-x-5 gap-y-5 mt-12 px-10 lg:px-20 ">
                        <img src={images.redditIcon} className="h-10 w-28 object-contain" alt="Reddit Icon" />
                        <img src={images.AtIcon} className="h-10 w-28 object-contain" alt="At Icon" />
                        <img src={images.zendeskIcon} className="h-10 w-28 object-contain" alt="Zendesk Icon" />
                        <img src={images.LinkedinIcon} className="h-10 w-28 object-contain" alt="LinkedIn Icon" />
                        <img src={images.NetflixIcon} className="h-8 object-contain max-sm:col-span-2 place-self-center w-28 lg:" alt="Netflix Icon" />
                    </div>
                    <p className='mt-40 text-center font-bold text-2xl text-[#1D2538]'>How it Works</p>
                </section>
                {/* Middle Section */}
                <section className='bg-white'>
                    <div className='mt-[111px] grid grid-cols-1 lg:grid-cols-3  gap-x-10  px-20 bg-white'>
                        <div className='flex flex-col text-center lg:text-left'>
                            <img src={images.SignUpIcon} className='mx-auto lg:mx-0 object-contain bg-no-repeat w-[257px] h-48' alt="Sign Up Icon" />
                            <p className='mt-6 font-bold text-center lg:text-left text-[30px] text-[#273150] poppins-semibold'>Sign Up</p>
                            <p className='font-semibold text-[14px] text-[#686F85] poppins-medium'>Sicut spargit virus ad impetum, qui supersumus flesh eating.</p>
                        </div>

                        <div className='flex flex-col text-left lg:text-center'>
                            <img src={images.TrackIcon} className='mx-auto text-left object-contain bg-no-repeat w-[257px] h-48' alt="Sign Up Icon" />
                            <p className='mt-6 font-bold text-[30px] text-center text-[#273150] poppins-semibold'>Track leads</p>
                            <p className='font-semibold text-[14px] text-[#686F85] poppins-medium'>Craven omni memoria patriae zombieland clairvius narcisse religionis sunt diri undead historiarum.</p>
                        </div>

                        <div className='flex flex-col text-center lg:text-left'>
                            <img src={images.SalesIcon} className='text-center lg:text-left object-contain bg-no-repeat w-[257px] h-48' alt="Sign Up Icon" />
                            <p className='mt-6 font-bold text-center lg:text-left text-[30px] text-[#273150] poppins-semibold'>Increase Sales</p>
                            <p className='font-semibold text-[14px] text-center lg:text-left text-[#686F85] poppins-medium'>Sicut spargit virus ad impetum, qui supersumus flesh eating. </p>
                        </div>
                    </div>

                </section>
                {/* Middle Section */}
                <section className='bg-white'>
                    <div>
                        
                    </div>
                    <p className='font-bold text-[25px] text-black text-center pt-10'>Features</p>
                    <div className='grid grid-cols-12 gap-3 pt-5'>
                        <div className='col-span-6'>
                          <img src={images.FeaturesIcon} alt="" />
                        </div>
                        <div className='grid grid-cols-2 gap-5 col-span-4'>
                           <div className='flex flex-col'>
                                <img src={images.extensionIcon} className='h-4 w-4' alt="" />
                                <p className=' mt-3 font-bold'>Manage leads and deals </p>
                                <p className='mt-3 font-normal'>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata.</p>
                           </div>
                           <div className='flex flex-col'>
                                <img src={images.extensionIcon} className='h-4 w-4' alt="" />
                                <p className=' mt-3 font-bold'>Manage leads and deals </p>
                                <p className='mt-3 font-normal'>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata.</p>
                           </div>
                           <div className='flex flex-col'>
                                <img src={images.extensionIcon} className='h-4 w-4' alt="" />
                                <p className=' mt-3 font-bold'>Manage leads and deals </p>
                                <p className='mt-3 font-normal'>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata.</p>
                           </div>
                           <div className='flex flex-col'>
                                <img src={images.extensionIcon} className='h-4 w-4' alt="" />
                                <p className=' mt-3 font-bold'>Manage leads and deals </p>
                                <p className='mt-3 font-normal'>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata.</p>
                           </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}
