import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import light from '../assets/raceflow-light.png';

const Navbar = () => {

    // boolean state declare here ---->
    const [navActive, setNavActive] = useState(false);

    // hooks declare here ---->
    const navigate = useNavigate();

    // event handle declare here ---->
    const handleActiveNav = () => {
        setNavActive(!navActive);
    };

    const handleLogin = () => {
        navigate('/auth/login');
    };

    return (
        <>
            <header className='w-full bg-white relative'>
                {/* desktop navbar design */}
                <div className='w-full min-h-[92px] py-8'>
                    <div className='container mx-auto px-4'>
                        <div className='w-full flex items-center justify-between'>
                            <div className='w-auto'>
                                <img src={light} alt="logo" className='w-[200px] h-full object-cover' />
                            </div>
                            <div className="w-auto hidden lg:block">
                                <nav className="w-auto">
                                    <ul className="w-auto flex items-center justify-center gap-2">
                                        <li className="font-roboto text-base font-medium text-head-charleston-green uppercase"><NavLink className="py-2 px-4 bg-primary-yellow">Home</NavLink></li>
                                        <li className="font-roboto text-base font-medium text-head-charleston-green uppercase"><NavLink className="py-2 px-4 transition ease-linear duration-200 hover:bg-primary-yellow">About Us</NavLink></li>
                                        <li className="font-roboto text-base font-medium text-head-charleston-green uppercase"><NavLink className="py-2 px-4 transition ease-linear duration-200 hover:bg-primary-yellow">Dashboard</NavLink></li>
                                        <li className="font-roboto text-base font-medium text-head-charleston-green uppercase"><NavLink className="py-2 px-4 transition ease-linear duration-200 hover:bg-primary-yellow">Contact Us</NavLink></li>
                                        <li className="font-roboto text-base font-medium text-head-charleston-green uppercase"><NavLink to='/auth/login' className="py-2 px-4 transition ease-linear duration-200 hover:bg-primary-yellow">Login</NavLink></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className='w-auto lg:hidden'>
                                <button onClick={handleActiveNav} className="w-auto">
                                    <IoMdMenu className="text-3xl text-head-charleston-green"></IoMdMenu>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile responsive navbar design */}
                <div className={`w-full h-screen bg-black/20 fixed top-0 transition-all ${navActive ? 'left-0 ease-in-out duration-500' : '-left-[100%] ease-in-out duration-500'}`}>
                    <div className={`w-full h-screen py-6 bg-white transition-all fixed top-0 sm:w-[350px] ${navActive ? 'left-0 ease-linear duration-700' : '-left-[100%] ease-out duration-300'}`}>
                        <div className="w-full flex items-center justify-end pr-6">
                            <button onClick={handleActiveNav} className="w-auto">
                                <IoMdClose className="text-3xl text-head-charleston-green"></IoMdClose>
                            </button>
                        </div>
                        <div className="w-full mt-8">
                            <nav className="w-full">
                                <ul className="w-full space-y-3">
                                    <li className="font-roboto text-base font-medium text-head-charleston-green w-full py-3 px-6 uppercase border-b border-black/5 transition ease-linear duration-200 bg-primary-yellow"><NavLink>Home</NavLink></li>
                                    <li className="font-roboto text-base font-medium text-head-charleston-green w-full py-3 px-6 uppercase border-b border-black/5 transition ease-linear duration-200 hover:bg-primary-yellow"><NavLink>About Us</NavLink></li>
                                    <li className="font-roboto text-base font-medium text-head-charleston-green w-full py-3 px-6 uppercase border-b border-black/5 transition ease-linear duration-200 hover:bg-primary-yellow"><NavLink>Dashboard</NavLink></li>
                                    <li className="font-roboto text-base font-medium text-head-charleston-green w-full py-3 px-6 uppercase border-b border-black/5 transition ease-linear duration-200 hover:bg-primary-yellow"><NavLink>Contact Us</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="w-full flex items-center justify-center gap-2 mt-[50px]">
                            <div className="w-auto">
                                <Link className="p-3 inline-block border-2 border-head-charleston-green rounded-full transition ease-linear duration-200 hover:bg-primary-yellow hover:border-primary-yellow group"><FaFacebookF className="text-base text-head-charleston-green"></FaFacebookF></Link>
                            </div>
                            <div className="w-auto">
                                <Link className="p-3 inline-block border-2 border-head-charleston-green rounded-full transition ease-linear duration-200 hover:bg-primary-yellow hover:border-primary-yellow group"><RiInstagramFill className="text-base text-head-charleston-green"></RiInstagramFill></Link>
                            </div>
                            <div className="w-auto">
                                <Link className="p-3 inline-block border-2 border-head-charleston-green rounded-full transition ease-linear duration-200 hover:bg-primary-yellow hover:border-primary-yellow group"><FaXTwitter className="text-base text-head-charleston-green"></FaXTwitter></Link>
                            </div>
                            <div className="w-auto">
                                <Link className="p-3 inline-block border-2 border-head-charleston-green rounded-full transition ease-linear duration-200 hover:bg-primary-yellow hover:border-primary-yellow group"><FaThreads className="text-base text-head-charleston-green"></FaThreads></Link>
                            </div>
                        </div>
                        <div className="w-full flex flex-row-reverse items-center justify-between absolute bottom-12 left-0 px-6">
                            <button className="w-auto"><MdDarkMode  className="text-xl"></MdDarkMode></button>
                            <button onClick={handleLogin} className="w-auto flex items-center justify-center gap-2">
                                <span className="font-roboto text-base uppercase font-medium mt-[3px]">Login</span>
                                <FiLogIn className="text-lg"></FiLogIn>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;