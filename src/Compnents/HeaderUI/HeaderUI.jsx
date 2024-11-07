import React from 'react';
import Images, { images } from '../../HelperFiles/Images/Images.js';
import {Link } from 'react-router-dom';
export default function HeaderComponent(){
return(
  <>
    <div className='bg-bg-image h-[400px] bg-cover bg-center pt-5 px-5 md:px-20 lg:px-20'>
         <nav>
         <div className='flex bg-white opacity-[0.7] py-3 px-4 lg:px-8 rounded-[8px] items-center'>
            <Link rel="stylesheet" href="">
           <img src={images.flightLogo} className='h-11 w-52' alt="" />
           </Link>
            {/* Hotels Link */}
               <Link to="/Hotels">
                <div className='gap-2 ml-5 hidden sm:hidden md:flex lg:flex items-center'>
                  <img src={images.HotelsIcon} className='h-[24px] w-[24px]' alt="" />
                  <span className='text-black sanchez-regular text-[18px]'>Hotels</span>
                </div>
            </Link>
            {/* Flights Link */}
            <Link to="/Flights">
              <div className=' gap-2 ml-3 hidden sm:hidden md:flex lg:flex items-center'>
                <img src={images.PlaneIcon}  className='h-[24px] w-[24px]' alt="" />
                <span className='text-black sanchez-regular text-[18px]'>Flights</span>
              </div>
            </Link>
            <div className='flex ms-auto gap-3'>
            <img src={images.personIcon}  alt="" className='h-[36px] w-[36px]' />
            <img src={images.user} alt="" className='h-[36px] w-[36px]' />
            </div>
         </div>
         </nav>
         <p className='mt-[132px] text-center text-white sanchez-regular text-[44px]'>Contact Us</p>
    </div>
    <img className='-mt-40' src={images.CloudsIcon} alt="" />

  </>
);
};