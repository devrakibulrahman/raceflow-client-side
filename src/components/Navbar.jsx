import { IoMdMenu } from "react-icons/io";
import '../styles/custom.css';
import light from '../assets/raceflow-light.png';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <header className='w-full py-8'>
                <div className='w-full'>
                    <div className='container mx-auto px-4'>
                        {/* desktop navbar design */}
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
                                        <li className="font-roboto text-base font-medium text-head-charleston-green uppercase"><NavLink className="py-2 px-4 transition ease-linear duration-200 hover:bg-primary-yellow">Login</NavLink></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className='w-auto lg:hidden'>
                                <IoMdMenu className="text-3xl text-head-charleston-green"></IoMdMenu>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;