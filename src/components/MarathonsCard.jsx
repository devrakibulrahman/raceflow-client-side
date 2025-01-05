import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const MarathonsCard = () => {
    return (
        <>
            <div className="w-full min-h-[450px] bg-slate-50">
                <div className="w-full h-[225px] bg-blue-300">

                </div>
                <div className="w-full min-h-[225px] bg-pattern bg-cover bg-center bg-no-repeat p-5">
                    <div className="w-full">
                        <h1 className="font-roboto text-head-charleston-green text-lg font-black uppercase mb-2 xl:text-xl">Marathon training program</h1>
                        <p className="font-roboto text-para-gray text-base font-normal leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, optio.</p>
                    </div>
                    <div className="w-full flex items-center gap-3 mt-5">
                        <div className="w-auto">
                            <FaLocationDot className="text-head-charleston-green text-xl"></FaLocationDot>
                        </div>
                        <div className="w-auto">
                            <div className="w-auto">
                                <p className="font-roboto text-para-gray text-base font-semibold">Start Line: <span className="font-normal">Staten Island</span></p>
                            </div>
                            <div className="w-auto">
                                <p className="font-roboto text-para-gray text-base font-semibold">Finish Line: <span className="font-normal">Central Park, Manhattan</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-3 mt-5">
                        <div className="w-auto">
                            <FaCalendarAlt className="text-head-charleston-green text-xl"></FaCalendarAlt>
                        </div>
                        <div className="w-auto">
                            <div className="w-auto">
                                <p className="font-roboto text-para-gray text-base font-semibold">Start Date: <span className="font-normal">March 5, 2025</span></p>
                            </div>
                            <div className="w-auto">
                                <p className="font-roboto text-para-gray text-base font-semibold">End Date: <span className="font-normal">April 5, 2025</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-5 md:flex md:items-center md:justify-end">
                        <button className="font-roboto text-base text-primary-yellow font-normal border border-head-charleston-green bg-head-charleston-green px-5 py-2 w-full transition-all ease-linear duration-200 hover:text-head-charleston-green md:w-full xl:max-w-[130px]">See Details</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MarathonsCard;