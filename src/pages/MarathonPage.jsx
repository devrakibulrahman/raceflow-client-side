import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const MarathonPage = () => {
    return (
        <>
            <div className="w-full min-h-[500px] bg-marathon bg-center bg-cover bg-no-repeat flex items-center justify-center">
                <div className="w-full">
                    <div className="container mx-auto px-4">
                        <div className="w-full text-center">
                            <h1 className="font-roboto text-[40px] font-bold text-white uppercase transition-all ease-linear duration-200 md:text-[50px] xl:text-[70px]">Marathons</h1>
                            <div className="w-full flex items-center justify-center gap-2 mt-4">
                                <div className="w-auto"><Link to='/' className="font-roboto text-sm text-white/80 font-normal transition ease-linear duration-200 hover:text-white">Home</Link></div>
                                <div className="w-auto"><MdKeyboardArrowRight className="text-white"></MdKeyboardArrowRight></div>
                                <div className="w-auto"><Link className="font-roboto text-sm text-white font-normal">Marathon</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div className="w-full min-h-[500px] bg-white py-16 lg:py-24">
                <div className="w-full">
                    <div className="container mx-auto px-4">
                        <div className="w-full text-center">
                            <div className="w-full mb-5">
                                <h3 className="font-roboto text-sm font-medium text-para-gray uppercase">Choose, Explore, Join.</h3>
                            </div>
                            <div className="w-full flex items-center justify-center flex-col">
                                <h1 className="font-roboto font-bold text-[32px] text-head-charleston-green transition-all ease-linear duration-200 md:text-[38px] lg:text-[50px]">FIND YOUR NEXT <span className="bg-primary-yellow">MARATHON</span></h1>
                                <div className="w-full max-w-[700px] mt-5">
                                    <p className="font-roboto text-xl font-normal text-para-gray leading-relaxed transition-all ease-linear duration-200 md:text-[22px]">Explore upcoming marathon events, choose your favorite, and dive into all the details. Your next challenge awaits start your journey today!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="container mx-auto px-4">
                        <div className="w-full min-h-[500px] mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                            <div className="w-full min-h-[450px] bg-slate-50">
                                <div className="w-full h-[225px] bg-blue-300">

                                </div>
                                <div className="w-full min-h-[225px] bg-pattern bg-cover bg-center bg-no-repeat p-5">
                                    <div className="w-full">
                                        <h1 className="font-roboto text-head-charleston-green text-lg font-black uppercase mb-2 xl:text-xl">Marathon training program</h1>
                                        <p className="font-roboto text-para-gray text-base font-normal leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, optio.</p>
                                    </div>
                                    <div className="w-full flex items-center gap-3 mt-5">
                                        <div className="w-auto">
                                            <FaLocationDot className="text-head-charleston-green text-xl"></FaLocationDot>
                                        </div>
                                        <div className="w-auto">
                                            <div className="w-auto">
                                                <p className="font-roboto text-para-gray text-base font-semibold">Start Line: <span className="font-normal">Staten Island</span></p>
                                            </div>
                                            <div className="w-auto">
                                                <p className="font-roboto text-para-gray text-base font-semibold">Finish Line: <span className="font-normal">Central Park, Manhattan</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex items-center gap-3 mt-5">
                                        <div className="w-auto">
                                            <FaCalendarAlt className="text-head-charleston-green text-xl"></FaCalendarAlt>
                                        </div>
                                        <div className="w-auto">
                                            <div className="w-auto">
                                                <p className="font-roboto text-para-gray text-base font-semibold">Start Date: <span className="font-normal">March 5, 2025</span></p>
                                            </div>
                                            <div className="w-auto">
                                                <p className="font-roboto text-para-gray text-base font-semibold">End Date: <span className="font-normal">April 5, 2025</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full mt-5 md:flex md:items-center md:justify-end">
                                        <button className="font-roboto text-base text-primary-yellow font-normal border border-head-charleston-green bg-head-charleston-green px-5 py-2 w-full transition-all ease-linear duration-200 hover:text-head-charleston-green md:w-full xl:max-w-[130px]">See Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full min-h-[450px] bg-slate-50">
                                <div className="w-full h-[225px] bg-blue-300">

                                </div>
                                <div className="w-full min-h-[225px] bg-pattern bg-cover bg-center bg-no-repeat p-5">
                                    <div className="w-full">
                                        <h1 className="font-roboto text-head-charleston-green text-lg font-black uppercase mb-2 xl:text-xl">Marathon training program</h1>
                                        <p className="font-roboto text-para-gray text-base font-normal leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, optio.</p>
                                    </div>
                                    <div className="w-full flex items-center gap-3 mt-5">
                                        <div className="w-auto">
                                            <FaLocationDot className="text-head-charleston-green text-xl"></FaLocationDot>
                                        </div>
                                        <div className="w-auto">
                                            <div className="w-auto">
                                                <p className="font-roboto text-para-gray text-base font-semibold">Start Line: <span className="font-normal">Staten Island</span></p>
                                            </div>
                                            <div className="w-auto">
                                                <p className="font-roboto text-para-gray text-base font-semibold">Finish Line: <span className="font-normal">Central Park, Manhattan</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex items-center gap-3 mt-5">
                                        <div className="w-auto">
                                            <FaCalendarAlt className="text-head-charleston-green text-xl"></FaCalendarAlt>
                                        </div>
                                        <div className="w-auto">
                                            <div className="w-auto">
                                                <p className="font-roboto text-para-gray text-base font-semibold">Start Date: <span className="font-normal">March 5, 2025</span></p>
                                            </div>
                                            <div className="w-auto">
                                                <p className="font-roboto text-para-gray text-base font-semibold">End Date: <span className="font-normal">April 5, 2025</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full mt-5 md:flex md:items-center md:justify-end">
                                        <button className="font-roboto text-base text-primary-yellow font-normal border border-head-charleston-green bg-head-charleston-green px-5 py-2 w-full transition-all ease-linear duration-200 hover:text-head-charleston-green md:w-full xl:max-w-[130px]">See Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full min-h-[450px] bg-slate-50">
                                <div className="w-full h-[225px] bg-blue-300">

                                </div>
                                <div className="w-full min-h-[225px] bg-pattern bg-cover bg-center bg-no-repeat p-5">
                                    <div className="w-full">
                                        <h1 className="font-roboto text-head-charleston-green text-lg font-black uppercase mb-2 xl:text-xl">Marathon training program</h1>
                                        <p className="font-roboto text-para-gray text-base font-normal leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, optio.</p>
                                    </div>
                                    <div className="w-full flex items-center gap-3 mt-5">
                                        <div className="w-auto">
                                            <FaLocationDot className="text-head-charleston-green text-xl"></FaLocationDot>
                                        </div>
                                        <div className="w-auto">
                                            <div className="w-auto">
                                                <p className="font-roboto text-para-gray text-base font-semibold">Start Line: <span className="font-normal">Staten Island</span></p>
                                            </div>
                                            <div className="w-auto">
                                                <p className="font-roboto text-para-gray text-base font-semibold">Finish Line: <span className="font-normal">Central Park, Manhattan</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex items-center gap-3 mt-5">
                                        <div className="w-auto">
                                            <FaCalendarAlt className="text-head-charleston-green text-xl"></FaCalendarAlt>
                                        </div>
                                        <div className="w-auto">
                                            <div className="w-auto">
                                                <p className="font-roboto text-para-gray text-base font-semibold">Start Date: <span className="font-normal">March 5, 2025</span></p>
                                            </div>
                                            <div className="w-auto">
                                                <p className="font-roboto text-para-gray text-base font-semibold">End Date: <span className="font-normal">April 5, 2025</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full mt-5 md:flex md:items-center md:justify-end">
                                        <button className="font-roboto text-base text-primary-yellow font-normal border border-head-charleston-green bg-head-charleston-green px-5 py-2 w-full transition-all ease-linear duration-200 hover:text-head-charleston-green md:w-full xl:max-w-[130px]">See Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MarathonPage;