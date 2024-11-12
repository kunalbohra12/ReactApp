import React, { useState } from 'react';
import Images, { images } from '../HelperFiles/Images/Images.js';
import { useForm } from 'react-hook-form';
import { IoEyeOffOutline } from "react-icons/io5";
import axios from 'axios';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // Using React Icons for the eye icon
import ToastComponent from '../HelperFiles/Toast.jsx';

function ForgotPasswordComponent() {

   

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        // setLoading(true);  // Set loading state to true while making the request
        // Define the login data
        const loginData = {
            email
        };

        // Make the POST request using Axios
        axios.post('http://3.144.131.203/ecommerce-web/public/api/forgot-password', loginData)
            .then((response) => {
                // Here you can handle a successful login, like saving the token
                localStorage.setItem('authToken', response.data.token); // Store token in localStorage
                // Redirect to dashboard or home page
                console.log('Login Succesful');
                <ToastComponent title={"Login Successfully"}/>
            })
            .catch((error) => {
                alert('Login error:', error);
                console.log('Login failed. Please check your credentials.');
            })
            .finally(() => {
                // setLoading(false);  // Reset loading state after the request completes
            });
    };




    return (
        <>

            <div className='relative flex justify-center items-center'>
                <img src={images.loginBg} className='h-full w-full' alt="" />
                <div className='absolute bg-[#FE85334D] rounded-lg px-5 pt-5 pb-8 backdrop-blur-custom w-[400px]'>
                    <img src={images.flightLogo} className='mx-auto h-[39px] w-[209px] mt-2' alt="" />
                    <p className='text-white sanchez-strong text-[20px] text-center mt-2'>Log in to your account</p>
                    <p className=' text-center  text-[#D4D4D4] poppins-regular text-[14px] mt-2'>Welcome back! Please enter your details.</p>
                    <div className='flex flex-col gap-2 mt-5'>
                        <p className='text-white text-[14px] poppins-regular' >Email</p>
                        <input type="text" placeholder='Enter Email' className='outline-none text-white p-3 rounded-lg bg-transparent border border-Customborder placeholder-Customborder'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col gap-2 mt-5'>
                        <p className='text-white text-[14px] poppins-regular' >Password</p>
                        <div className='flex items-center px-2 text-white  rounded-lg  border border-Customborder'>
                            <input type={showPassword ? "text" : "password"} placeholder='Enter Password' className=' w-full p-3 outline-none text-white bg-transparent placeholder-Customborder'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button onClick={togglePasswordVisibility}
                            >
                                {showPassword ? (
                                    <AiOutlineEyeInvisible size={24} />
                                ) : (
                                    <AiOutlineEye size={24} />
                                )}
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-5'>
                        <div class="flex items-center">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                            <label for="default-checkbox" class="ms-2 text-[14px] poppins-regular text-gray-900 dark:text-gray-300">Remember Me</label>
                        </div>
                        <div className='flex'>
                            <p className='text-white poppins-regular text-[14px]' >Forgot password</p>
                        </div>
                    </div>
                    <button onClick={handleSubmit} className=' w-full rounded-lg py-2 mt-3 bg-orangeColor text-white poppins-semibold text-[16px]'>Sign In</button>
                    <div className='w-full flex justify-center items-center bg-white p-2 mt-2  gap-2 rounded-lg'>
                        <img src={images.Google} alt="" />
                        <p className='text-black'>Sign in with Google</p>
                    </div>
                    <div className='flex mt-3 gap-2 justify-center items-center'>
                        <p className='text-white' >Don’t have an account?</p>
                        <button className='text-white poppins-semibold text-[14px]'>Sign up</button>
                    </div>
                </div>
            </div>
        </>
    );

}

export default ForgotPasswordComponent;
