import { FaDiscord, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <div className="w-full min-h-screen bg-white flex items-center justify-center">
                <div className="w-full">
                    <div className="container mx-auto px-4">
                        <div className="w-full flex flex-col items-center justify-center gap-5">
                            <div className="w-full text-center">
                                <p className="font-roboto text-head-charleston-green font-bold uppercase tracking-wider">Error 404</p>
                            </div>
                            <div className="w-full max-w-[800px] flex items-center justify-center flex-col text-center space-y-4">
                                <h1 className="font-roboto text-[40px] font-bold text-head-charleston-green uppercase transition-all ease-linear duration-200 leading-snug md:text-[50px]"><span className="bg-primary-yellow">Oops!</span> The Page You’re Looking For Cannot Be <span className="bg-primary-yellow">Found</span>.</h1>
                                <div className="w-full max-w-[700px]">
                                    <p className="font-roboto text-xl text-para-gray font-medium leading-relaxed md:text-[22px]">This page isn’t available or might have been moved. Please check the URL or head back to the main website to continue exploring.</p>
                                </div>
                            </div>
                            <div className="w-full text-center mt-2">
                                <button className="font-roboto text-primary-yellow text-sm font-medium tracking-widest py-3 px-6 uppercase bg-head-charleston-green transition ease-linear duration-200 hover:bg-head-charleston-green hover:text-primary-yellow">Back To Home</button>
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-center mt-[70px]">
                            <div className='w-full flex items-center justify-center gap-2'>
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
                </div>
            </div>
        </>
    );
};

export default ErrorPage;