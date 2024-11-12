import React from 'react';
import HeroBannerSection from './HeroBanner';
import Images, { images } from '../HelperFiles/Images/Images.js';
function Hotels() {
  return (
    <>
      <HeroBannerSection Title={"Hotels"} />
      <section>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 bg-mainColor px-5 sm:px-8 md:px-12 lg:px-20 pt-20'>
          <div className='gap-3 items-center '>
            <div className='flex items-center justify-center md:justify-normal'>
              <img src={images.designIcon} className='h-4 w-4' alt="" />
              <span className='satisfy-regular text-[24px] text-orangeColor'>Hotels Bookings</span>
              <img src={images.designIcon} className='h-4 w-4 -rotate-180' alt="" />
            </div>
            <p className='sanchez-regular text-[24px] text-darkColor'>Book your needs in an easy way</p>
            <p className='poppins-regular text-[16px] text-[#555555] mt-5'>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </p>
            <p className='poppins-regular text-[16px] text-[#555555] mt-10'>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </p>
          </div>
          <div className='flex justify-center items-center w-full'>
            <img src={images.HotelImage} className='h-[519px]  bg-center' alt="Hotel" />
          </div>
        </div>
      </section>


      <section className='bg-mainColor'>
        <div className='px-5 md:px-10 lg:px-20'>
          <div className='w-full bg-container py-9 lg:py-20 grid bg-cover px-5 rounded-[30px] md:px-10 lg:px-[30px] bg-center'>
            <div>
              <p className='sanchez-regular text-[14px] lg:text-[34px] w-full lg:w-[350px] text-white'># Weekly Saving on Remove.com</p>
              <button className='mt-5 bg-orangeColor text-white text-[14px] py-2 px-3 rounded-[10px] sanchez-strong'>Get Up To 25% Off on Travel Booking</button>
              <p className='w-full lg:w-[550px] text-[12px] lg:text-[16px] poppins-regular mt-10 text-white'>Expand knowledge by reading book Two before narrow not relied on. View all Listing</p>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className='bg-mainColor px-5 md:px-10 lg:px-20 pt-20 pb-20'>
          <div className='bg-white px-10 pt-5 pb-5 rounded-[10px]'>
            <p className='sanchez-strong text-[26px] text-black'>Hotel Booking </p>
            <p className='text-black poppins-regular text-[16px]'>What are the advantages of online hotel booking?</p>
            <p className='text-[#6B6B6B] poppins-regular text-[16px]'>Online hotel booking comes with great advantages for travellers.</p>
            <ol className="list-decimal px-5">
              <li className='text-[#6B6B6B] poppins-regular text-[16px]'>You can book hotels in India or even International hotels sitting at home in few simple clicks</li>
              <li className='text-[#6B6B6B] poppins-regular text-[16px]'>You can book hotels in India or even International hotels sitting at home in few simple clicks</li>
              <li className='text-[#6B6B6B] poppins-regular text-[16px]'>You can book hotels in India or even International hotels sitting at home in few simple clicks</li>
              <li className='text-[#6B6B6B] poppins-regular text-[16px]'>You can book hotels in India or even International hotels sitting at home in few simple clicks</li>
              <li className='text-[#6B6B6B] poppins-regular text-[16px]'>You can book hotels in India or even International hotels sitting at home in few simple clicks</li>
              <li className='text-[#6B6B6B] poppins-regular text-[16px]'>You can book hotels in India or even International hotels sitting at home in few simple clicks</li>
              <li className='text-[#6B6B6B] poppins-regular text-[16px]'>You can book hotels in India or even International hotels sitting at home in few simple clicks</li>
              <li className='text-[#6B6B6B] poppins-regular text-[16px]'>You can book hotels in India or even International hotels sitting at home in few simple clicks</li>
            </ol>
            <p className='text-black poppins-regular text-[16px]'>In current situation of Corona pandemic (Covid 19), where can we find safe and well sanitized hotels?</p>
            <p className='text-[#555555] poppins-regular text-[16px] pt-2' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p className='text-black poppins-regular text-[16px]'>What are the popular International Cities for Online Hotel Booking?</p>
            <p className='text-[#555555] poppins-regular text-[16px] pt-2' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </section>


    </>
  );
}

export default Hotels;
