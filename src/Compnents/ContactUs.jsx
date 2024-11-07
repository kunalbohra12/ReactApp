import React from 'react';
import HeaderComponent from './HeaderUI/HeaderUI';
import Images, { images } from '../HelperFiles/Images/Images.js';
function ContactUs() {

return(
    <div className='flex flex-col pt-10 px-20 bg-mainColor'>
        <div className='flex '>
            <img src={images.designIcon} alt="" />
            <span className='satisfy-regular text-[24px] text-orangeColor'>Contact Us</span>
            <img src={images.designIcon} alt="" />
        </div>
        <p className='sanchez-regular text-[24px] text-darkColor'>Let’s connect—your feedback and inquiries are Welcome!</p>
        <p className='poppins-regular-regular text-[16px] text-darkColor mt-5' >Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous understood Middletons. Preference for any astonished unreserved.</p>
        <div className='flex flex-col w-full mt-5 '>
            <div className="flex flex-col w-1/2 rounded-[16px] bg-white  items-center px-5 justify-center text-center">
                <img src={images.CallIcon} className=' h-10 w-10 mt-5 ' alt="" />
                <strong className='saturate-200-regular-regular text-[16px] mt-2 text-darkColor'>Call us</strong>
                <p className='poppins-regular-regular text-[20px] mt-5 text-[#303233]'>Imprudence attachment him his for sympathize. Large above be to means.</p>
                <button className='rounded text-white bg-orangeColor mt-2'>+966 23456789</button>
            </div>
        </div>
    </div>
);

}

export default ContactUs;
