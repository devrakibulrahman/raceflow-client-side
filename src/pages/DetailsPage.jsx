import { FaDiscord, FaFacebookF, FaLinkedinIn, FaRunning } from "react-icons/fa";
import { FaThreads, FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { MdKeyboardArrowRight, MdAppRegistration } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaCalendarAlt, FaStopwatch } from "react-icons/fa";
import { Link } from "react-router-dom";

const DetailsPage = () => {
    return (
        <>
            <div className="w-full min-h-[500px] bg-details bg-center bg-cover bg-no-repeat flex items-center justify-center">
                <div className="w-full">
                    <div className="container mx-auto px-4">
                        <div className="w-full text-center">
                            <h1 className="font-roboto text-[40px] font-bold text-white uppercase transition-all ease-linear duration-200 md:text-[50px] xl:text-[70px]">Marathon Details</h1>
                            <div className="w-full flex items-center justify-center gap-2 mt-4">
                                <div className="w-auto"><Link to='/' className="font-roboto text-sm text-white/80 font-normal transition ease-linear duration-200 hover:text-white">Home</Link></div>
                                <div className="w-auto"><MdKeyboardArrowRight className="text-white"></MdKeyboardArrowRight></div>
                                <div className="w-auto"><Link className="font-roboto text-sm text-white font-normal">Details</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full min-h-[500px] py-16 lg:py-24">
                <div className="w-full max-w-[1150px] mx-auto px-4">
                    <div className="w-full min-h-[500px] grid grid-cols-1 gap-10 lg:grid-cols-3">
                        <div className="w-full min-h-[400px] lg:col-span-2">
                            <div className="w-full relative">
                                <div className="w-full h-[400px] bg-blue-500 overflow-hidden">
                                    <img src={`https://i.ibb.co.com/p2DMJtg/pexels-runffwpu-2640427.jpg`} alt="details image" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-full h-full absolute top-0 left-0 p-5 flex items-end justify-end">
                                    <div className="px-3 py-2 bg-primary-yellow inline-block">
                                        <p className="font-roboto text-sm text-head-charleston-green uppercase font-medium tracking-widest">Marathon Start Date : Fed 20, 2025</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full min-h-[200px] mt-6 flex flex-col items-start justify-start gap-4">
                                <div className="w-full flex flex-col gap-y-2 sm:gap-y-0 sm:items-center sm:justify-between sm:flex-row">
                                    <div className="w-auto flex items-center gap-2">
                                        <div className="w-auto">
                                            <FaCalendarAlt className="text-sm mb-1 text-head-charleston-green"></FaCalendarAlt>
                                        </div>
                                        <p className="font-roboto text-base text-head-charleston-green font-bold">Start Register Date : <span className="font-normal text-para-gray">Jan 10, 2025</span></p>
                                    </div>
                                    <div className="w-auto flex items-center gap-2">
                                        <div className="w-auto">
                                            <FaStopwatch className="text-base mb-1 text-head-charleston-green"></FaStopwatch>
                                        </div>
                                        <p className="font-roboto text-base text-head-charleston-green font-bold">End Register Date : <span className="font-normal text-para-gray">Fed 10, 2025</span></p>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <h1 className="font-roboto text-2xl font-bold text-head-charleston-green uppercase leading-snug transition-all ease-linear duration-200 md:text-[30px] xl:text-[35px]">Registration For Join This Marathon</h1>
                                </div>
                                <div className="w-full">
                                    <p className="font-roboto text-para-gray font-normal ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda aperiam fugit ab voluptas. Nihil perspiciatis quae vitae qui nulla excepturi accusantium vel, dolores eligendi molestias non asperiores tempore expedita vero. Totam magnam quis ipsum illo? Consectetur blanditiis obcaecati inventore, enim quibusdam qui iure laborum, itaque repudiandae quidem consequatur culpa?</p>
                                </div>
                                <div className="w-full pt-6 border-t border-slate-200 flex flex-col gap-4 sm:items-center sm:justify-start sm:flex-row">
                                    <div className="w-auto flex items-center gap-2">
                                        <div className="w-auto">
                                            <FaLocationDot className="text-base mb-1 text-head-charleston-green"></FaLocationDot    >
                                        </div>
                                        <p className="font-roboto text-base text-head-charleston-green font-bold">Location : <span className="font-normal text-para-gray">Paris</span></p>
                                    </div>
                                    <div className="w-auto flex items-center gap-2">
                                        <div className="w-auto">
                                            <FaRunning className="text-lg mb-1 text-head-charleston-green"></FaRunning>
                                        </div>
                                        <p className="font-roboto text-base text-head-charleston-green font-bold">Distance : <span className="font-normal text-para-gray">30 kilometers</span></p>
                                    </div>
                                    <div className="w-auto flex items-center gap-2">
                                        <div className="w-auto">
                                            <MdAppRegistration className="text-xl text-head-charleston-green"></MdAppRegistration>
                                        </div>
                                        <p className="font-roboto text-base text-head-charleston-green font-bold">Registration Count : <span className="font-normal text-para-gray">01</span></p>
                                    </div>
                                </div>
                                <div className="w-full flex items-center md:justify-end">
                                    <button className="w-full bg-primary-yellow py-3 px-4 mt-4 border-2 border-primary-yellow font-roboto text-base text-head-charleston-green font-bold uppercase tracking-wide transition ease-linear duration-200 hover:bg-head-charleston-green hover:text-primary-yellow hover:border-head-charleston-green md:max-w-[200px]">Registration Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full min-h-[400px] flex flex-col items-center gap-6">
                            <div className="w-full min-h-[200px] bg-slate-50 overflow-hidden">
                                <div className="w-full min-h-[225px] bg-left-column1-img bg-cover bg-top bg-no-repeat md:min-h-[400px] lg:min-h-[225px]"></div>
                                <div className="w-full min-h-[200px] bg-pattern bg-cover bg-center bg-no-repeat p-5">
                                    <h3 className="font-roboto text-base text-para-gray font-normal">Marathon</h3>
                                    <div className="w-full mt-2 space-y-2">
                                        <h1 className="font-roboto text-[21px] text-head-charleston-green font-bold leading-tight uppercase">Why People Join Marathons?</h1>
                                        <p className="font-roboto text-base text-para-gray font-normal">To challenge oneself, improve fitness, achieve personal goals, and contribute to a sense of community and accomplishment.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full min-h-[100px] bg-slate-50">
                                <div className="w-full min-h-[100px] bg-pattern bg-cover bg-center bg-no-repeat overflow-hidden p-5">
                                    <h3 className="font-roboto text-lg font-bold uppercase text-head-charleston-green">Follow Us</h3>
                                    <div className="w-full pt-2 border-t border-slate-200 mt-5">
                                        <div className='w-full flex items-center justify-center flex-wrap gap-2 mt-[18px]'>
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
                    </div>
                </div>
            </div>
            <div className="w-full min-h-[500px] pb-16 lg:pb-24">
                <div className="w-full">
                    <div className="container mx-auto px-4">
                        <div className="w-full">
                            <div className="w-full pb-6 border-b border-slate-200">
                                <h1 className="font-roboto text-[32px] font-bold text-head-charleston-green uppercase transition-all ease-linear duration-200 md:text-[38px] xl:text-[50px]">Marathon <span className="bg-primary-yellow">Tip&apos;s</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-10">
                    <div className="w-full">
                        <div className="container mx-auto px-4">
                            <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                                <div className="w-full min-h-[280px] bg-tips1 bg-cover bg-top bg-no-repeat p-5 flex items-end">
                                    <div className="w-full">
                                        <h3 className="font-roboto text-base text-primary-yellow font-bold uppercase tracking-widest mb-2">Fuel Properly</h3>
                                        <p className="font-roboto text-base text-white font-normal">Eat balanced meals and maintain proper hydration to stay energized.</p>
                                    </div>
                                </div>
                                <div className="w-full min-h-[280px] bg-tips2 bg-cover bg-top bg-no-repeat p-5 flex items-end">
                                    <div className="w-full">
                                        <h3 className="font-roboto text-base text-primary-yellow font-bold uppercase tracking-widest mb-2">Train Consistently</h3>
                                        <p className="font-roboto text-base text-white font-normal">Build your endurance gradually with a consistent training plan.</p>
                                    </div>
                                </div>
                                <div className="w-full min-h-[280px] bg-tips3 bg-cover bg-top bg-no-repeat p-5 flex items-end">
                                    <div className="w-full">
                                        <h3 className="font-roboto text-base text-primary-yellow font-bold uppercase tracking-widest mb-2">Start Slow</h3>
                                        <p className="font-roboto text-base text-white font-normal">Avoid starting too fast, as it can lead to early fatigue.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full min-h-[500px] bg-registration bg-cover bg-center bg-no-repeat py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="w-full min-h-[500px] text-center flex flex-col items-center justify-center gap-5">
                        <div className="w-full">
                            <p className="font-roboto text-white text-sm font-bold uppercase tracking-widest">Get Started</p>
                        </div>
                        <div className="w-full max-w-[1000px]">
                            <h1 className="font-roboto text-[40px] font-bold text-white uppercase transition-all ease-linear duration-200 leading-tight md:text-[50px] xl:text-[70px]">Register Now Secure Your Spot in the <span className="text-head-charleston-green bg-primary-yellow">Marathon!</span></h1>
                        </div>
                        <div className="w-full max-w-[800px]">
                            <p className="font-roboto text-xl font-normal text-white transition-all ease-linear duration-200 leading-relaxed md:text-[22px]">Register today for a seamless marathon experience. Choose your race category, receive important details, and join us for an unforgettable race day!</p>
                        </div>
                        <div className="w-full flex items-center justify-center mt-3">
                            <button className="font-roboto text-head-charleston-green font-medium tracking-widest py-3 px-6 uppercase bg-primary-yellow transition ease-linear duration-200 hover:bg-head-charleston-green hover:text-primary-yellow">Register Now!</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full min-h-[250px] bg-gradient-to-r from-primary-yellow to-secondary-orange/80">
                <div className="w-full min-h-[250px] bg-sub-pattern bg-center bg-cover bg-no-repeat py-10 flex items-center justify-center">
                    <div className="container mx-auto px-4">
                        <div className="w-full flex items-center flex-col gap-5 xl:flex-row xl:justify-between">
                            <div className="w-auto max-w-[500px] xl:max-w-full">
                                <h1 className="font-roboto text-head-charleston-green text-[32px] font-black uppercase text-center transition-all ease-linear duration-200 xl:text-[38px] xl:text-left">Subscribe To Our <span className="text-primary-yellow bg-head-charleston-green py-2">Marathon</span> Newsletter!</h1>
                            </div>
                            <div className="w-auto">
                                <button className="font-roboto text-head-charleston-green font-medium tracking-widest py-3 px-6 uppercase bg-white transition ease-linear duration-200 hover:bg-head-charleston-green hover:text-primary-yellow">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsPage;