import { FaBuilding } from "react-icons/fa";
import { PiAirplaneInFlight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Images, { images } from '../../HelperFiles/Images/Images.js';
import { Link, useLocation } from 'react-router-dom';
export default function HeaderComponent({ title }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isClicked, setisClicked] = useState(false);
  const [isClicked2, setisClicked2] = useState(false);
  const handleClick = () => {
    setisClicked(true);
    setisClicked2(false);
  }
  const handleFlights = () => {
    setisClicked(false);
    setisClicked2(true);

  }
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);

  }
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/Login");
  };
  return (
    <>


      <div className=' pt-5 px-5 md:px-10 lg:px-20 relative z-10 '>
        <nav>
          <div className='flex bg-white opacity-[0.8] py-3 px-5 lg:px-8 rounded-[8px] items-center'>
            <Link to="/Contact" rel="stylesheet" href="">
              <img src={images.flightLogo} className='h-11 w-52' alt="" />
            </Link>
            {/* Hotels Link */}
            <Link to="/Hotels" onClick={handleClick}>
              <div className='gap-2 ml-5 hidden sm:hidden md:flex lg:flex items-center'>
                <FaBuilding
                  className={`${isClicked ? 'text-orangeColor' : 'text-black'} `}
                  color="text-red-500"
                />
                <span className={`${isClicked ? 'text-orangeColor' : 'text-black'} sanchez-regular text-[18px]`}>Hotels</span>
              </div>
            </Link>
            {/* Flights Link */}
            <Link to="/Flights" onClick={handleFlights}>
              <div className=' gap-2 ml-3 hidden sm:hidden md:flex lg:flex items-center'>
                <PiAirplaneInFlight

                  className={`${isClicked2 ? 'text-orangeColor' : 'text-black'} `}
                  color="text-red-500"
                />
                <span className={`${isClicked2 ? 'text-orangeColor' : 'text-black'} sanchez-regular text-[18px]`}>Flights</span>
              </div>
            </Link>
            {/* Profile and Bars Icons */}
            <div className="flex ms-auto gap-3 items-center">
              <img src={images.personIcon} alt="Person Icon" className="h-[36px] w-[36px]" />
              <img
                src={images.barsIcon}
                alt="Bars Icon"
                className="flex md:hidden h-[36px] w-[36px] cursor-pointer"
                onClick={toggleDrawer}
              />
              <button onClick={handleLoginClick} className=" hidden md:flex text-[14px] bg-orangeColor poppins-semibold text-white py-2 px-3 rounded-[8px] " >Login/SignUp</button>
            </div>
          </div>
        </nav>

        {/* Drawer */}
        <div
          className={`rounded-[10px] block md:hidden fixed top-0 right-0 h-full w-80 bg-white text-black transform ${isDrawerOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out z-20`}
        >
          <div className="flex items-center justify-between pt-5 px-2">
            <img src={images.flightLogo} className='h-11 w-52' alt="" />
            <button
              onClick={toggleDrawer}
              className="m-4 p-2 bg-red-500 text-white rounded"> Close</button>
          </div>

          <nav className="p-6 space-y-4">
            <Link to="/Hotels" onClick={handleClick}>
              <div className='gap-2  flex items-center'>
                <FaBuilding
                  className={`${isClicked ? 'text-orangeColor' : 'text-black'} `}
                  color="text-red-500"
                />
                <span className={`${isClicked ? 'text-orangeColor' : 'text-black'} sanchez-regular text-[18px]`}>Hotels</span>
              </div>
            </Link>
            <Link to="/Flights" onClick={handleFlights}>
              <div className=' gap-2 flex items-center'>
                <PiAirplaneInFlight
                  className={`${isClicked2 ? 'text-orangeColor' : 'text-black'} `}
                  color="text-red-500"
                />
                <span className={`${isClicked2 ? 'text-orangeColor' : 'text-black'} sanchez-regular text-[18px]`}>Flights</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>


    </>
  );
};