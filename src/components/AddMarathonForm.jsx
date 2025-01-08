import { useContext, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { format } from "date-fns";
import { AuthContext } from "../contexts/AuthProvider";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from "react-datepicker";

const AddMarathonForm = () => {

    const {user} = useContext(AuthContext);

    const [startDate, setStartDate] = useState(null);
    const [endData, setEndDate] = useState(null);
    const [maraStartDate, setMaraStartDate] = useState(null);
    const [option, setOption] = useState('Select Running Distance');
    const [selectActive, setSelectActive] = useState(false);

    const options = [ '3k', '10k', '25k' ];

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const marathonTitle = form.get('title');
        const marathonImage =  form.get('photo');
        const registrationStartDate = format(new Date(startDate), 'P');
        const registrationEndDate = format(new Date(endData), 'P');
        const marathonStartDate = format(new Date(maraStartDate), 'P');
        const location = form.get('location');
        const runningDistance = option === 'Select Running Distance' ? '' : option;
        const description = form.get('message');

        const AddMarathon = {
            marathonTitle,
            marathonImage,
            registrationStartDate,
            registrationEndDate,
            marathonStartDate,
            location,
            runningDistance,
            description,
            regCount: 0,
            username: user?.displayName,
            email: user?.email
        };

        console.log(AddMarathon);

    };

    return (
        <div className="w-full max-w-[950px] min-h-[550px] bg-pattern bg-cover bg-center bg-no-repeat p-5">
            <form onSubmit={handleFormSubmit} className="w-full">
                <div className="w-full grid grid-cols-1 gap-7">
                    <div className="w-full flex flex-col items-center justify-center gap-5 md:flex-row">
                        <div className="w-full">
                            <div className="w-full mb-3">
                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">Marathon Title</label>
                            </div>
                            <div className="w-full">
                                <input type="text" placeholder="Marathon Title" name="title" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"/>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full mb-3">
                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">Marathon Image</label>
                            </div>
                            <div className="w-full">
                                <input type="text" placeholder="Image Url" name="photo" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-5 md:flex-row">
                        <div className="w-full">
                            <div className="w-full mb-3">
                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">Start Registration Date</label>
                            </div>
                            <div className="w-full min-h-[58px] bg-white border border-slate-200 cursor-text transition ease-linear duration-200 hover:border-head-charleston-green">
                                <DatePicker selected={startDate} onChange={(date) => {setStartDate(date)}} disabledKeyboardNavigation placeholderText="Registration Start Date" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"></DatePicker>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full mb-3">
                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">End Registration Date</label>
                            </div>
                            <div className="w-full min-h-[58px] bg-white border border-slate-200 cursor-text transition ease-linear duration-200 hover:border-head-charleston-green">
                                <DatePicker selected={endData} onChange={(date) => {setEndDate(date)}} disabledKeyboardNavigation placeholderText="Registration End Date" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"></DatePicker>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-5 md:flex-row">
                        <div className="w-full">
                            <div className="w-full mb-3">
                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">Marathon Start Date</label>
                            </div>
                            <div className="w-full min-h-[58px] bg-white border border-slate-200 cursor-text transition ease-linear duration-200 hover:border-head-charleston-green">
                                <DatePicker selected={maraStartDate} onChange={(date) => {setMaraStartDate(date)}} disabledKeyboardNavigation placeholderText="Marathon Start Date" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"></DatePicker>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-5 md:flex-row">
                        <div className="w-full">
                            <div className="w-full mb-3">
                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">Location</label>
                            </div>
                            <div className="w-full">
                                <input type="text" placeholder="Location" name="location" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"/>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full mb-3">
                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">Running Distance</label>
                            </div>
                            <div className="w-full relative">
                                <div onClick={() => setSelectActive(true)} className="w-full min-h-[58px] p-4 bg-white border border-slate-200 transition ease-linear duration-200 cursor-pointer flex items-center justify-between hover:border-head-charleston-green">
                                    <div className="w-auto">
                                        <span className={`font-roboto text-base ${option === 'Select Running Distance' ? 'text-[#A1A1A1] font-light' : 'text-head-charleston-green font-normal'}`}>{option}</span>
                                    </div>
                                    <div className="w-auto">
                                        <IoMdArrowDropdown className="text-[#A1A1A1]"></IoMdArrowDropdown>
                                    </div>
                                </div>
                                {
                                    selectActive
                                    &&    
                                    <div className="w-full min-h-[20px] bg-white border-l border-t border-r border-slate-200 absolute top-[110%] left-0 z-10">
                                        {
                                            options.map((op, idx) => (
                                                <div onClick={() => {setOption(op), setSelectActive(false)}} key={idx} className="w-full min-h-[20px] p-4 bg-transparent cursor-pointer border-b border-slate-200 hover:bg-slate-200">
                                                    <p className="font-roboto text-base text-head-charleston-green font-medium">{op}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                }
                            </div>
                                
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-5 md:flex-row">
                        <div className="w-full">
                            <div className="w-full mb-3">
                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">Description</label>
                            </div>
                            <div className="w-full">
                                <textarea type="text" placeholder="Message" name="message" rows={5} cols={10} autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light resize-none"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-end">
                        <button className="font-roboto text-sm text-primary-yellow uppercase font-medium tracking-widest border border-head-charleston-green bg-head-charleston-green py-4 px-6 transition ease-linear duration-200 hover:bg-white hover:text-head-charleston-green">Submit message</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddMarathonForm;