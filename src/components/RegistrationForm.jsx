import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from '../contexts/AuthProvider';
import { toast } from "react-toastify";
import axios from "axios";

const RegistrationForm = () => {

    //? state declare here ------------------->
    const [marathonReg, setMarathonReg] = useState({});

    //? context declare here ----------------->
    const {user} = useContext(AuthContext); 

    //? hooks declare here ------------------->
    const params = useParams();
    const navigate = useNavigate();

    //? form submit function declare here ----> 
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const fname = form.get('fname');
        const lname = form.get('lname');
        const email = form.get('email');
        const phone = form.get('phone');
        const location = form.get('location');
        const title = form.get('title');
        const date = form.get('date');

        if(user?.email === marathonReg?.email){
            toast.error('Sorry you cannot apply your created marathon!', {
                position: "top-right",
                hideProgressBar: true,
                closeOnClick: true,
                autoClose: 3000,
            });
            return;
        };

        if(fname === ''){
            toast.error('Please enter your first name!', {
                position: "top-right",
                hideProgressBar: true,
                closeOnClick: true,
                autoClose: 3000,
            });
            return;
        };

        if(lname === ''){
            toast.error('Please enter your last name!', {
                position: "top-right",
                hideProgressBar: true,
                closeOnClick: true,
                autoClose: 3000,
            });
            return;
        };

        if(phone === ''){
            toast.error('Please enter your contact number!', {
                position: "top-right",
                hideProgressBar: true,
                closeOnClick: true,
                autoClose: 3000,
            });
            return;
        };

        if(location === ''){
            toast.error('Please enter your location!', {
                position: "top-right",
                hideProgressBar: true,
                closeOnClick: true,
                autoClose: 3000,
            });
            return;
        };

        const regData = {
            fname, lname, email, phone, location: marathonReg?.location, your_location: location, title, date, marathonApplyId: params?.id
        };

        try{
            const res = await axios.post(`${import.meta.env.VITE_HOST}/marathon_apply`, regData);
            if(res?.status === 201){
                toast.success('Registration successful!', {
                    position: "top-right",
                    hideProgressBar: true,
                    closeOnClick: true,
                    autoClose: 3000,
                });
                e.target.reset();
                navigate('/dashboard/my_apply')
            };
        }catch(err){
            console.log(err);
        };
    };

    //? useEffect declare here --------------->
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params?.id]);

    //? fetch data function ------------------>
    const fetchData = async () => {
        try{
            const {data} = await axios.get(`${import.meta.env.VITE_HOST}/marathon_registration/${params?.id}`);
            setMarathonReg(data);
        }catch(err){
            console.log(err);
        };
    };

    return (
        <>
            <form onSubmit={handleFormSubmit} className="w-full">
                <div className="w-full grid grid-cols-1 gap-6">
                    <div className="w-full flex flex-col items-center justify-center gap-4 md:flex-row">
                        <div className="w-full">
                            <div className="w-full mb-3 text-left">
                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug dark:text-white">First Name</label>
                            </div>
                            <div className="w-full">
                                <input type="text" placeholder="first name" name="fname" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light dark:bg-transparent dark:text-light-gray dark:placeholder:text-dark-gray dark:border-dark-black"/>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full mb-3 text-left">
                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug dark:text-white">Last Name</label>
                            </div>
                            <div className="w-full">
                                <input type="text" placeholder="last name" name="lname" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light dark:bg-transparent dark:text-light-gray dark:placeholder:text-dark-gray dark:border-dark-black"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-4 md:flex-row">
                        <div className="w-full">
                            <div className="w-full mb-3 text-left">
                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug dark:text-white">Email</label>
                            </div>
                            <div className="w-full">
                                <input type="text" placeholder="email" defaultValue={user?.email} readOnly name="email" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light pointer-events-none dark:bg-transparent dark:text-light-gray dark:placeholder:text-dark-gray dark:border-dark-black"/>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full mb-3 text-left">
                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug dark:text-white">Phone</label>
                            </div>
                            <div className="w-full">
                                <input type="number" placeholder="number" name="phone" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light dark:bg-transparent dark:text-light-gray dark:placeholder:text-dark-gray dark:border-dark-black"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-4 md:flex-row">
                        <div className="w-full">
                            <div className="w-full mb-3 text-left">
                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug dark:text-white">Your Location</label>
                            </div>
                            <div className="w-full">
                                <input type="text" placeholder="your location" name="location" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light dark:bg-transparent dark:text-light-gray dark:placeholder:text-dark-gray dark:border-dark-black"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-4 md:flex-row">
                        <div className="w-full">
                            <div className="w-full mb-3 text-left">
                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug dark:text-white">Marathon Title</label>
                            </div>
                            <div className="w-full">
                                <input type="text" placeholder="marathon title" defaultValue={marathonReg?.marathonTitle} readOnly name="title" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light pointer-events-none dark:bg-transparent dark:text-light-gray dark:placeholder:text-dark-gray dark:border-dark-black"/>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full mb-3 text-left">
                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug dark:text-white">Marathon Start Date</label>
                            </div>
                            <div className="w-full">
                                <input type="text" placeholder="marathon start date" defaultValue={marathonReg?.marathonStartDate} readOnly name="date" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light pointer-events-none dark:bg-transparent dark:text-light-gray dark:placeholder:text-dark-gray dark:border-dark-black"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center md:justify-end">
                        <button className="w-full bg-primary-yellow py-3 px-4 mt-4 border-2 border-primary-yellow font-roboto text-base text-head-charleston-green font-bold uppercase tracking-wide transition ease-linear duration-200 hover:bg-head-charleston-green hover:text-primary-yellow hover:border-head-charleston-green md:max-w-[200px]">Register Now</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default RegistrationForm;