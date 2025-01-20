import { RiDeleteBin6Line } from "react-icons/ri";
import { LuFilePen } from "react-icons/lu";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { format } from "date-fns";
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from "axios";
import DatePicker from "react-datepicker";
import { AuthContext } from "../contexts/AuthProvider";
import { PuffLoader } from "react-spinners";

const MyMarathonListTable = () => {

    //? state declare here --------------------------------------> 
    const [marathon, setMarathon] = useState([]);
    const [open, setOpen] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [regStartDate, setRegStartDate] = useState(null);
    const [regEndDate, setRegEndDate] = useState(null);
    const [dropDownActive, setDropDownActive] = useState(false);
    const [loading, setLoading] = useState(true);
    const [option, setOption] = useState('Select Running Distance');

    //? modal state declare here -------------------------------->
    const [maraId, setMaraId] = useState('');
    const [title, setTitle] = useState('');
    const [locations, setLocations] = useState('');
    const [photo, setPhoto] = useState('');
    const [description, setDescription] = useState('');

    //? context declare here ------------------------------------>
    const {user} = useContext(AuthContext);

    //? data array ---------------------------------------------->
    const options = ['3k', '10k', '23k'];
    
    //? hooks declare here -------------------------------------->
    const location = useLocation();
    
    //? useEffect declare here ---------------------------------->
    useEffect(() => {
        fetchMarathonData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname, user?.email]);
    
    //? data fetch here ----------------------------------------->
    const fetchMarathonData = async () => {
        try{
            const {data} = await axios.get(`${import.meta.env.VITE_HOST}/marathon/${user?.email}`);
            setMarathon(data);
            setLoading(false);
        }catch(err) {
            console.log(err);
        };
    };
    
    //? event handler declare here ------------------------------>
    const handleDelete = async (id) => {
        try{
            const res = await axios.delete(`${import.meta.env.VITE_HOST}/marathon/${id}`);
            if(res?.status === 200){
                toast.success('Delete successful!', {
                    position: "top-right",
                    hideProgressBar: true,
                    closeOnClick: true,
                    autoClose: 3000,
                });
                fetchMarathonData();
            };
        }catch(err){
            console.log(err);
        };
    };
    
    const handleDropdownActive = () => {
        setDropDownActive(!dropDownActive);
    };

    const handleOpen = (data) => {
        setOpen(true);
        setMaraId(data?._id);
        setTitle(data?.marathonTitle);
        setLocations(data?.location);
        setOption(data?.runningDistance);
        setStartDate(new Date(data?.marathonStartDate));
        setRegStartDate(new Date(data?.registrationStartDate));
        setRegEndDate(new Date(data?.registrationEndDate));
        setPhoto(data?.marathonImage);
        setDescription(data?.description);
    };

    const handleClose = () => {
        setOpen(false);
        setMaraId('');
        setTitle('');
        setLocations('');
        setOption('');
        setStartDate(null);
        setRegStartDate(null);
        setRegEndDate(null);
        setPhoto('');
        setDescription('');
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const marathonTitle = form.get('title');
        const marathonImage = form.get('photo');
        const marathonStartDate = format(new Date(startDate), 'P');
        const registrationStartDate = format(new Date(regStartDate), 'P');
        const registrationEndDate = format(new Date(regEndDate), 'P');
        const location = form.get('location');
        const runningDistance = option;
        const description = form.get('description');

        const update = {
            marathonTitle,
            marathonImage, 
            marathonStartDate,
            registrationStartDate,
            registrationEndDate,
            location, runningDistance, description
        };

        try{
            const res = await axios.patch(`${import.meta.env.VITE_HOST}/marathon/${maraId}`, update);
            if(res?.status === 200){
                toast.success('Update successful!', {
                    position: "top-right",
                    hideProgressBar: true,
                    closeOnClick: true,
                    autoClose: 3000,
                });
                setOpen(false);
                setMaraId('');
                setTitle('');
                setLocations('');
                setOption('');
                setStartDate(null);
                setRegStartDate(null);
                setRegEndDate(null);
                setPhoto('');
                setDescription('');
                e.target.reset();
                fetchMarathonData();
            }
        }catch(err){
            console.log(err);
        };
    };

    return (
        <>
            <div className="w-full min-h-[550px]">
                {
                    loading
                    ?
                    <div className="w-full min-h-[600px] flex items-center justify-center">
                        <PuffLoader color="#f3e03b" />
                    </div>
                    :
                    (
                        marathon.length === 0
                        ?
                        <div className="w-full min-h-[600px] flex items-center justify-center">
                            <h1 className="font-roboto text-2xl text-head-charleston-green font-bold">No Date Available!</h1>
                        </div>
                        :
                        <TableContainer className='bg-head-charleston-green rounded-tl-lg rounded-tr-lg dark:bg-dark-black'>
                            <Table sx={{ minWidth: "100%"}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">
                                            <span className="font-roboto text-primary-yellow text-base font-medium dark:text-white">No.</span>
                                        </TableCell>
                                        <TableCell align="left">
                                            <span className="font-roboto text-primary-yellow text-base font-medium dark:text-white">Title</span>
                                        </TableCell>
                                        <TableCell align="left">
                                            <span className="font-roboto text-primary-yellow text-base font-medium dark:text-white">Location</span>
                                        </TableCell>
                                        <TableCell align="left">
                                            <span className="font-roboto text-primary-yellow text-base font-medium dark:text-white">Distance</span>
                                        </TableCell>
                                        <TableCell align="left">
                                            <span className="font-roboto text-primary-yellow text-base font-medium dark:text-white">Start Date</span>
                                        </TableCell>
                                        <TableCell align="left">
                                            <span className="font-roboto text-primary-yellow text-base font-medium dark:text-white">Reg. Start Date</span>
                                        </TableCell>
                                        <TableCell align="left">
                                            <span className="font-roboto text-primary-yellow text-base font-medium dark:text-white">Reg. End Date</span>
                                        </TableCell>
                                        <TableCell align="center">
                                            <span className="font-roboto text-primary-yellow text-base font-medium dark:text-white">Activities</span>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody className="overflow-y-scroll">
                                    {
                                        marathon.map((data, idx )=> (
                                            <TableRow key={data?._id} className={`${idx % 2 === 0 ? 'bg-white dark:bg-dark-gray' : 'bg-slate-50 dark:bg-light-gray'}`}>
                                                <TableCell align="left">
                                                    <div className="w-auto overflow-hidden">
                                                        <span className="font-roboto text-head-charleston-green font-medium text-base text-ellipsis overflow-hidden whitespace-nowrap">{idx + 1}.</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell align="left">
                                                    <div className="w-auto overflow-hidden">
                                                        <span className="font-roboto text-head-charleston-green font-medium text-base text-ellipsis overflow-hidden whitespace-nowrap">{data?.marathonTitle}</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell align="left">
                                                    <span className="font-roboto text-head-charleston-green font-medium text-base">{data?.location}</span>
                                                </TableCell>
                                                <TableCell align="left">
                                                    <span className="font-roboto text-head-charleston-green font-medium text-base">{data?.runningDistance}</span>
                                                </TableCell>
                                                <TableCell align="left">
                                                    <span className="font-roboto text-head-charleston-green font-medium text-base">{data?.marathonStartDate}</span>
                                                </TableCell>
                                                <TableCell align="left">
                                                    <span className="font-roboto text-head-charleston-green font-medium text-base">{data?.registrationStartDate}</span>
                                                </TableCell>
                                                <TableCell align="left">
                                                    <span className="font-roboto text-head-charleston-green font-medium text-base">{data?.registrationEndDate}</span>
                                                </TableCell>
                                                <TableCell align="left">
                                                    <div className="w-full flex items-center justify-center gap-x-5">
                                                        <button onClick={() => handleDelete(data?._id)} className="w-auto flex items-center justify-center"><RiDeleteBin6Line className="text-xl"/></button>
                                                        <button onClick={() => handleOpen(data)} className="w-auto flex items-center justify-center"><LuFilePen className="text-lg"/></button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )
                }
            </div>

            <div className={`
                fixed inset-0 flex justify-center items-center transition-colors p-4 ${open ? 'visible bg-black/20' : 'invisible'}
            `}>
                <div onClick={(e) => e.stopPropagation()} className={`
                    w-full max-w-[550px] h-[550px] bg-white rounded-lg shadow transition-all overflow-y-scroll relative
                    ${open ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}
                `}>
                    <div className="w-full min-h-[50px] flex items-center justify-between sticky top-0 left-0 bg-white z-10 py-5 px-7 border-b border-slate-200">
                        <h1 className="font-roboto text-lg font-bold uppercase text-head-charleston-green">Marathon Update Form</h1>
                        <button onClick={handleClose} className="w-7 h-7 flex items-center justify-center transition-colors ease-linear duration-200 hover:bg-slate-200">
                            <IoMdClose className="text-head-charleston-green text-[25px]"></IoMdClose>
                        </button>
                    </div>
                    <div className="w-full p-7">
                        <div className="w-full">
                            <form onSubmit={handleFormSubmit}>
                                <div className="w-full grid grid-cols-1 gap-5">
                                    <div className="w-full flex flex-col items-center justify-center gap-5 md:flex-row">
                                        <div className="w-full">
                                            <div className="w-full mb-3">
                                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">Marathon Title</label>
                                            </div>
                                            <div className="w-full">
                                                <input type="text" placeholder="Marathon Title" defaultValue={title} name="title" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"/>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <div className="w-full mb-3">
                                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">Marathon Image</label>
                                            </div>
                                            <div className="w-full">
                                                <input type="text" placeholder="Image Url" defaultValue={photo} name="photo" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col items-center justify-center gap-5 md:flex-row">
                                        <div className="w-full">
                                            <div className="w-full mb-3">
                                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">Marathon Start Date</label>
                                            </div>
                                            <div className="w-full min-h-[58px] bg-white border border-slate-200 cursor-text transition ease-linear duration-200 hover:border-head-charleston-green">
                                                <DatePicker selected={startDate} onChange={(date) => {setStartDate(date)}} disabledKeyboardNavigation placeholderText="Marathon Start Date" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"></DatePicker>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col items-center justify-center gap-5 md:flex-row">
                                        <div className="w-full">
                                            <div className="w-full mb-3">
                                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">Reg. Start Date</label>
                                            </div>
                                            <div className="w-full min-h-[58px] bg-white border border-slate-200 cursor-text transition ease-linear duration-200 hover:border-head-charleston-green">
                                                <DatePicker selected={regStartDate} onChange={(date) => {setRegStartDate(date)}} disabledKeyboardNavigation placeholderText="Registration Start Date" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"></DatePicker>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <div className="w-full mb-3">
                                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">Reg. End Date</label>
                                            </div>
                                            <div className="w-full min-h-[58px] bg-white border border-slate-200 cursor-text transition ease-linear duration-200 hover:border-head-charleston-green">
                                                <DatePicker selected={regEndDate} onChange={(date) => {setRegEndDate(date)}} disabledKeyboardNavigation placeholderText="Registration End Date" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"></DatePicker>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col items-center justify-center gap-5">
                                        <div className="w-full">
                                            <div className="w-full mb-3">
                                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">Location</label>
                                            </div>
                                            <div className="w-full">
                                                <input type="text" placeholder="Location" defaultValue={locations} name="location" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"/>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <div className="w-full mb-3">
                                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">Running Distance</label>
                                            </div>
                                            <div className="w-full relative">
                                                <div onClick={() => handleDropdownActive()} className="w-full min-h-[58px] p-4 bg-white border border-slate-200 transition ease-linear duration-200 cursor-pointer flex items-center justify-between hover:border-head-charleston-green">
                                                    <div className="w-auto">
                                                        <span className={`font-roboto text-base ${option === 'Select Running Distance' ? 'text-[#A1A1A1] font-light' : 'text-head-charleston-green font-normal'}`}>{option}</span>
                                                    </div>
                                                    <div className="w-auto">
                                                        <IoMdArrowDropdown className="text-[#A1A1A1]"></IoMdArrowDropdown>
                                                    </div>
                                                </div>
                                                {
                                                    dropDownActive
                                                    &&    
                                                    <div className="w-full min-h-[20px] bg-white border-l border-t border-r border-slate-200 absolute top-[110%] left-0 z-10">
                                                        {
                                                            options.map((op, idx) => (
                                                                <div onClick={() => {setOption(op), setDropDownActive(false)}} key={idx} className="w-full min-h-[20px] p-4 bg-transparent cursor-pointer border-b border-slate-200 hover:bg-slate-200">
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
                                                <textarea type="text" placeholder="Message" defaultValue={description} name="description" rows={5} cols={10} autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light resize-none"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-end">
                                        <button className="bg-primary-yellow py-2 px-3 font-roboto text-head-charleston-green font-bold uppercase">Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyMarathonListTable;