import { RiDeleteBin6Line } from "react-icons/ri";
import { LuFilePen } from "react-icons/lu";
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MyMarathonUpdateModalForm from './MyMarathonUpdateModalForm';

const MyMarathonListTable = () => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="w-full max-w-[950px] min-h-[550px]">
                <TableContainer className='bg-white rounded-tl-lg rounded-tr-lg border-t border-l border-r border-slate-200'>
                    <Table sx={{ minWidth: "100%"}} aria-label="simple table">
                        <TableHead className="">
                            <TableRow>
                                <TableCell align="left">
                                    <span className="font-roboto text-head-charleston-green text-base font-medium">Marathon Title</span>
                                </TableCell>
                                <TableCell align="left">
                                    <span className="font-roboto text-head-charleston-green text-base font-medium">Location</span>
                                </TableCell>
                                <TableCell align="left">
                                    <span className="font-roboto text-head-charleston-green text-base font-medium">Distance</span>
                                </TableCell>
                                <TableCell align="left">
                                    <span className="font-roboto text-head-charleston-green text-base font-medium">Start Date</span>
                                </TableCell>
                                <TableCell align="center">
                                    <span className="font-roboto text-head-charleston-green text-base font-medium">Activities</span>
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
                                        <button  className="w-auto flex items-center justify-center"><RiDeleteBin6Line className="text-xl"/></button>
                                        <button onClick={handleClickOpen} className="w-auto flex items-center justify-center"><LuFilePen className="text-lg"/></button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <MyMarathonUpdateModalForm open={open} handleClose={handleClose}></MyMarathonUpdateModalForm>
        </>
    );
};

export default MyMarathonListTable;