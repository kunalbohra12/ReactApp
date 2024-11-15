import React, { useState } from 'react';
import Images, { images } from '../../HelperFiles/Images/Images.js';
import { useForm } from 'react-hook-form';
import { IoEyeOffOutline } from "react-icons/io5";
import axios from 'axios';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // Using React Icons for the eye icon
import ToastComponent from '../../HelperFiles/Toast.jsx';
import { toast } from 'react-toastify';
import BackgroundLayout from './Auth.jsx';
import { useNavigate,useLocation } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import { OtpVerification } from '../Api/AuthAPI.jsx';


function Verification() {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onSubmit', // Only validate on submit
    });
    const location = useLocation();
    const email = location.state?.email;
    const otpData = location.state?.otpData;



    const onSubmit = async (data) => {
        try {
            const response = await OtpVerification({
                email: email, // Ensure `email` is defined properly in your component
                otp: otp, // Ensure `otpData` is defined and valid
            });
    
            console.log('Email:', email);
            console.log('OTP:', otpData);
    
            if (response?.data?.success) { // Assuming success indicates OTP is valid
                console.log('OTP Verified Successfully');
                toast.success(response.data.message);
    
                // Navigate to reset password screen after 2 seconds
                setTimeout(() => {
                    navigate('/ResetPassword',{ state: { email: email } });
                }, 2000);
            } else {
                console.error('OTP verification failed');
                toast.error('Invalid OTP');
            }
        } catch (error) {
            console.error('OTP API gave an error:', error.response?.data?.message || error.message);
            toast.error(error.response?.data?.message || 'OTP verification error');
        }
    };
    





    return (
        <>
            <BackgroundLayout Children={
                <>
                    <img src={images.flightLogo} className='mx-auto h-[39px] w-[209px] mt-3' alt="" />
                    <p className='text-white sanchez-strong text-[20px] text-center mt-3'>Verification</p>
                    <p className=' text-center  text-[#D4D4D4] poppins-regular text-[14px] mt-2'>Sent OTP on
                    <span className='text-white font-bold text-[14px] pl-2'>{email}</span></p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex justify-center items-center mt-5'>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        // className="w-8 h-8 text-center mx-2 border border-gray-300 bg-transparent text-gray-300 rounded-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500" // Tailwind classes
                        inputStyle={{
                            borderRadius: '5px',
                            width: '57px',
                            height: '40px',
                            textAlign: 'center',
                            margin: '0 0.5rem', // Adds horizontal spacing between inputs
                            border: '1px solid #C2C2C2',
                            backgroundColor: 'transparent',
                            color: '#C2C2C2'
                          }}
                        renderInput={(props) => <input {...props} />}
                    />
                    </div>
                    <button type='submit' className=' w-full rounded-lg py-2 mt-5 bg-orangeColor text-white poppins-semibold text-[16px]'>Send</button> 
                    </form>
                </>
            }>
            </BackgroundLayout>

        </>

    );
}
export default Verification;
// Make the POST request using Axios
