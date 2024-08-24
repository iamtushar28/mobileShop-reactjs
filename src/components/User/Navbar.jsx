import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaRegHeart, FaUserAstronaut } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { RiMenuFill } from 'react-icons/ri';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For dropdown menu

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleDropdownClick = (e) => {
        e.stopPropagation(); // Prevent event from bubbling up to parent elements
        toggleDropdown();
    };

    return (
        <div className="navbar">
            <nav className="w-full h-[88px] flex justify-around items-center relative bg-white shadow-sm">
                <a href="#" className="font-sans font-bold text-2xl">
                    <span className="text-[#fdc135]">Cyb</span>er
                </a>
                {/* Desktop Links */}
                <ul className="md:flex gap-4 hidden">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `font-semibold text-[16px] ${isActive ? 'py-1 border-b-2 border-[#fac039] text-black' : 'text-zinc-400 hover:text-black'} transition-all duration-300 cursor-pointer`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/details"
                            className={({ isActive }) =>
                                `font-semibold text-[16px] ${isActive ? 'py-1 border-b-2 border-[#fac039] text-black' : 'text-zinc-400 hover:text-black'} transition-all duration-300 cursor-pointer`
                            }
                        >
                            Details
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/catelog"
                            className={({ isActive }) =>
                                `font-semibold text-[16px] ${isActive ? 'py-1 border-b-2 border-[#fac039] text-black' : 'text-zinc-400 hover:text-black'} transition-all duration-300 cursor-pointer`
                            }
                        >
                            Catelog
                        </NavLink>
                    </li>
                </ul>
                {/* Desktop Icons */}
                <ul className="md:flex gap-4 hidden">
                    <li>
                        <NavLink
                            to="/wishlist"
                            className={({ isActive }) =>
                                `font-semibold ${isActive ? 'py-1 text-[#fac039]' : 'text-black'} transition-all duration-300 cursor-pointer`
                            }
                        >
                            <FaRegHeart size="20px" />
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/cart"
                            className={({ isActive }) =>
                                `font-semibold ${isActive ? 'py-1 text-[#fac039]' : 'text-black'} transition-all duration-300 cursor-pointer`
                            }
                        >
                            <MdOutlineShoppingCart size="20px" />
                        </NavLink>
                    </li>

                    <li className="relative">
                        <NavLink
                            to="#"
                            onClick={handleDropdownClick}
                           className={({ isActive }) =>
                                `font-semibold ${isActive ? 'py-1 text-black' : ''} transition-all duration-300 cursor-pointer`
                            }
                        >
                            <FaUserAstronaut size="20px" />
                        </NavLink>
                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-20">
                                <ul className="flex flex-col">
                                    <li>
                                        <NavLink
                                            to="/order"
                                            className="block px-4 py-2 text-black hover:bg-gray-100"
                                        >
                                            My Order
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/"
                                            className="block px-4 py-2 text-black hover:bg-gray-100"
                                        >
                                            Logout
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                </ul>
                {/* Mobile Menu Icon */}
                <div className="block md:hidden">
                    <a href="#" className="text-xl" onClick={toggleMobileMenu}>
                        <RiMenuFill />
                    </a>
                </div>
            </nav>

            {/* Mobile Menu with Smooth Transition */}
            <div className={`md:hidden z-10 absolute flex border-b flex-col-reverse items-center bg-white w-full transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-[400px] py-4' : 'max-h-0'}`}>
                <ul className="flex flex-col items-center gap-4">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `font-semibold text-[16px] ${isActive ? 'py-1 border-b-2 border-[#fac039] text-black' : 'text-zinc-400 hover:text-black'} transition-all duration-300 cursor-pointer`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/details"
                            className={({ isActive }) =>
                                `font-semibold text-[16px] ${isActive ? 'py-1 border-b-2 border-[#fac039] text-black' : 'text-zinc-400 hover:text-black'} transition-all duration-300 cursor-pointer`
                            }
                        >
                            Details
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/catelog"
                            className={({ isActive }) =>
                                `font-semibold text-[16px] ${isActive ? 'py-1 border-b-2 border-[#fac039] text-black' : 'text-zinc-400 hover:text-black'} transition-all duration-300 cursor-pointer`
                            }
                        >
                            Catelog
                        </NavLink>
                    </li>
                </ul>
                <ul className="flex mb-4 items-center gap-4">
                    <li>
                        <NavLink
                            to="/wishlist"
                            className={({ isActive }) =>
                                `font-semibold ${isActive ? 'py-1 text-[#fac039]' : 'text-black'} transition-all duration-300 cursor-pointer`
                            }
                        >
                            <FaRegHeart size="20px" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/cart"
                            className={({ isActive }) =>
                                `font-semibold ${isActive ? 'py-1 text-[#fac039]' : 'text-black'} transition-all duration-300 cursor-pointer`
                            }
                        >
                            <MdOutlineShoppingCart size="20px" />
                        </NavLink>
                    </li>
                    <li className="relative">
                        <NavLink
                            to="#"
                            onClick={handleDropdownClick}
                            className={({ isActive }) =>
                                `font-semibold text-[24px] ${isActive ? 'py-1' : 'text-black'} transition-all duration-300 cursor-pointer`
                            }
                        >
                            <FaUserAstronaut size="20px" />
                        </NavLink>
                        {/* Mobile Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-20">
                                <ul className="flex flex-col">
                                    <li>
                                        <NavLink
                                            to="/order"
                                            className="block px-4 py-2 text-black hover:bg-gray-100"
                                        >
                                            My Order
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/"
                                            className="block px-4 py-2 text-black hover:bg-gray-100"
                                        >
                                            Logout
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
