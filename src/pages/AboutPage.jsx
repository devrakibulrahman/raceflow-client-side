import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <>
            <div className="w-full min-h-[500px] bg-about bg-center bg-cover bg-no-repeat flex items-center justify-center">
                <div className="w-full">
                    <div className="container mx-auto px-4">
                        <div className="w-full text-center">
                            <h1 className="font-roboto text-[40px] font-bold text-white uppercase transition-all ease-linear duration-200 md:text-[50px] xl:text-[70px]">About Us</h1>
                            <div className="w-full flex items-center justify-center gap-2 mt-4">
                                <div className="w-auto"><Link to='/' className="font-roboto text-sm text-white/80 font-normal transition ease-linear duration-200 hover:text-white">Home</Link></div>
                                <div className="w-auto"><MdKeyboardArrowRight className="text-white"></MdKeyboardArrowRight></div>
                                <div className="w-auto"><Link className="font-roboto text-sm text-white font-normal">About Us</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full min-h-[500px] bg-white py-16 lg:py-24 dark:bg-black">
                <div className="w-full">
                    <div className="container mx-auto px-4">
                        <div className="w-full min-h-[400px] flex items-center justify-center text-center">
                            <div className="w-full">
                                <div className="w-full mb-5">
                                    <h3 className="font-roboto text-sm font-medium text-para-gray uppercase dark:text-dark-gray">RaceFlow of About</h3>
                                </div>
                                <div className="w-full flex items-center justify-center flex-col">
                                    <h1 className="font-roboto font-bold text-[32px] text-head-charleston-green uppercase transition-all ease-linear duration-200 md:text-[38px] lg:text-[50px] dark:text-white">Our Story is <span className="bg-primary-yellow dark:text-black">Coming</span> Soon!</h1>
                                    <div className="w-full max-w-[700px] mt-5">
                                        <p className="font-roboto text-xl font-normal text-para-gray leading-relaxed transition-all ease-linear duration-200 md:text-[22px] dark:text-light-gray">We’re excited to share our journey. Stay tuned for updates!</p>
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
                            <button className="font-roboto text-head-charleston-green font-medium tracking-widest py-3 px-6 uppercase bg-primary-yellow transition ease-linear duration-200 hover:bg-head-charleston-green hover:text-white">Register Now!</button>
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
                                <button className="font-roboto text-head-charleston-green font-medium tracking-widest py-3 px-6 uppercase bg-white transition ease-linear duration-200 hover:bg-head-charleston-green hover:text-white">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;