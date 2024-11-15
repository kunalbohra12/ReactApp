import React from 'react';
import HeaderComponent from './HeaderUI/HeaderUI';
import Images, { images } from '../HelperFiles/Images/Images.js';
function HomeBanner() {
    return (
        <div className='relative -mt-[100px]'>
            <img src={images.bgImage} className='h-screen bg-no-repeat' alt="" />
            <div className='absolute top-[300px] flex flex-col justify-center w-full items-center '>
                <h1 className='text-white text-[45px] sm:text-[70px] md:text-[90px] satisfy-regular'>Enjoy in the best way!</h1>
                <p className='text-white   sanchez-regular text-center'>Find awesome flights booking.</p>
                <button className='poppins-semibold text-[15px] py-2 px-5 bg-orangeColor rounded-md mt-3 mb-32 text-white'>Get Started</button>
            </div>
            <img className="bottom-0 absolute m-0 p-0" src={images.CloudsIcon} alt="" />
        </div>

    );
}
export default HomeBanner;