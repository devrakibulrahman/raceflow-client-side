import { IoMdMenu, IoMdClose, IoMdAdd } from "react-icons/io";
import { IoList } from "react-icons/io5";
import { RiHome4Line } from "react-icons/ri";
import { LuClipboardList } from "react-icons/lu";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
    return (
        <>
            <div className="w-64 h-full bg-white border-r border-slate-200 fixed top-0 left-0">
                <div className="w-full min-h-[70px] px-5 flex items-center justify-center">
                    <div className="w-full">
                        <h1 className="font-roboto text-2xl font-bold uppercase text-head-charleston-green">Dashboard</h1>
                    </div>
                    <div className="w-auto">
                        <button className="w-auto hidden lg:block">
                            <IoMdMenu className="text-3xl text-head-charleston-green"></IoMdMenu>
                        </button>
                        <button className="w-auto lg:hidden">
                            <IoMdClose  className="text-3xl text-head-charleston-green"></IoMdClose >
                        </button>
                    </div>
                </div>
                <div className="w-full h-full pl-5 py-5 mt-5">
                    <div className="w-full">
                        <nav className="w-full">
                            <ul className="w-full flex justify-center gap-y-3 flex-col">
                                <li className="border-b border-slate-200">
                                    <Link className="font-roboto text-base text-head-charleston-green font-medium flex items-center justify-start gap-3 py-4">
                                        <RiHome4Line className="text-base text-head-charleston-green lg:text-xl"></RiHome4Line>
                                        <span className="mt-1">Home</span>
                                    </Link>
                                </li>
                                <li className="border-b border-slate-200 transition ease-linear duration-200 group hover:border-head-charleston-green">
                                    <Link className="font-roboto text-base text-black/40 transition ease-linear duration-200 group-hover:text-head-charleston-green font-medium flex items-center justify-start gap-3 py-4">
                                        <IoMdAdd className="text-base text-black/40 transition ease-linear duration-200 group-hover:text-head-charleston-green lg:text-xl"></IoMdAdd>
                                        <span className="mt-1">Add Marathon</span>
                                    </Link>
                                </li>
                                <li className="border-b border-slate-200 transition ease-linear duration-200 group hover:border-head-charleston-green">
                                    <Link className="font-roboto text-base text-black/40 transition ease-linear duration-200 group-hover:text-head-charleston-green font-medium flex items-center justify-start gap-3 py-4">
                                        <IoList className="text-base text-black/40 transition ease-linear duration-200 group-hover:text-head-charleston-green lg:text-xl"></IoList>
                                        <span className="mt-1">My Marathon List</span>
                                    </Link>
                                </li>
                                <li className="border-b border-slate-200 transition ease-linear duration-200 group hover:border-head-charleston-green">
                                    <Link className="font-roboto text-base text-black/40 transition ease-linear duration-200 group-hover:text-head-charleston-green font-medium flex items-center justify-start gap-3 py-4">
                                        <LuClipboardList className="text-base text-black/40 transition ease-linear duration-200 group-hover:text-head-charleston-green lg:text-xl"></LuClipboardList>
                                        <span className="mt-1">My Apply List</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardSidebar;