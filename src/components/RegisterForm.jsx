import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible  } from "react-icons/ai";
import { Link } from "react-router-dom";

const RegisterForm = () => {
    // state declare here ---->
    const [showPassword, setShowPassword] = useState(false);

    // event handle function declare here ---->
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    // form submit function declare here ----> 
    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <form onSubmit={handleFormSubmit} className="w-full">
                <div className="w-full grid grid-cols-1 gap-4">
                    <div className="w-full flex flex-col items-center justify-center gap-4 md:flex-row">
                        <div className="w-full">
                            <div className="w-full mb-3">
                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug">Name</label>
                            </div>
                            <div className="w-full">
                                <input type="text" placeholder="full name" name="name" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"/>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full mb-3">
                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug">Photo Url</label>
                            </div>
                            <div className="w-full">
                                <input type="text" placeholder="photo url" name="photo" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-4 lg:flex-row">
                        <div className="w-full">
                            <div className="w-full mb-3">
                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug">Email</label>
                            </div>
                            <div className="w-full">
                                <input type="text" placeholder="example@gmail.com" name="email" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"/>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full">
                                <div className="w-full mb-3">
                                    <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug">Password</label>
                                </div>
                                <div className="w-full relative">
                                    <input type={showPassword ? 'text' : 'password'} placeholder="password" name="password" autoComplete="off" className="w-full py-4 pl-4 pr-[55px] font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"/>
                                    <button onClick={handleShowPassword} className="w-auto absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer">
                                        {
                                            showPassword
                                            ?
                                                <AiFillEyeInvisible className="text-2xl text-[#A1A1AA]"></AiFillEyeInvisible>
                                            :
                                                <AiFillEye className="text-2xl text-[#A1A1AA]"></AiFillEye>
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full py-2 mb-3">
                            <div className="w-auto flex items-center gap-2">
                                <input type="checkbox" />
                                <p className="font-roboto text-head-charleston-green text-base font-medium ">Accept Term & Condition</p>
                            </div>
                        </div>
                        <div className="w-full">
                            <button className="w-full p-4 border border-head-charleston-green bg-white flex items-center justify-center gap-3 transition ease-linear duration-200 group hover:bg-head-charleston-green">
                                <span className="font-roboto text-base text-head-charleston-green font-bold uppercase group-hover:text-primary-yellow">Register</span>
                            </button>
                        </div>
                        <div className="w-full text-center mt-7">
                            <p className="font-roboto text-base text-head-charleston-green uppercase font-medium">Already Have An Account? <Link to='/auth/login' className="underline">Login</Link></p>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default RegisterForm;