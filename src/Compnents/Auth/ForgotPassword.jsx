import React, { useState } from 'react';
import Images, { images } from '../../HelperFiles/Images/Images.js';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from "react-router-dom";
import { IoEyeOffOutline } from "react-icons/io5";
import axios from 'axios';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // Using React Icons for the eye icon
import ToastComponent from '../../HelperFiles/Toast.jsx';
import { toast } from 'react-toastify';
import BackgroundLayout from './Auth.jsx';
import { forgot } from '../Api/AuthAPI.jsx';






function ForgotPassword (){
  const [newData,setNewData] = useState(false);
  
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onSubmit', // Only validate on submit
    });
    
    const navigate = useNavigate();
   

    const onSubmit = async (data) => {
        try {
            const response = await forgot({
                email: data.email,
            });
    
            console.log('Forgot API Success:', response);
            if (response.data) {
                setNewData(!newData);
                console.log(newData);
            }           
            toast.success(response.data.message);

            // Display the OTP message on the forgot screen
            const otpData = response?.data?.data?.otp;
            if (otpData) {
                setTimeout(() => {
                    navigate('/Verification', { state: { email: data.email,otp:otpData } }); toast.success(`Your OTP is: ${response.data.data.otp}`);
                }, 3000);
               
            } else {
                console.error('OTP not found in response');
            }

            // Pass only email to the verification screen
                  } catch (error) {
            console.error('Forgot API gives Error', error.response?.data?.message || error.message);
            toast.error('Forgot API gives Error');
        }
    };
    
    
    
return (
    <>
        <BackgroundLayout Children={
            <>
                <img src={images.flightLogo} className='mx-auto h-[39px] w-[209px] mt-3' alt="" />
                <p className='text-white sanchez-strong text-[20px] text-center mt-3'>Forgot Password</p>
                <p className=' text-center  text-[#D4D4D4] poppins-regular text-[12px] mt-2'>Welcome back! Please enter your details.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-2 mt-5'>
                    <p className='text-white text-[14px] poppins-regular' >Email</p>
                    <input type="text" placeholder='Enter Email' className='outline-none text-white p-3 rounded-lg bg-transparent border border-Customborder placeholder-Customborder'
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
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
                <button type='submit' disabled={newData ? true : false} className=' w-full rounded-lg py-2 mt-5 bg-orangeColor text-white poppins-semibold text-[16px]'>Send</button>
                </form>
                <button onClick={() => navigate("/")} className='text-white poppins-regular text-[16px] mt-5'>Back to Sign In</button>
            </>
        }>
        </BackgroundLayout>

    </>
);
}


export default ForgotPassword;
// Make the POST request using Axios
