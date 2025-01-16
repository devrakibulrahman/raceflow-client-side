import { RiDeleteBin6Line } from "react-icons/ri";
import { LuFilePen } from "react-icons/lu";
// import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import MyApplyListUpdateModalForm from "./MyApplyListUpdateModalForm";

const MyApplyListTable = () => {

    // const [open, setOpen] = useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    return (
        <>
            <div className="w-full min-h-[550px]">
                <TableContainer className='bg-head-charleston-green rounded-tl-lg rounded-tr-lg'>
                    <Table sx={{ minWidth: "100%"}} aria-label="simple table">
                        <TableHead className="">
                            <TableRow>
                                <TableCell align="left">
                                    <span className="font-roboto text-primary-yellow text-base font-medium">Title</span>
                                </TableCell>
                                <TableCell align="left">
                                    <span className="font-roboto text-primary-yellow text-base font-medium">Location</span>
                                </TableCell>
                                <TableCell align="left">
                                    <span className="font-roboto text-primary-yellow text-base font-medium">Distance</span>
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
                            <TableRow className="bg-slate-50">
                                <TableCell align="left">
                                    <div className="w-auto overflow-hidden">
                                        <span className="font-roboto text-head-charleston-green font-medium text-base text-ellipsis overflow-hidden whitespace-nowrap">Marathon</span>
                                    </div>
                                </TableCell>
                                <TableCell align="left">
                                    <span className="font-roboto text-head-charleston-green font-medium text-base">Marathon</span>
                                </TableCell>
                                <TableCell align="left">
                                    <span className="font-roboto text-head-charleston-green font-medium text-base">3k</span>
                                </TableCell>
                                <TableCell align="left">
                                    <span className="font-roboto text-head-charleston-green font-medium text-base">20/4/2025</span>
                                </TableCell>
                                <TableCell align="left">
                                    <div className="w-full flex items-center justify-center gap-x-5">
                                        <button className="w-auto flex items-center justify-center"><RiDeleteBin6Line className="text-xl"/></button>
                                        <button className="w-auto flex items-center justify-center"><LuFilePen className="text-lg"/></button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            {/* <div className={`
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
                            <form>
                                <div className="w-full grid grid-cols-1 gap-5">
                                    <div className="w-full flex flex-col items-center justify-center gap-5 md:flex-row">
                                        <div className="w-full">
                                            <div className="w-full mb-3">
                                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">Marathon Title</label>
                                            </div>
                                            <div className="w-full">
                                                <input type="text" placeholder="Marathon Title" defaultValue={data?.marathonTitle} name="title" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"/>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <div className="w-full mb-3">
                                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">Marathon Image</label>
                                            </div>
                                            <div className="w-full">
                                                <input type="text" placeholder="Image Url" defaultValue={data?.marathonImage} name="photo" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"/>
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
                                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">Start Reg Date</label>
                                            </div>
                                            <div className="w-full min-h-[58px] bg-white border border-slate-200 cursor-text transition ease-linear duration-200 hover:border-head-charleston-green">
                                                <DatePicker selected={regStartDate} onChange={(date) => {setRegStartDate(date)}} disabledKeyboardNavigation placeholderText="Registration Start Date" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"></DatePicker>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <div className="w-full mb-3">
                                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase">End Reg Date</label>
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
                                                <input type="text" placeholder="Location" defaultValue={data?.location} name="location" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"/>
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
                                                <textarea type="text" placeholder="Message" defaultValue={data?.description} name="description" rows={5} cols={10} autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light resize-none"></textarea>
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
            </div> */}
        </>
    );
};

export default MyApplyListTable;