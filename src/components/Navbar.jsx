import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { toast } from "react-toastify";
import dark from '../assets/raceflow-dark.png';
import light from '../assets/raceflow-light.png';
import useMode from "../hooks/useMode";

const Navbar = () => {

    //? context declare here ------------------------------> 
    const {user, userSignOut} = useContext(AuthContext);

    //? boolean state declare here ------------------------>
    const [navActive, setNavActive] = useState(false);

    //? hooks declare here -------------------------------->
    const navigate = useNavigate();
    const location = useLocation();
    const {theme, setTheme, modeChange} = useMode();

    //? event handle declare here ------------------------->
    const handleActiveNav = () => {
        setNavActive(!navActive);
    };

    const handleLogin = () => {
        navigate('/auth/login');
    };

    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                toast.success('Log Out successful!', {
                    position: "top-right",
                    hideProgressBar: true,
                    closeOnClick: true,
                    autoClose: 3000,
                });
            })
            .catch(err => console.log(err))
    };

    const handleThemeToggle = () => {
        setTheme(!theme);
    };

    return (
        <>
            <header className={`w-full ${location.pathname === '/auth/login' || location.pathname === '/auth/register' ? 'dark:bg-black' : 'absolute top-0 left-0 z-10'}`}>
                {/* desktop navbar design */}
                <div className='w-full min-h-[92px] py-7'>
                    <div className='container mx-auto px-4'>
                        <div className='w-full flex items-center justify-between'>
                            <div className='w-auto'>
                                {
                                    modeChange === 'dark'
                                    ?
                                        <img src={dark} alt="logo" className='w-[200px] h-full object-cover' />
                                    :
                                        <img src={location.pathname === '/auth/login' || location.pathname === '/auth/register' ? light : dark} alt="logo" className='w-[200px] h-full object-cover' />
                                }
                            </div>
                            <div className="w-auto hidden xl:block">
                                <nav className="w-auto">
                                    <ul className="w-auto flex items-center justify-center gap-2">
                                        <li className="font-roboto text-base font-medium uppercase"><NavLink to='/' className={`py-2 px-4 transition ${location.pathname === '/' ? 'text-head-charleston-green bg-primary-yellow' : location.pathname === '/auth/login' || location.pathname === '/auth/register' ? 'text-head-charleston-green hover:text-head-charleston-green hover:bg-primary-yellow dark:text-white' : 'text-white hover:text-head-charleston-green hover:bg-primary-yellow'} ease-linear duration-200`}>Home</NavLink></li>
                                        <li className="font-roboto text-base font-medium uppercase"><NavLink to='/about_us' className={`py-2 px-4 transition ${location.pathname === '/about_us' ? 'text-head-charleston-green bg-primary-yellow' : location.pathname === '/auth/login' || location.pathname === '/auth/register' ? 'text-head-charleston-green hover:text-head-charleston-green hover:bg-primary-yellow dark:text-white' : 'text-white hover:bg-primary-yellow hover:text-head-charleston-green'} ease-linear duration-200`}>About Us</NavLink></li>
                                        <li className="font-roboto text-base font-medium uppercase"><NavLink to='/marathons' className={`py-2 px-4 ${location.pathname === '/marathons' ? 'text-head-charleston-green bg-primary-yellow' : location.pathname === '/auth/login' || location.pathname === '/auth/register' ? 'text-head-charleston-green hover:text-head-charleston-green hover:bg-primary-yellow dark:text-white' : 'text-white hover:bg-primary-yellow hover:text-head-charleston-green'} transition ease-linear duration-200`}>Marathons</NavLink></li>
                                        <li className="font-roboto text-base font-medium uppercase"><NavLink to='/contact' className={`py-2 px-4 ${location.pathname === '/contact' ? 'text-head-charleston-green bg-primary-yellow' : location.pathname === '/auth/login' || location.pathname === '/auth/register' ? 'text-head-charleston-green hover:text-head-charleston-green hover:bg-primary-yellow dark:text-white' : 'text-white hover:bg-primary-yellow hover:text-head-charleston-green'} transition ease-linear duration-200`}>Contact Us</NavLink></li>
                                        <li className="font-roboto text-base font-medium uppercase"><NavLink to='/dashboard' className={`py-2 px-4 transition ${location.pathname === '/dashboard' ? 'text-head-charleston-green bg-primary-yellow' : location.pathname === '/auth/login' || location.pathname === '/auth/register' ? 'text-head-charleston-green hover:text-head-charleston-green hover:bg-primary-yellow dark:text-white' : 'text-white hover:text-head-charleston-green hover:bg-primary-yellow'} ease-linear duration-200`}>Dashboard</NavLink></li>
                                        {
                                            user
                                            ?  
                                                <li onClick={handleSignOut} className="font-roboto text-base font-medium uppercase"><NavLink className={`py-2 px-4 transition ${location.pathname === '/auth/login' || location.pathname === '/auth/register' ? 'text-head-charleston-green hover:bg-primary-yellow dark:text-white dark:hover:text-head-charleston-green' : 'text-white hover:text-head-charleston-green hover:bg-primary-yellow'} ease-linear duration-200`}>Log Out</NavLink></li>
                                            :
                                                <li className="font-roboto text-base font-medium uppercase"><NavLink to='/auth/login' className={`py-2 px-4 transition ${location.pathname === '/auth/login' || location.pathname === '/auth/register' ? 'text-head-charleston-green bg-primary-yellow' : 'text-white hover:text-head-charleston-green hover:bg-primary-yellow'} ease-linear duration-200`}>Login</NavLink></li>
                                        }
                                        {
                                            modeChange === 'dark'
                                            ?
                                                <li onClick={handleThemeToggle} className={`text-base ml-4 w-[61px] cursor-pointer font-roboto font-medium uppercase ${location.pathname === '/auth/login' || location.pathname === '/auth/register' ? 'text-head-charleston-green dark:text-white dark:hover:text-primary-yellow' : 'text-white hover:text-primary-yellow'}`}>Light</li>
                                            :
                                                <li onClick={handleThemeToggle} className={`text-base ml-4 w-[61px] cursor-pointer font-roboto font-medium uppercase ${location.pathname === '/auth/login' || location.pathname === '/auth/register' ? 'text-head-charleston-green dark:text-white dark:hover:text-primary-yellow' : 'text-white hover:text-primary-yellow'}`}>Dark</li>
                                        }
                                    </ul>
                                </nav>
                            </div>
                            <div className='w-auto xl:hidden'>
                                <button onClick={handleActiveNav} className="w-[30px] h-[30px]">
                                    <IoMdMenu className="text-3xl leading-[30px] text-white"></IoMdMenu>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile responsive navbar design */}
                <div className={`w-full h-screen bg-black/20 fixed top-0 transition-all ${navActive ? 'left-0 ease-linear duration-500' : '-left-[100%] ease-linear duration-500'} z-50`}>
                    <div className={`w-full h-screen py-6 bg-white transition-all fixed top-0 sm:w-[350px] ${navActive ? 'left-0 ease-linear duration-700' : '-left-[100%] ease-linear duration-700'}`}>
                        <div className="w-full flex items-center justify-end pr-6">
                            <button onClick={handleActiveNav} className="w-auto">
                                <IoMdClose className="text-3xl text-head-charleston-green"></IoMdClose>
                            </button>
                        </div>
                        <div className="w-full mt-8">
                            <nav className="w-full">
                                <ul className="w-full space-y-3">
                                    <li className="font-roboto text-base font-medium text-head-charleston-green w-full py-3 px-6 uppercase border-b border-black/5 transition ease-linear duration-200 bg-primary-yellow"><NavLink to='/'>Home</NavLink></li>
                                    <li className="font-roboto text-base font-medium text-head-charleston-green w-full py-3 px-6 uppercase border-b border-black/5 transition ease-linear duration-200 hover:bg-primary-yellow"><NavLink to='/about_us'>About Us</NavLink></li>
                                    <li className="font-roboto text-base font-medium text-head-charleston-green w-full py-3 px-6 uppercase border-b border-black/5 transition ease-linear duration-200 hover:bg-primary-yellow"><NavLink to='/marathons'>Marathons</NavLink></li>
                                    <li className="font-roboto text-base font-medium text-head-charleston-green w-full py-3 px-6 uppercase border-b border-black/5 transition ease-linear duration-200 hover:bg-primary-yellow"><NavLink to='/dashboard'>Dashboard</NavLink></li>
                                    <li className="font-roboto text-base font-medium text-head-charleston-green w-full py-3 px-6 uppercase border-b border-black/5 transition ease-linear duration-200 hover:bg-primary-yellow"><NavLink to='/contact'>Contact Us</NavLink></li>
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