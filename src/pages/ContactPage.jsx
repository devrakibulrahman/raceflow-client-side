import { Link } from "react-router-dom";
import { MdEmail, MdKeyboardArrowRight } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ContactPage = () => {
    return (
        <>
            <div className="w-full min-h-[500px] bg-contact bg-center bg-cover bg-no-repeat flex items-center justify-center">
                <div className="w-full">
                    <div className="container mx-auto px-4">
                        <div className="w-full text-center">
                            <h1 className="font-roboto text-[40px] font-bold text-white uppercase transition-all ease-linear duration-200 md:text-[50px] xl:text-[70px]">Contact Us</h1>
                            <div className="w-full flex items-center justify-center gap-2 mt-4">
                                <div className="w-auto"><Link to='/' className="font-roboto text-sm text-white/80 font-normal transition ease-linear duration-200 hover:text-white">Home</Link></div>
                                <div className="w-auto"><MdKeyboardArrowRight className="text-white"></MdKeyboardArrowRight></div>
                                <div className="w-auto"><Link className="font-roboto text-sm text-white font-normal">Contact</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full min-h-[500px] bg-white py-16 lg:py-24">
                <div className="w-full">
                    <div className="container mx-auto px-4">
                        <div className="w-full text-center">
                            <div className="w-full mb-5">
                                <h3 className="font-roboto text-sm font-medium text-para-gray uppercase">Get Connected</h3>
                            </div>
                            <div className="w-full flex items-center justify-center flex-col">
                                <h1 className="font-roboto font-bold text-[32px] text-head-charleston-green transition-all ease-linear duration-200 md:text-[38px] lg:text-[50px]">DISCOVER EVERYTHING ABOUT OUR <span className="bg-primary-yellow">MARATHON!</span></h1>
                                <div className="w-full max-w-[700px] mt-5">
                                    <p className="font-roboto text-xl font-normal text-para-gray leading-relaxed transition-all ease-linear duration-200 md:text-[22px]">If you’re looking for details about registrations, event schedules, or routes, we’re here to guide you every step of the way.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="w-full max-w-[1120px] mx-auto px-4">
                        <div className="w-full min-h-[550px] mt-16 grid grid-cols-1 gap-10 lg:mt-26 lg:grid-cols-2">
                            <div className="w-full h-[390px] bg-contact-form-img bg-cover bg-center bg-no-repeat p-7 md:flex md:items-end md:justify-end md:h-[490px] lg:h-full">
                                <div className="w-full h-full bg-primary-yellow p-6 flex items-center justify-between flex-col gap-5 md:w-[350px] md:max-h-[210px]">
                                    <div className="w-full flex flex-col items-center transition-all ease-linear duration-200 md:flex-row md:justify-between">
                                        <div className="w-[55px] h-[55px] bg-head-charleston-green flex items-center justify-center">
                                            <FaPhoneAlt className='text-lg text-primary-yellow'></FaPhoneAlt>
                                        </div>
                                        <div className="w-auto text-center mt-4 md:mt-0">
                                            <h2 className="font-roboto text-base text-head-charleston-green font-black uppercase md:text-right">Phone</h2>
                                            <p  className="font-roboto text-[22px] text-head-charleston-green font-medium">+60 12-345 6789</p>
                                        </div>
                                    </div>
                                    <div className="w-full border-b border-head-charleston-green"></div>
                                    <div className="w-full flex flex-col items-center transition-all ease-linear duration-200 md:flex-row md:justify-between">
                                        <div className="w-[55px] h-[55px] bg-head-charleston-green flex items-center justify-center">
                                            <MdEmail className='text-xl text-primary-yellow'></MdEmail>
                                        </div>
                                        <div className="w-auto text-center mt-4 md:mt-0">
                                            <h2 className="font-roboto text-base text-head-charleston-green font-black uppercase md:text-right">Email</h2>
                                            <p  className="font-roboto text-[22px] text-head-charleston-green font-medium">help@raceflow.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full min-h-[490px] bg-pattern bg-cover bg-center bg-no-repeat lg:h-full">
                                <div className="w-full">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;