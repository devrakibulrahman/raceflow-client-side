import { IoMdClose, IoMdAdd } from "react-icons/io";
import { IoList } from "react-icons/io5";
// import { RiHome4Line } from "react-icons/ri";
import { LuClipboardList } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const DashboardSidebar = ({handleActive, active}) => {

    // hooks declare here ---->
    const navigate = useNavigate();
    const location = useLocation();

    // event handler declare here ---->
    const handleGoToHome = () => {
        navigate('/');
    };

    return (
        <>
            <div className={`w-64 h-full bg-white border-r border-slate-200 fixed top-0 transition-all z-30 ${active ? 'left-0 ease-linear duration-500' : '-left-[100%] ease-linear duration-500'} xl:left-0 dark:border-slate-100/50 dark:bg-dark-black`}>
                <div className="w-full min-h-[70px] px-5 flex items-center justify-center">
                    <div className="w-full">
                        <h1 className="font-roboto text-2xl font-bold uppercase text-head-charleston-green dark:text-white">Dashboard</h1>
                    </div>
                    <div className="w-auto">
                        <button onClick={handleActive} className="w-auto xl:hidden mt-[5px]">
                            <IoMdClose  className="text-3xl text-head-charleston-green dark:text-white"></IoMdClose >
                        </button>
                    </div>
                </div>
                <div className="w-full pl-5 py-5 mt-5">
                    <div className="w-full">
                        <nav className="w-full">
                            <ul className="w-full flex justify-center gap-y-3 flex-col">
                                {/* <li className={`border-b ${location.pathname === '/dashboard' ? 'border-head-charleston-green' : 'border-slate-100'} transition ease-linear duration-200 group hover:border-head-charleston-green`}>
                                    <Link to='/dashboard' className={`font-roboto text-base ${location.pathname === '/dashboard' ? 'text-head-charleston-green' : 'text-black/40'} transition ease-linear duration-200 group-hover:text-head-charleston-green font-medium flex items-center justify-start gap-3 py-4`}>
                                        <RiHome4Line className="text-base transition ease-linear duration-200 group-hover:text-head-charleston-green lg:text-xl"></RiHome4Line>
                                        <span className="mt-1">Home</span>
                                    </Link>
                                </li> */}
                                <li className={`border-b ${location.pathname === '/dashboard' ? 'border-head-charleston-green dark:border-primary-yellow' : 'border-slate-100 dark:border-slate-100/50'} transition ease-linear duration-200 group hover:border-head-charleston-green dark:hover:border-primary-yellow`}>
                                    <Link to='/dashboard' className={`font-roboto text-base ${location.pathname === '/dashboard' ? 'text-head-charleston-green  dark:text-primary-yellow' : 'text-black/40 dark:text-dark-gray'} transition ease-linear duration-200 group-hover:text-head-charleston-green font-medium flex items-center justify-start gap-3 py-4 dark:group-hover:text-primary-yellow`}>
                                        <IoMdAdd className="text-xl group-hover:text-head-charleston-green dark:group-hover:text-primary-yellow"></IoMdAdd>
                                        <span className="mt-1">Add Marathon</span>
                                    </Link>
                                </li>
                                <li className={`border-b ${location.pathname === '/dashboard/my_marathon' ? 'border-head-charleston-green dark:border-primary-yellow' : 'border-slate-100 dark:border-slate-100/50'} transition ease-linear duration-200 group hover:border-head-charleston-green dark:hover:border-primary-yellow`}>
                                    <Link to='/dashboard/my_marathon' className={`font-roboto text-base ${location.pathname === '/dashboard/my_marathon' ? 'text-head-charleston-green dark:text-primary-yellow' : 'text-black/40 dark:text-dark-gray'} transition ease-linear duration-200 group-hover:text-head-charleston-green font-medium flex items-center justify-start gap-3 py-4 dark:group-hover:text-primary-yellow`}>
                                        <IoList className="text-xl group-hover:text-head-charleston-green dark:group-hover:text-primary-yellow"></IoList>
                                        <span className="mt-1">My Marathon</span>
                                    </Link>
                                </li>
                                <li className={`border-b ${location.pathname === '/dashboard/my_apply' ? 'border-head-charleston-green dark:border-primary-yellow' : 'border-slate-100 dark:text-dark-gray dark:border-slate-100/50'} transition ease-linear duration-200 group hover:border-head-charleston-green dark:hover:border-primary-yellow`}>
                                    <Link to='/dashboard/my_apply' className={`font-roboto text-base ${location.pathname === '/dashboard/my_apply' ? 'text-head-charleston-green dark:text-primary-yellow' : 'text-black/40 dark:text-dark-gray'} transition ease-linear duration-200 group-hover:text-head-charleston-green font-medium flex items-center justify-start gap-3 py-4 dark:group-hover:text-primary-yellow`}>
                                        <LuClipboardList className="text-xl group-hover:text-head-charleston-green dark:group-hover:text-primary-yellow"></LuClipboardList>
                                        <span className="mt-1">My Apply</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="w-full absolute bottom-5 left-0 px-5">
                    <button onClick={handleGoToHome} className="font-roboto text-head-charleston-green font-bold text-base uppercase bg-primary-yellow py-3 px-5 w-full transition-all ease-linear duration-200 hover:bg-head-charleston-green hover:text-primary-yellow dark:hover:bg-black">Go To Home</button>
                </div>
            </div>
        </>
    );
};

DashboardSidebar.propTypes = {
    handleActive: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
};

export default DashboardSidebar;