import { IoMdMenu } from "react-icons/io";
import { MdNightlightRound } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const DashboardNavbar = () => {
    return (
        <>
            <div className="w-full min-h-[70px] border-b border-slate-200 ml-64 px-5 flex items-center justify-between">
                <div className="w-auto flex items-center justify-center">
                    <button className="w-auto lg:hidden">
                        <IoMdMenu className="text-3xl text-head-charleston-green"></IoMdMenu>
                    </button>
                </div>
                <div className="w-auto flex items-center justify-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center cursor-pointer">
                        <MdNightlightRound className="text-slate-300 -rotate-45 text-xl"></MdNightlightRound>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-slate-200 overflow-hidden flex items-center justify-center">
                        <FaUser className="text-slate-300 text-xl"></FaUser>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardNavbar;