import React, { useState } from 'react';
import { FaUserAstronaut } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";
import { IoMdPower } from "react-icons/io";


const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="">
      <button
        onClick={toggleMenu}
        className="flex items-center focus:outline-none"
      >
        <FaUserAstronaut />
      </button>

      {isOpen && (
        <div className="absolute  overflow-visible z-50 right-0 mt-2 w-fit px-5 py-2 mr-4 bg-white border border-gray-200 rounded-lg shadow-lg">
          <a href="#" className="px-4 py-2 font-semibold transition-all duration-300 flex items-center space-x-2">
            <span>Hii! Tushar</span>
          </a>
          <div className='flex justify-center'>
            <div className='w-[100%] h-[0.1rem] rounded-xl bg-[#f9db32]'></div>
          </div>
          <a href="#" className="px-4 py-2 font-semibold text-gray-400 hover:text-black transition-all duration-300 flex items-center space-x-2">
            <GrDeliver />
            <span>My Orders</span>
          </a>
          <a href="#" className="px-4 py-2 font-semibold text-gray-400 hover:text-black transition-all duration-300 flex items-center space-x-2">
            <IoMdPower />
            <span>Logout</span>
          </a>

        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
