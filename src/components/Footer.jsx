import { Link } from 'react-router-dom';
import { RiInstagramFill } from 'react-icons/ri';
import { FaDiscord, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaThreads, FaXTwitter } from 'react-icons/fa6';
import light from '../assets/raceflow-light.png';

const Footer = () => {
    return (
        <>
            <footer className="w-full min-h-[200px] py-10 bg-black/5 md:py-[80px]">
                <div className="w-full">
                    <div className="container mx-auto px-4">
                        <div className="w-full grid grid-cols-1 gap-y-5 md:grid-cols-2 xl:grid-cols-3">
                            <div className="w-full min-h-[140px] flex flex-col items-start justify-between col-span-2 xl:col-span-1 md:min-h-[150px]">
                                <div className='w-auto'>
                                    <img src={light} alt="logo" className='w-[200px] h-full object-cover md:w-[270px]' />
                                </div>
                                <div className='w-full'>
                                    <h2 className='font-roboto text-lg font-black uppercase text-head-charleston-green tracking-tighter'>Follow Us And Stay Updated</h2>
                                    <div className='w-full flex items-center gap-2 mt-[18px]'>
                                        <div className="w-auto">
                                            <Link className="p-[10px] inline-block border-2 border-head-charleston-green rounded-full transition ease-linear duration-200 hover:bg-primary-yellow hover:border-primary-yellow group"><FaFacebookF className="text-base text-head-charleston-green"></FaFacebookF></Link>
                                        </div>
                                        <div className="w-auto">
                                            <Link className="p-[10px] inline-block border-2 border-head-charleston-green rounded-full transition ease-linear duration-200 hover:bg-primary-yellow hover:border-primary-yellow group"><RiInstagramFill className="text-base text-head-charleston-green"></RiInstagramFill></Link>
                                        </div>
                                        <div className="w-auto">
                                            <Link className="p-[10px] inline-block border-2 border-head-charleston-green rounded-full transition ease-linear duration-200 hover:bg-primary-yellow hover:border-primary-yellow group"><FaXTwitter className="text-base text-head-charleston-green"></FaXTwitter></Link>
                                        </div>
                                        <div className="w-auto">
                                            <Link className="p-[10px] inline-block border-2 border-head-charleston-green rounded-full transition ease-linear duration-200 hover:bg-primary-yellow hover:border-primary-yellow group"><FaThreads className="text-base text-head-charleston-green"></FaThreads></Link>
                                        </div>
                                        <div className="w-auto">
                                            <Link className="p-[10px] inline-block border-2 border-head-charleston-green rounded-full transition ease-linear duration-200 hover:bg-primary-yellow hover:border-primary-yellow group"><FaLinkedinIn className="text-base text-head-charleston-green"></FaLinkedinIn></Link>
                                        </div>
                                        <div className="w-auto">
                                            <Link className="p-[10px] inline-block border-2 border-head-charleston-green rounded-full transition ease-linear duration-200 hover:bg-primary-yellow hover:border-primary-yellow group"><FaDiscord className="text-base text-head-charleston-green"></FaDiscord></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full min-h-[300px] bg-black col-span-1">

                            </div>
                            <div className="w-full min-h-[300px] bg-black col-span-1">

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;