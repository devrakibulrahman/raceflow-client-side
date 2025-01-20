import { IoMdMenu } from "react-icons/io";
import { MdNightlightRound } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import PropTypes from "prop-types";

const DashboardNavbar = ({handleActive, active}) => {
    return (
        <>
            <div className={`w-full min-h-[70px] bg-white border-b border-slate-200 ${active ? 'xl:ml-64 ease-linear duration-500' : 'ml-0 ease-linear duration-500'} px-5 flex items-center justify-between xl:ml-64 dark:border-slate-100/50 dark:bg-black`}>
                <div className="w-auto flex items-center justify-center">
                    <button onClick={handleActive} className="w-auto xl:hidden">
                        <IoMdMenu className="text-3xl text-head-charleston-green dark:text-white"></IoMdMenu>
                    </button>
                </div>
                <div className="w-auto flex items-center justify-center gap-4 xl:w-full xl:justify-between">
                    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center cursor-pointer dark:border-primary-yellow">
                        <MdNightlightRound className="text-slate-300 -rotate-45 text-xl dark:text-primary-yellow"></MdNightlightRound>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-slate-200 overflow-hidden flex items-center justify-center dark:border-primary-yellow">
                        <FaUser className="text-slate-300 text-xl dark:text-primary-yellow"></FaUser>
                    </div>
                </div>
            </div>
        </>
    );
};

DashboardNavbar.propTypes = {
    handleActive: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
};

export default DashboardNavbar;