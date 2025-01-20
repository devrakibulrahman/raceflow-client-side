import { Link } from 'react-router-dom';
import { RiInstagramFill } from 'react-icons/ri';
import { FaDiscord, FaFacebookF, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { FaThreads, FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from "react-icons/md";
import dark from '../assets/raceflow-dark.png';

const Footer = () => {
    return (
        <>
            <footer className="w-full min-h-[200px] pt-10 md:pt-[80px] bg-black">
                <div className="w-full">
                    <div className="container mx-auto px-4">
                        <div className="w-full pb-12 grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-5">
                            <div className="w-full min-h-[140px] flex flex-col items-start justify-between col-span-2 xl:col-span-1 md:min-h-[150px]">
                                <div className='w-auto'>
                                    <img src={dark} alt="logo" className='w-[200px] h-full object-cover md:w-[270px]' />
                                </div>
                                <div className='w-full'>
                                    <h2 className='font-roboto text-lg font-black uppercase text-white tracking-tighter'>Follow Us And Stay Updated</h2>
                                    <div className='w-full flex items-center gap-2 mt-[18px]'>
                                        <div className="w-auto">
                                            <Link className="p-[10px] inline-block border-2 border-white rounded-full transition ease-linear duration-200 hover:bg-primary-yellow hover:border-primary-yellow group"><FaFacebookF className="text-base text-white group-hover:text-black"></FaFacebookF></Link>
                                        </div>
                                        <div className="w-auto">
                                            <Link className="p-[10px] inline-block border-2 border-white rounded-full transition ease-linear duration-200 hover:bg-primary-yellow hover:border-primary-yellow group"><RiInstagramFill className="text-base text-white group-hover:text-black"></RiInstagramFill></Link>
                                        </div>
                                        <div className="w-auto">
                                            <Link className="p-[10px] inline-block border-2 border-white rounded-full transition ease-linear duration-200 hover:bg-primary-yellow hover:border-primary-yellow group"><FaXTwitter className="text-base text-white group-hover:text-black"></FaXTwitter></Link>
                                        </div>
                                        <div className="w-auto">
                                            <Link className="p-[10px] inline-block border-2 border-white rounded-full transition ease-linear duration-200 hover:bg-primary-yellow hover:border-primary-yellow group"><FaThreads className="text-base text-white group-hover:text-black"></FaThreads></Link>
                                        </div>
                                        <div className="w-auto">
                                            <Link className="p-[10px] inline-block border-2 border-white rounded-full transition ease-linear duration-200 hover:bg-primary-yellow hover:border-primary-yellow group"><FaLinkedinIn className="text-base text-white group-hover:text-black"></FaLinkedinIn></Link>
                                        </div>
                                        <div className="w-auto">
                                            <Link className="p-[10px] inline-block border-2 border-white rounded-full transition ease-linear duration-200 hover:bg-primary-yellow hover:border-primary-yellow group"><FaDiscord className="text-base text-white group-hover:text-black"></FaDiscord></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full min-h-[200px] col-span-2 pt-5 pb-4 flex justify-center md:col-span-1 xl:py-0">
                                <div className='w-full'>
                                    <div className='w-full'>
                                        <p className='font-roboto text-lg font-bold text-white xl:text-xl'>THE RACE</p>
                                    </div>
                                    <nav className='w-full mt-3 xl:mt-4'>
                                        <ul className='w-auto space-y-2'>
                                            <li className='font-roboto text-base text-dark-gray font-normal transition ease-linear duration-200 cursor-pointer hover:text-primary-yellow'><Link>Race Details</Link></li>
                                            <li className='font-roboto text-base text-dark-gray font-normal transition ease-linear duration-200 cursor-pointer hover:text-primary-yellow'><Link>Event Registration</Link></li>
                                            <li className='font-roboto text-base text-dark-gray font-normal transition ease-linear duration-200 cursor-pointer hover:text-primary-yellow'><Link>Event Schedule</Link></li>
                                            <li className='font-roboto text-base text-dark-gray font-normal transition ease-linear duration-200 cursor-pointer hover:text-primary-yellow'><Link>Medals & Awards</Link></li>
                                            <li className='font-roboto text-base text-dark-gray font-normal transition ease-linear duration-200 cursor-pointer hover:text-primary-yellow'><Link>Buy Tickets</Link></li>
                                            <li className='font-roboto text-base text-dark-gray font-normal transition ease-linear duration-200 cursor-pointer hover:text-primary-yellow'><Link>Participant Guide</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className='w-full'>
                                    <div className='w-full'>
                                        <p className='font-roboto text-lg font-bold text-white xl:text-xl'>SUPPORT</p>
                                    </div>
                                    <nav className='w-full mt-3 xl:mt-4'>
                                        <ul className='w-auto space-y-2'>
                                            <li className='font-roboto text-base text-dark-gray font-normal transition ease-linear duration-200 cursor-pointer hover:text-primary-yellow'><Link>Contact Support</Link></li>
                                            <li className='font-roboto text-base text-dark-gray font-normal transition ease-linear duration-200 cursor-pointer hover:text-primary-yellow'><Link>FAQ</Link></li>
                                            <li className='font-roboto text-base text-dark-gray font-normal transition ease-linear duration-200 cursor-pointer hover:text-primary-yellow'><Link>Race Regulations</Link></li>
                                            <li className='font-roboto text-base text-dark-gray font-normal transition ease-linear duration-200 cursor-pointer hover:text-primary-yellow'><Link>Safety Tips</Link></li>
                                            <li className='font-roboto text-base text-dark-gray font-normal transition ease-linear duration-200 cursor-pointer hover:text-primary-yellow'><Link>Volunteer Info</Link></li>
                                            <li className='font-roboto text-base text-dark-gray font-normal transition ease-linear duration-200 cursor-pointer hover:text-primary-yellow'><Link>Blog & News</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="w-full min-h-[200px] col-span-2 py-4 md:col-span-1 xl:py-0">
                                <div className='w-full'>
                                    <p className='font-roboto text-lg font-bold text-white uppercase xl:text-xl'>Contact Info</p>
                                </div>
                                <div className='w-full grid grid-rows-2 mt-3 xl:mt-4'>
                                    <div className='w-full pb-5 border-b border-black/5 flex items-center justify-between'>
                                        <div className='w-full space-y-2'>
                                            <div className='w-full'>
                                                <p className='font-roboto text-sm text-white font-bold uppercase'>Phone</p>
                                            </div>
                                            <div className='w-full'>
                                                <p className='font-roboto text-xl font-normal text-white uppercase xl:text-[22px]'>+60 12-345 6789</p>
                                            </div>
                                        </div>
                                        <div className='p-4 inline-block bg-primary-yellow rounded-full'>
                                            <FaPhoneAlt className='text-lg text-head-charleston-green'></FaPhoneAlt>
                                        </div>
                                    </div>
                                    <div className='w-full pt-5 flex items-center justify-between'>
                                        <div className='w-full space-y-2'>
                                            <div className='w-full'>
                                                <p className='font-roboto text-sm text-white font-bold uppercase'>Email</p>
                                            </div>
                                            <div className='w-full'>
                                                <p className='font-roboto text-xl text-white font-normal xl:text-[22px]'>support@raceflow.com</p>
                                            </div>
                                        </div>
                                        <div className='p-4 inline-block bg-primary-yellow rounded-full'>
                                            <MdEmail className='text-lg text-head-charleston-green'></MdEmail>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full py-8 border-t border-head-charleston-green flex flex-col items-start gap-2 md:gap-0 md:items-center md:justify-between md:flex-row'>
                            <div className='w-auto'>
                                <p className='font-roboto text-sm text-para-gray font-normal uppercase'>&copy; 2025 - {new Date().getFullYear()} all right reserved. <span className='text-para-gray'>raceflow</span></p>
                            </div>
                            <div className='w-auto'>
                                <p className='font-roboto text-sm text-para-gray font-normal uppercase'>Terms & Condition</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;