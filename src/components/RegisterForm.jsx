import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible  } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../contexts/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";

const RegisterForm = () => {

    const {userRegister} = useContext(AuthContext);

    // state declare here ---->
    const [showPassword, setShowPassword] = useState(false);

    // event handle function declare here ---->
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    // form submit function declare here ----> 
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        const terms = form.get('terms');

        const emailRex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const upperPassRex = /(?=.*[A-Z])/;
        const lowerPassRex = /(?=.*[a-z])/;

        if(name === '' || photo === '' || email === ''){
            toast.error('Any field should not empty', {
                position: "top-right",
                hideProgressBar: true,
                closeOnClick: true,
                autoClose: 3000,
                });
            return;
        };

        if(!emailRex.test(email)){
            toast.error('Invalid email address! Please provide valid email.', {
                position: "top-right",
                hideProgressBar: true,
                closeOnClick: true,
                autoClose: 3000,
                });
            return;
        }
        
        if(!upperPassRex.test(password)){
            toast.error('Password must be one uppercase!', {
                position: "top-right",
                hideProgressBar: true,
                closeOnClick: true,
                autoClose: 3000,
                });
            return;
        };

        if(!lowerPassRex.test(password)){
            toast.error('Password must be one lowercase!', {
                position: "top-right",
                hideProgressBar: true,
                closeOnClick: true,
                autoClose: 3000,
                });
            return;
        };

        if(password.length < 6){
            toast.error('Password must be 6 character!', {
                position: "top-right",
                hideProgressBar: true,
                closeOnClick: true,
                autoClose: 3000,
                });
            return;
        };

        if(!terms){
            toast.error('Please accept our terms and condition!', {
                position: "top-right",
                hideProgressBar: true,
                closeOnClick: true,
                autoClose: 3000,
                });
            return;
        };

        userRegister(email, password)
            .then(() => {
                updateProfile(auth.currentUser,{displayName: name, photoURL: photo})
                    .then(() => {
                        e.target.reset();
                        toast.success('Register successful!', {
                            position: "top-right",
                            hideProgressBar: true,
                            closeOnClick: true,
                            autoClose: 3000,
                        });
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                if(err?.message){
                    toast.error('Email Already in use. Please Login!', {
                        position: "top-right",
                        hideProgressBar: true,
                        closeOnClick: true,
                        autoClose: 3000,
                    });
                };
            })
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
                    <div className="w-full space-y-4">
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
                                    <div onClick={handleShowPassword} className="w-auto absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer">
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
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full py-2 mb-3">
                            <div className="w-auto flex items-center gap-2">
                                <input type="checkbox" name="terms" />
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
            <ToastContainer />
        </>
    );
};

export default RegisterForm;