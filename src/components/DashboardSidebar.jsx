import { IoMdMenu, IoMdClose, IoMdAdd } from "react-icons/io";
import { IoList } from "react-icons/io5";
import { RiHome4Line } from "react-icons/ri";
import { LuClipboardList } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";

const DashboardSidebar = () => {

    // hooks declare here ---->
    const navigate = useNavigate();
    const location = useLocation();

    // event handler declare here ---->
    const handleGoToHome = () => {
        navigate('/');
    };

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
                <div className="w-full pl-5 py-5 mt-5">
                    <div className="w-full">
                        <nav className="w-full">
                            <ul className="w-full flex justify-center gap-y-3 flex-col">
                                <li className={`border-b ${location.pathname === '/dashboard' ? 'border-head-charleston-green' : 'border-slate-100'} transition ease-linear duration-200 group hover:border-head-charleston-green`}>
                                    <Link to='/dashboard' className={`font-roboto text-base ${location.pathname === '/dashboard' ? 'text-head-charleston-green' : 'text-black/40'} transition ease-linear duration-200 group-hover:text-head-charleston-green font-medium flex items-center justify-start gap-3 py-4`}>
                                        <RiHome4Line className="text-base transition ease-linear duration-200 group-hover:text-head-charleston-green lg:text-xl"></RiHome4Line>
                                        <span className="mt-1">Home</span>
                                    </Link>
                                </li>
                                <li className={`border-b ${location.pathname === '/dashboard/add_marathon' ? 'border-head-charleston-green' : 'border-slate-100'} transition ease-linear duration-200 group hover:border-head-charleston-green`}>
                                    <Link to='/dashboard/add_marathon' className={`font-roboto text-base ${location.pathname === '/dashboard/add_marathon' ? 'text-head-charleston-green' : 'text-black/40'} transition ease-linear duration-200 group-hover:text-head-charleston-green font-medium flex items-center justify-start gap-3 py-4`}>
                                        <IoMdAdd className="text-base transition ease-linear duration-200 group-hover:text-head-charleston-green lg:text-xl"></IoMdAdd>
                                        <span className="mt-1">Add Marathon</span>
                                    </Link>
                                </li>
                                <li className={`border-b ${location.pathname === '/dashboard/my_marathon' ? 'border-head-charleston-green' : 'border-slate-100'} transition ease-linear duration-200 group hover:border-head-charleston-green`}>
                                    <Link to='/dashboard/my_marathon' className={`font-roboto text-base ${location.pathname === '/dashboard/my_marathon' ? 'text-head-charleston-green' : 'text-black/40'} transition ease-linear duration-200 group-hover:text-head-charleston-green font-medium flex items-center justify-start gap-3 py-4`}>
                                        <IoList className="text-base transition ease-linear duration-200 group-hover:text-head-charleston-green lg:text-xl"></IoList>
                                        <span className="mt-1">My Marathon</span>
                                    </Link>
                                </li>
                                <li className={`border-b ${location.pathname === '/dashboard/my_apply' ? 'border-head-charleston-green' : 'border-slate-100'} transition ease-linear duration-200 group hover:border-head-charleston-green`}>
                                    <Link to='/dashboard/my_apply' className={`font-roboto text-base ${location.pathname === '/dashboard/my_apply' ? 'text-head-charleston-green' : 'text-black/40'} transition ease-linear duration-200 group-hover:text-head-charleston-green font-medium flex items-center justify-start gap-3 py-4`}>
                                        <LuClipboardList className="text-base transition ease-linear duration-200 group-hover:text-head-charleston-green lg:text-xl"></LuClipboardList>
                                        <span className="mt-1">My Apply</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="w-full absolute bottom-5 left-0 px-5">
                    <button onClick={handleGoToHome} className="font-roboto text-head-charleston-green font-bold text-base uppercase bg-primary-yellow py-3 px-5 w-full transition-all ease-linear duration-200 hover:bg-head-charleston-green hover:text-primary-yellow">Go To Home</button>
                </div>
            </div>
        </>
    );
};

export default DashboardSidebar;