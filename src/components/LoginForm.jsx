import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible  } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const LoginForm = () => {

    const {googleSignIn, userSignIn} = useContext(AuthContext);
    
    // state declare here ---->
    const [showPassword, setShowPassword] = useState(false);

    // event handle function declare here ---->
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err))
    };

    // form submit function declare here ----> 
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get('email');
        const pass = form.get('password');

        const emailRex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(!emailRex.test(email)){
            toast.error('Invalid email address. Please check your email!', {
                position: "top-right",
                hideProgressBar: true,
                closeOnClick: true,
                autoClose: 3000,
            });
            return;
        };

        userSignIn(email, pass)
            .then(() => {
                toast.success('Login successful!', {
                    position: "top-right",
                    hideProgressBar: true,
                    closeOnClick: true,
                    autoClose: 3000,
                });
                e.target.reset();
            })
            .catch(() => {
                toast.error('Invalid credential', {
                    position: "top-right",
                    hideProgressBar: true,
                    closeOnClick: true,
                    autoClose: 3000,
                });
            })
    };

    return (
        <>
            <div className="w-full space-y-4">
                <form onSubmit={handleFormSubmit} className="w-full">
                    <div className="w-full grid grid-cols-1 gap-4">
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
                                    <div onClick={handleShowPassword} className="w-auto absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-10">
                                        {
                                            showPassword
                                            ?
                                                <AiFillEyeInvisible className="text-2xl text-[#A1A1AA]"></AiFillEyeInvisible>
                                            :
                                                <AiFillEye className="text-2xl text-[#A1A1AA]"></AiFillEye>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="w-full py-2 mt-3 flex items-center justify-between">
                                <div className="w-auto flex items-center gap-2">
                                    <input type="checkbox" />
                                    <p className="font-roboto text-head-charleston-green text-base font-medium ">Remember Me</p>
                                </div>
                                <div className="w-auto">
                                    <p className="font-roboto text-head-charleston-green text-base font-medium cursor-pointer transition ease-linear duration-200 hover:underline">Forgot Password?</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <button className="w-full p-4 border border-head-charleston-green bg-head-charleston-green flex items-center justify-center gap-3 transition ease-linear duration-200 group hover:bg-white">
                                <span className="font-roboto text-base text-primary-yellow font-bold uppercase group-hover:text-head-charleston-green">Login</span>
                            </button>
                        </div>
                    </div>
                </form>
                <div className="w-full">
                    <div className="w-full flex items-center justify-between gap-x-3">
                        <div className="w-full border-b border-head-charleston-green transition ease-linear duration-200"></div>
                        <p className="font-roboto text-sm text-head-charleston-green font-bold uppercase">Or</p>
                        <div className="w-full border-b border-head-charleston-green transition ease-linear duration-200"></div>
                    </div>
                    <div className="w-full mt-3">
                        <button onClick={handleGoogleSignIn} className="w-full p-4 border border-head-charleston-green bg-white flex items-center justify-center gap-3 transition ease-linear duration-200 group hover:bg-head-charleston-green">
                            <FaGoogle className="text-xl text-head-charleston-green group-hover:text-primary-yellow"></FaGoogle>
                            <span className="font-roboto text-base text-head-charleston-green font-bold uppercase group-hover:text-primary-yellow">Log in Google</span>
                        </button>
                    </div>
                    <div className="w-full text-center mt-7">
                        <p className="font-roboto text-base text-head-charleston-green uppercase font-medium">Don&apos;t have an Account? <Link to='/auth/register' className="underline">Register</Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default LoginForm;