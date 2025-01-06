import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import RegistrationForm from "../components/RegistrationForm";

const RegistrationPage = () => {
    return (
        <>
            <div className="w-full min-h-[500px] bg-marathon-registration bg-center bg-cover bg-no-repeat flex items-center justify-center">
                <div className="w-full">
                    <div className="container mx-auto px-4">
                        <div className="w-full text-center">
                            <h1 className="font-roboto text-[40px] font-bold text-white uppercase transition-all ease-linear duration-200 md:text-[50px] xl:text-[70px]">Marathon Registration</h1>
                            <div className="w-full flex items-center justify-center gap-2 mt-4">
                                <div className="w-auto"><Link to='/' className="font-roboto text-sm text-white/80 font-normal transition ease-linear duration-200 hover:text-white">Home</Link></div>
                                <div className="w-auto"><MdKeyboardArrowRight className="text-white"></MdKeyboardArrowRight></div>
                                <div className="w-auto"><Link className="font-roboto text-sm text-white/80 font-normal transition ease-linear duration-200 hover:text-white">Details</Link></div>
                                <div className="w-auto"><MdKeyboardArrowRight className="text-white"></MdKeyboardArrowRight></div>
                                <div className="w-auto"><Link className="font-roboto text-sm text-white font-normal">Contact</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full min-h-[500px] py-16 lg:py-24">
                <div className="w-full">
                    <div className="container mx-auto px-4">
                        <div className="w-full min-h-[400px] bg-slate-50">
                            <div className="w-full min-h-[400px] text-center p-10 bg-pattern bg-cover bg-center bg-no-repeat lg:p-12">
                                <div className="w-full mb-5">
                                    <div className="w-full mb-5">
                                        <h3 className="font-roboto text-sm font-medium text-para-gray uppercase">Register Now</h3>
                                    </div>
                                    <div className="w-full flex items-center justify-center flex-col">
                                        <h1 className="font-roboto font-bold text-[32px] text-head-charleston-green transition-all ease-linear duration-200 md:text-[38px] lg:text-[50px]">SUBMIT YOUR EVENT <span className="bg-primary-yellow">REGISTRATION</span> FORM.</h1>
                                        <div className="w-full max-w-[700px] mt-5">
                                            <p className="font-roboto text-xl font-normal text-para-gray leading-relaxed transition-all ease-linear duration-200 md:text-[22px]">Join the HorizonRun Challenge by completing the form below.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <RegistrationForm></RegistrationForm>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegistrationPage;