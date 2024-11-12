import React, { useState } from 'react';
import Images, { images } from '../HelperFiles/Images/Images';
import HeroBannerSection from './HeroBanner';
function AboutUSComponent() {
    return (
        <>
            <HeroBannerSection Title={"About US"} />
            <section>
                <div className='bg-background bg-cover px-8 sm:px-8 md:px-12 gap-10 lg:px-20 h-full w-full '>
                    <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row  w-full  '>
                        <div className='flex flex-col w-[100%] lg:w-[65%] pt-10'>
                            <div className='flex gap-3 items-center justify-center md:justify-normal'>
                                <img src={images.designIcon} className='h-4 w-4' alt="" />
                                <p className='satisfy-regular text-[24px] text-orangeColor'>Get About Us</p>
                                <img src={images.designIcon} className='h-4 w-4 -rotate-180' alt="" />
                            </div>
                            <p className='sanchez-regular text-[20px] md:text-[40px] text-darkColor mt-3'>Let’s connect—your feedback and inquiries are Welcome!</p>
                            <p className='poppins-regular text-[16px] text-[#555555] mt-3'>Progressively impact multidisciplinary leadership skills via e-business leadership skills. Holisticly repurpose multifunctional data before turnkey information. Globally restore client-focused potentialities before scalable core competencies.</p>
                            <div className='flex gap-3 mt-5 items-center'>
                                <div className='flex gap-2 items-center'>
                                    <img src={images.experienceIcon} className='h-[24px] w-[24px]' alt="" />
                                    <p className='text-[12px] md:text-[20px] poppins-regular'>24 Years Experience</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={images.agentIcon} className='h-[24px] w-[24px]' alt="" />
                                    <p className='text-[12px] md:text-[20px] poppins-regular'>Best Travel Agents</p>
                                </div>
                            </div>
                        </div>
                        <div className=' pt-3 justify-center items-center md:justify-normal w-[100%] lg:w-[35%]'>
                            <img src={images.aboutIcon} className='h-[500px]' alt="" />
                        </div>
                    </div>
                    <p className='mt-10'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,</p>
                    <div className='flex flex-col sm:flex-col md:flex-row  lg:flex-row w-full pt-10 gap-5 h-full items-center  justify-center md:justify-normal lg:justify-normal'>
                        <div className='w-[100%] lg:w-[50%] h-[50%] justify-center'>
                            <img src={images.TravelImage} className='' alt="" />
                        </div>
                        <div className='w-[100%] lg:w-[50%] h-[50%]'>
                            <p className=' poppins-regular'>We are Nurtured from the seed of a single idea ‘to empower the traveller with easy & instant travel bookings providing comprehensive choices’,  is a pioneer in India’s online travel space. Founded by Deep Kalra in the year 2000,  began its journey by serving the US-India travel market with best-value products & services, powered by robust technology and round-the-clock customer support. We are Nurtured We are Nurtured We are Nurtured We are NurturedWe are Nurtured We are Nurtured from the seed of a single idea ‘to empower the traveller with easy & instant travel bookings providing comprehensive choices’,  is a pioneer in India’s online travel space. Founded by Deep Kalra in the year 2000,  began its journey by serving the US-India travel market with best-value products & services, powered by robust technology and round-the-clock customer support.</p>
                            <p className='pt-5 poppins-regular'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                    <p className='poppins-regular text-[16px] mt-10 pb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </section>

            <section>
                <div className=''>

                </div>
            </section>
        </>
    )
}
export default AboutUSComponent;