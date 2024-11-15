import React from 'react';
import Images, { images } from '../../HelperFiles/Images/Images';
import { Link } from 'react-router-dom';
function FooterComponent() {

    return (
        <>
            <footer clas>
                <div className="flex flex-col md:flex-row lg:flex-row px-10 lg:px-20 bg-[#252525] text-white pt-8 pb-5">
                    {/* Column 3: Social Media */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Column 3: Social Media */}
                        <div>
                            <img src={images.footerlgIcon}className="text-lg font-semibold mb-4"/>
                            <p className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                            <button className='p-2 bg-orangeColor poppins-semibold text-[16px] mt-5 rounded'>Flight Search</button>
                        </div>

                        {/* Column 3: Social Media */}
                        <div className='mb-4'>
                            <h3 className="text-lg gap-1 mb-1 sanchez-strong">Quick Links</h3>
                            <hr className='border border-[#C2C2C2] w-20 mb-4 ' />
                                <Link  to={"/AboutUs"} ><p  className="text-[16px] poppins-regular hover:text-orangeColor mb-4">About Us</p></Link >
                                <Link ><p  className="text-[16px] poppins-regular  hover:text-orangeColor mb-4">Carrers</p></Link >
                                <Link ><p  className="text-[16px]  poppins-regular hover:text-orangeColor mb-4">Offers</p></Link >
                                <Link ><p className="text-[16px] poppins-regular  hover:text-orangeColor mb-4">Blog</p></Link >
                        </div>

                        {/* Column 3: Social Media */}
                        <div className='flex flex-col'>
                        <h3 className="text-lg sanchez-strong mb-1">About the Site</h3>
                        <hr className='border border-[#C2C2C2] w-20 mb-4 ' />
                        <Link to={"/Contact"} ><p className='text-[#CCCCC]  poppins-regular text-[16px] hover:text-orangeColor mb-2'>Customer Support</p></Link>
                            <p className='text-[#CCCCC]  poppins-regular text-[16px] hover:text-orangeColor mb-2'>Payment Security</p>
                            <p className='text-[#CCCCC]  poppins-regular text-[16px] hover:text-orangeColor mb-2'>FAQs</p>
                            <p className='text-[#CCCCC]  poppins-regular text-[16px] hover:text-orangeColor mb-2'>Security</p>
                            <p className='text-[#CCCCC]  poppins-regular text-[16px] hover:text-orangeColor mb-2'>terms & conditions</p>
                            
                        </div>

                        {/* Column 3: Social Media */}
                        <div className='flex flex-col'>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex gap-3 items-center'>
                                        <img src={images.phone} className='h-4 w-4' alt="" />
                                        <p className=' sanchez-strong text-white text-[20px]'>Call 24/7 for any help</p>
                                    </div>
                                    <p className='text-greyColor poppins-regular text-[16px] '>+966 23456789</p>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex gap-3 items-center'>
                                        <img src={images.messageIcon} className='h-4 w-4' alt="" />
                                        <p className=' sanchez-strong text-white text-[20px]'>Mail to our support team</p>
                                    </div>
                                    <p className='text-greyColor poppins-regular text-[16px] '>contact12@booking.com</p>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex gap-2 items-center'>
                                        <img src={images.pinIcon} className='h-4 w-4' alt="" />
                                        <p className=' sanchez-strong text-white text-[20px]'>Address</p>
                                    </div>
                                    <p className='text-greyColor poppins-regular text-[16px] '>61689 Jaimie Valleys, Mitchfort</p>
                                   
                                </div>
                            </div>
                    </div>

                    {/* Column 3: Social Media */}

                </div>
                <div className="text-center py-2 bg-black">
                    <p className="text-[16px] text-white sanchez-strong">&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </footer>



        </>
    );

}

export default FooterComponent;
