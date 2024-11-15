import React, { useState } from 'react';
import Images, { images } from '../../HelperFiles/Images/Images.js';
import { useForm } from 'react-hook-form';
import { IoEyeOffOutline } from "react-icons/io5";
import axios from 'axios';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // Using React Icons for the eye icon
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function BackgroundLayout({Children}) {

   
    return (
        <>
   <div className='bg-loginBackground bg-cover bg-no-repeat flex justify-center items-center w-full min-h-screen'>
    <div className=' bg-[#FE85334D]  rounded-lg px-5 pt-5 mt-5 mb-5 pb-8 backdrop-blur-custom w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px]'>
        {Children}
    </div>
</div>

        </>
    );

}

export default BackgroundLayout;
