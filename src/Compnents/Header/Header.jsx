import React from 'react';
import Images, { images } from '../../HelperFiles/Images/Images.js';
export default function HeaderComponent(){
return(
    <>
    {/* Main_Container */}
    <div className='flex mt-12 px-5 sm:px-5 md:px-10 lg:px-20 items-center '>

    {/* Logo Icon */}
    <div className='hidden sm:flex space-x-10 '>
        <img className='h-[40px] w-[188px]' src={images.logoIcon} alt="" />

        <div className='hidden  lg:flex  gap-8 items-center'>
            <a href="https://example.com" class="text-[#273150] hover:text-[#F4864D]">Home</a>
            <a href="https://example.com" class="text-[#273150] hover:text-[#F4864D]">About</a>
            <a href="https://example.com" class="text-[#273150] hover:text-[#F4864D]">Pricing</a>
            <a href="https://example.com" class="text-[#273150] hover:text-[#F4864D]">Offers</a>
        </div>

    </div>

       {/* SignUp & Login Action Buttons */}
     <div className='hidden lg:flex relative ms-auto space-x-4 items-center'>
        <a href="https://example.com" class="text-[#273150] text-[18px] hover:text-[#F4864D]">SignUp</a>
        <div className='bg-[#E9EAED] h-6 w-[1px] '></div>
        <a href="https://example.com" class="text-[#273150] text-[18px] hover:text-[#F4864D]">Login</a>
    </div>
    
        {/* Mobile Screen Action Buttons */}
    <div className=' flex lg:hidden ms-auto gap-2 items-center'>
            <button className='flex items-center'>
                <img src={images.userIcon} alt="" />
            </button>
            <button className='flex items-center'>
                <img src={images.menuIcon} alt="" />
            </button>
    </div>
        

   </div>
   </>
);
};