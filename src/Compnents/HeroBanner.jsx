import React from 'react';
import HeaderComponent from './HeaderUI/HeaderUI';
import Images, { images } from '../HelperFiles/Images/Images.js';
function HeroBannerSection({ Title, SubTitle }) {



    return (
        <div className='relative -mt-[100px]'>
            <img src={images.bgImage} className='h-[500px] bg-no-repeat' alt="" />
            <div  className='absolute top-[300px] flex flex-col justify-center w-full items-center'>
                <h1 className='text-white text-[42px] sanchez-regular'>{Title}</h1>
                <p className='text-white  text-[22px] sanchez-regular text-center'>{SubTitle}</p>
            </div>
            <img className="bottom-0 absolute" src={images.CloudsImage} alt="" />
        </div>
    );

}

export default HeroBannerSection;
