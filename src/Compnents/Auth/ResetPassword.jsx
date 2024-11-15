import React, { useState } from 'react';
import Images, { images } from '../../HelperFiles/Images/Images.js';
import { useForm } from 'react-hook-form';
import { IoEyeOffOutline } from "react-icons/io5";
import axios from 'axios';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // Using React Icons for the eye icon
import ToastComponent from '../../HelperFiles/Toast.jsx';
import { toast } from 'react-toastify';
import BackgroundLayout from './Auth.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { setPassword } from '../Api/AuthAPI.jsx';


function ResetPassword() {
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: 'onSubmit', // Only validate on submit
    });
    
    
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const emailId = location.state?.email;
    const [showPassword, setShowPassword] = useState(false);
    const [show, setNotShow] = useState(false);
    const password = watch('password');




    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleConfmPasswordVisibility = () => {
        setNotShow(!show);
    };



    const onSubmit = async (data) => {
        try {
            const response = await setPassword({
                email: emailId,
                password: data.password,
            });
            if (response.data?.data) {
                console.log(response?.data?.message);
                console.log('Password Changed', response);
                toast.success(response?.data?.message);
                setTimeout(() => {
                    navigate('/');
                }, 2000);

            } else {
                toast.error(response?.data?.message);

            }

        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
            console.log('Error in Reset Password:');

        }
    };



    return (
        <>
            <BackgroundLayout Children={
                <>
                    <img src={images.flightLogo} className='mx-auto h-[39px] w-[209px] mt-3' alt="" />
                    <p className='text-white sanchez-strong text-[21px] text-center mt-5'>Set New Password</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col gap-2 mt-2'>
                        {/* <p className='text-white text-[14px] poppins-regular'>New Password</p> */}
                        <div className='flex flex-col gap-2 mt-5'>
                            <p className='text-white text-[14px] poppins-regular' >New Password</p>
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
                    </div>
                    <div className='flex flex-col gap-2 mt-5'>
                        <p className='text-white text-[14px] poppins-regular' >Confirm Password</p>
                        <div className='flex items-center px-2 text-white  rounded-lg  border border-Customborder'>
                                    <input type={show ? "text" : "password"} placeholder='Enter Password' className=' w-full p-3 outline-none text-white bg-transparent placeholder-Customborder'
                                        // value={confirmPassword}
                                        // onChange={(e) => setConfirmPassword(e.target.value)}
                                        {...register('confirmPassword', {
                                            required: 'password is required',
                                            minLength: {
                                                value: 8,
                                                message: 'Password must be at least 8 characters long',
                                            },
                                            pattern: {
                                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                                                message: 'Password must contain letters and numbers',
                                            },
                                            validate: value => 
                                                value === password || 'Passwords do not match',
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
                    <button type='submit' className=' w-full rounded-lg py-2 mt-5 bg-orangeColor text-white poppins-semibold text-[16px]'>Set Password</button>
                    </form>
                </>
            }>
            </BackgroundLayout>

        </>
    );


}
export default ResetPassword;
// Make the POST request using Axios
