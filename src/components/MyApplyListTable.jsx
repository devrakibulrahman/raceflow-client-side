import { RiDeleteBin6Line } from "react-icons/ri";
import { LuFilePen } from "react-icons/lu";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from "axios";

const MyApplyListTable = () => {

    //? state declare here ---------------------------------->
    const [apply, setApply] = useState([]);
    const [open, setOpen] = useState(false);

    //? modal state declare here ----------------------------> 
    const [applyId, setApplyId] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [yourLocation, setYourLocation] = useState('');
    const [applyLocation, setApplyLocation] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    //? context declare here -------------------------------->
    const {user} = useContext(AuthContext);

    //? hooks declare here ---------------------------------->
    const location = useLocation();
    
    //? useEffect declare here ------------------------------>
    useEffect(() => {
        fetchApply();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname, user?.email])
    
    //? fetch date function declare here -------------------->
    const fetchApply = async () => {
        try{
            const {data} = await axios.get(`${import.meta.env.VITE_HOST}/marathon_apply/${user?.email}`);
            setApply(data);
        }catch(err){
            console.log(err);
        };
    };

    //? event handler declare here ------------------------------>
    const handleDelete = async (id) => {
        try{
            const res = await axios.delete(`${import.meta.env.VITE_HOST}/marathon_apply/${id}`);
            if(res?.status === 200){
                toast.success('Delete successful!', {
                    position: "top-right",
                    hideProgressBar: true,
                    closeOnClick: true,
                    autoClose: 3000,
                });
                fetchApply();
            };
        }catch(err){
            console.log(err);
        };
    };

    const handleOpen = (data) => {
        setOpen(true);
        setApplyId(data?._id);
        setTitle(data?.title);
        setDate(data?.date);
        setFname(data?.fname);
        setLname(data?.lname);
        setYourLocation(data?.your_location);
        setApplyLocation(data?.location);
        setPhone(data?.phone);
        setEmail(data?.email);
    };

    const handleClose = () => {
        setOpen(false);
        setApplyId('');
        setTitle('');
        setDate('');
        setFname('');
        setLname('');
        setYourLocation('');
        setApplyLocation('');
        setPhone('');
        setEmail('');
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const fname = form.get('fname');
        const lname = form.get('lname');
        const phone = form.get('phone');
        const location = form.get('location');

        const update = {
            fname,
            lname,
            phone,
            location
        };

        try{
            const res = await axios.patch(`${import.meta.env.VITE_HOST}/marathon_apply/${applyId}`, update);
            if(res?.status === 200){
                toast.success('Update successful!', {
                    position: "top-right",
                    hideProgressBar: true,
                    closeOnClick: true,
                    autoClose: 3000,
                });
                setOpen(false);
                setApplyId('');
                setTitle('');
                setDate('');
                setFname('');
                setLname('');
                setYourLocation('');
                setApplyLocation('');
                setPhone('');
                setEmail('');
                e.target.reset();
                fetchApply();
            }
        }catch(err){
            console.log(err);
        };
    };

    return (
        <>
            <div className="w-full min-h-[550px]">
                <TableContainer className='bg-head-charleston-green rounded-tl-lg rounded-tr-lg'>
                    <Table sx={{ minWidth: "100%"}} aria-label="simple table">
                        <TableHead className="">
                            <TableRow>
                                <TableCell align="left">
                                    <span className="font-roboto text-primary-yellow text-base font-medium">No.</span>
                                </TableCell>
                                <TableCell align="left">
                                    <span className="font-roboto text-primary-yellow text-base font-medium">Title</span>
                                </TableCell>
                                <TableCell align="left">
                                    <span className="font-roboto text-primary-yellow text-base font-medium">Location</span>
                                </TableCell>
                                <TableCell align="left">
                                    <span className="font-roboto text-primary-yellow text-base font-medium">Your Location</span>
                                </TableCell>
                                <TableCell align="left">
                                    <span className="font-roboto text-primary-yellow text-base font-medium">Start Date</span>
                                </TableCell>
                                <TableCell align="center">
                                    <span className="font-roboto text-primary-yellow text-base font-medium">Activities</span>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="overflow-y-scroll">
                            {
                                apply.map((data, idx) => (
                                    <TableRow key={data?._id} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                                        <TableCell align="left">
                                            <div className="w-auto overflow-hidden">
                                                <span className="font-roboto text-head-charleston-green font-medium text-base text-ellipsis overflow-hidden whitespace-nowrap">{idx + 1}.</span>
                                            </div>
                                        </TableCell>
                                        <TableCell align="left">
                                            <span className="font-roboto text-head-charleston-green font-medium text-base">{data?.title}</span>
                                        </TableCell>
                                        <TableCell align="left">
                                            <span className="font-roboto text-head-charleston-green font-medium text-base">{data?.location}</span>
                                        </TableCell>
                                        <TableCell align="left">
                                            <span className="font-roboto text-head-charleston-green font-medium text-base">{data?.your_location}</span>
                                        </TableCell>
                                        <TableCell align="left">
                                            <span className="font-roboto text-head-charleston-green font-medium text-base">{data?.date}</span>
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
                                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">First Name</label>
                                            </div>
                                            <div className="w-full">
                                                <input type="text" placeholder="First Name" defaultValue={fname} name="fname" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"/>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <div className="w-full mb-3">
                                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">Last Name</label>
                                            </div>
                                            <div className="w-full">
                                                <input type="text" placeholder="Last Name" defaultValue={lname} name="lname" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col items-center justify-center gap-5">
                                        <div className="w-full">
                                            <div className="w-full mb-3">
                                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">Your Location</label>
                                            </div>
                                            <div className="w-full">
                                                <input type="text" placeholder="Your location" defaultValue={yourLocation} name="location" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col items-center justify-center gap-5 md:flex-row">
                                        <div className="w-full">
                                            <div className="w-full mb-3">
                                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">Email</label>
                                            </div>
                                            <div className="w-full">
                                                <input type="text" placeholder="Email" defaultValue={email} readOnly name="email" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light pointer-events-none"/>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <div className="w-full mb-3">
                                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">Phone</label>
                                            </div>
                                            <div className="w-full">
                                                <input type="number" placeholder="Number" defaultValue={phone} name="phone" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col items-center justify-center gap-5 md:flex-row">
                                        <div className="w-full">
                                            <div className="w-full mb-3">
                                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">Marathon Title</label>
                                            </div>
                                            <div className="w-full">
                                                <input type="text" placeholder="Marathon Title" defaultValue={title} readOnly name="title" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light pointer-events-none"/>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <div className="w-full mb-3">
                                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">Start Date</label>
                                            </div>
                                            <div className="w-full">
                                                <input type="text" placeholder="Start Date" defaultValue={date} readOnly name="date" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light pointer-events-none"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col items-center justify-center gap-5">
                                        <div className="w-full">
                                            <div className="w-full mb-3">
                                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">Location</label>
                                            </div>
                                            <div className="w-full">
                                                <input type="text" placeholder="Location" defaultValue={applyLocation} readOnly name="location" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light pointer-events-none"/>
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

export default MyApplyListTable;