import React, { useState } from 'react';
import Images, { images } from '../../HelperFiles/Images/Images.js';
import { useForm } from 'react-hook-form';
import { IoEyeOffOutline } from "react-icons/io5";
import axios from 'axios';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // Using React Icons for the eye icon
import { toast, Slide } from 'react-toastify';
import BackgroundLayout from './Auth.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import GoogleButton from 'react-google-button'
import { login } from '../Api/AuthAPI.jsx';

function LoginComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onSubmit', // Only validate on submit
    });



    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const googleLogin = useGoogleLogin({
        onSuccess: (codeResponse) => {
            toast.success("Google Login Succesfully:")
        },
        onError: (error) => toast.error("Login Failed:", error),
    });

    const onSubmit = async (data) => {
        try {
            const response = await login({
                email: data.email,
                password: data.password,
            });
            if (response.success || data ) {
                console.log('Login Succesfully', response.data.data);
                console.log('Login Succesfully', response.data);
                toast.success(response.data.message);
                toast.error(response);

            }

        } catch (error) {
            console.error('Login api give error:', error.response?.data?.message || error.message);
            toast.error('error in api');

        }
    };







    // const handleLoginAPI = (e) => {
    //     e.preventDefault();
    //     // setLoading(true);  // Set loading state to true while making the request
    //     // Define the login data
    //     const loginData = {
    //         email: email,
    //         password: password
    //     };
    //     // Make the POST request using Axios
    //     axios.post('http://65.1.254.166:5000/api/auth/login', loginData)
    //         .then((response) => {
    //             // Here you can handle a successful login, like saving the token
    //             localStorage.setItem('authToken', response.data.token); // Store token in localStorage
    //             // Redirect to dashboard or home page
    //             console.log(response);
    //             toast.success(response.data.message);
    //         })
    //         .catch((error) => {
    //             toast.error('Login failed. Please check your credentials.');
    //         })
    //         .finally(() => {
    //             // setLoading(false);  // Reset loading state after the request completes
    //         });
    // };













    // const handleLoginSuccess = (response) => {
    //     console.log('Login Successful:', response);
    //     const token = response.credential;
    //     // Optionally send the token to your backend for verification
    // };

    // const handleLoginFailure = (error) => {
    //     console.error('Login Failed:', error);
    // };





    return (
        <>
            <BackgroundLayout Children={
                <>
                    <img src={images.flightLogo} className='mx-auto h-[39px] w-[209px] mt-2' alt="" />
                    <p className='text-white sanchez-strong text-[20px] text-center mt-2'>Log in to your account</p>
                    <p className=' text-center  text-[#D4D4D4] poppins-regular text-[14px] mt-2'>Welcome back! Please enter your details.</p>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col pt-5 px-2 rounded w-full '>
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
                        <div className='flex flex-col gap-2 mt-5'>
                            <p className='text-white text-[14px] poppins-regular' >Password</p>
                            <div className='flex items-center px-2 text-white  rounded-lg  border border-Customborder'>
                            <input type={showPassword ? "text" : "password"} placeholder='Enter Password' className=' w-full p-3 outline-none text-white bg-transparent placeholder-Customborder'
                                        // value={password}
                                        // onChange={(e) => setPassword(e.target.value)}
                                        {...register('password', {
                                            required: 'password is required',
                                            minLength: {
                                                value: 8,
                                                message: 'Password must be at least 8 characters long',
                                            },
                                            pattern: {
                                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                                                message: 'Password must contain letters and numbers',
                                            },
                                        })}
                                    />

                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();  // Prevent form submission
                                            togglePasswordVisibility();
                                        }}
                                    >
                                        {showPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
                                    </button>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-5'>
                            <div class="flex items-center">
                                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                                <label for="default-checkbox" class="ms-2 text-[14px] poppins-regular text-gray-900 dark:text-gray-300">Remember Me</label>
                            </div>
                            <div onClick={() => navigate("/ForgotPassword")} className='flex' >
                                <p className='text-white poppins-regular text-[14px] hover:text-orangeColor' >Forgot password</p>
                            </div>
                        </div>
                        <button type='submit' className=' w-full rounded-lg py-2 mt-3 bg-orangeColor text-white poppins-semibold text-[16px]'>Sign In</button>
                    </form>
                    <div onClick={() => googleLogin()} className='w-full flex justify-center items-center bg-white p-2 mt-2  gap-2 rounded-lg'>
                        <img src={images.Google} alt="" />
                        <p className='text-black'>Sign in with Google</p>
                    </div>
                    <div className='flex mt-3 gap-2 justify-center items-center'>
                        <p className='text-white' >Don’t have an account?</p>
                        <button onClick={() => navigate("/SignUpComponent")} className='text-orangeColor poppins-semibold text-[14px]'>Sign up</button>
                    </div>
                </>
            } >

            </BackgroundLayout>
        </>
    );

}

export default LoginComponent;
