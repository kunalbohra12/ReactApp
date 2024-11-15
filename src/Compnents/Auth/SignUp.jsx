import React, { useState } from 'react';
import Images, { images } from '../../HelperFiles/Images/Images.js';
import { Form, useForm } from 'react-hook-form';
import { IoEyeOffOutline } from "react-icons/io5";
import axios from 'axios';
import BackgroundLayout from './Auth.jsx';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // Using React Icons for the eye icon
import { toast, Slide } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { signUp } from '../Api/AuthAPI.jsx';


function SignUpComponent() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [show, notShow] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);

    };
    const toggleConfmPasswordVisibility = () => {
        notShow(!show);

    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onSubmit', // Only validate on submit
    });






    // function handleSignUpApi (){


    //     // Define the login data
    //     const signUpData = {
    //         name: username,
    //         email: email,
    //         password: password,
    //     };
    //     console.log(signUpData)
    //     // Make the POST request using Axios
    //     axios.post('http://65.1.254.166:5000/api/auth/signup', signUpData)
    //         .then((response) => {
    //             // Access the token and message from the response
    //             // Save token to local storage
    //             localStorage.setItem('token', response.data.token);
    //             console.log('iduksdgui')
    //             // Show success message
    //             console.log(response);


    //             toast.success(response.message);
    //         })
    //         .catch((error) => {
    //             // Log error and show error message
    //             console.error('User creation failed:', error);
    //             const errorMessage = error.response?.data?.message || 'An error occurred during signup';
    //             toast.error(errorMessage);
    //         })
    //         .finally(() => {
    //             // Reset loading state here if needed
    //             // setLoading(false);
    //         });
    // };

    const onSubmit = async (data) => {
        try {
            const response = await signUp({
                name: data.username,
                email: data.email,
                password: data.password,
            });
            if (response.success == true) {
                console.log('Sign Up Success:', response);
                console.log('Sign Up Success:', response.data);
                console.log('Sign Up Success:', response.data.data);
                toast.success(response.data.message);

            } else {
                  toast.error('Sign up Failed');

            }

        } catch (error) {
            console.error('Sign Up Error:', error.response?.data?.message || error.message);
            toast.error('error in api');

        }
    };


    return (
        <>
            <BackgroundLayout Children={
                <>
                    <img src={images.flightLogo} className='mx-auto h-[39px] w-[209px] mt-2' alt="" />
                    <p className='text-white sanchez-strong text-[20px] text-center mt-2'>Create your account</p>
                    <p className=' text-center  text-[#D4D4D4] poppins-regular text-[14px] mt-2'>Please create an account to find your dream job</p>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col pt-5 px-2 rounded w-full '>
                        <div className='w-full'>
                            <div className='flex flex-col gap-2 mt-5'>
                                <p className='text-white text-[14px] poppins-regular' >Username</p>
                                <input type="text" placeholder='Enter Username' className='outline-none text-white p-3 rounded-lg bg-transparent border border-Customborder placeholder-Customborder'
                                    // value={username}
                                    // onChange={(e) => setUsername(e.target.value)}
                                    {...register('username', {
                                        required: 'username is required',
                                        message: 'username is required'
                                    })}
                                />
                                {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}

                            </div>
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
                                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                            </div>
                            <div className='flex flex-col gap-2 mt-5'>
                                <p className='text-white text-[14px] poppins-regular' >Confirm Password</p>
                                <div className='flex items-center px-2 text-white  rounded-lg  border border-Customborder'>
                                    <input type={show ? "text" : "password"} placeholder='Enter Password' className=' w-full p-3 outline-none text-white bg-transparent placeholder-Customborder'
                                        // value={confirmPassword}
                                        // onChange={(e) => setConfirmPassword(e.target.value)}
                                        {...register('confirmpassword', {
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
                                            toggleConfmPasswordVisibility();
                                        }}
                                    >
                                        {show ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
                                    </button>

                                </div>
                                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
                            </div>
                            <button type='submit' className=' w-full rounded-lg py-2 mt-3 bg-orangeColor text-white poppins-semibold text-[16px]'>Submit</button>
                            <div className='flex mt-3 gap-2 justify-center items-center'>
                                <p className='text-white' >Already have an account?</p>
                                <button onClick={() => navigate("/")} className=' poppins-semibold text-[14px] text-orangeColor'>Sign In</button>
                            </div>
                        </div>
                    </form>
                </>

            }>
            </BackgroundLayout>
        </>
    );

}

export default SignUpComponent;
