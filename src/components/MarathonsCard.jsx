import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAppRegistration } from "react-icons/md";
import { Link } from "react-router-dom";
import { format } from 'date-fns';
import PropTypes from "prop-types";

const MarathonsCard = ({marathon}) => {

    return (
        <>
            <div className="w-full h-full bg-slate-50 bg-pattern bg-cover bg-center bg-no-repeat flex flex-col items-center gap-2">
                <div className="w-full h-[225px] bg-blue-400">
                    <img src={marathon?.marathonImage} alt="marathon image" className="w-full h-full object-cover" />
                </div>
                <div className="w-full min-h-[225px] flex flex-col items-center p-5">
                    <div className="w-full min-h-[80px]">
                        <div className="w-full">
                            <h1 className="font-roboto text-head-charleston-green text-lg font-black uppercase mb-2 xl:text-xl">{marathon?.marathonTitle}</h1>
                            <p className="font-roboto text-para-gray text-base font-normal leading-relaxed">{marathon?.description?.substring(0, 40)}...</p>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-3 mt-3">
                        <div className="w-auto">
                            <FaLocationDot className="text-head-charleston-green text-xl"></FaLocationDot>
                        </div>
                        <div className="w-auto">
                            <div className="w-auto">
                                <p className="font-roboto text-para-gray text-base font-semibold">Start Line: <span className="font-normal">{marathon?.location}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-3 mt-3">
                        <div className="w-auto">
                            <FaCalendarAlt className="text-head-charleston-green text-xl mb-1"></FaCalendarAlt>
                        </div>
                        <div className="w-auto">
                            <div className="w-auto">
                                <p className="font-roboto text-para-gray text-base font-semibold">Reg End Date: <span className="font-normal">{
                                    marathon?.registrationEndDate
                                    &&
                                    format(new Date(marathon?.registrationEndDate), 'PPP')
                                }</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-3 mt-3 mr-1">
                        <div className="w-auto">
                            <MdAppRegistration className="text-head-charleston-green text-[26px] mb-1"></MdAppRegistration>
                        </div>
                        <div className="w-auto">
                            <div className="w-auto">
                                <p className="font-roboto text-para-gray text-base font-semibold">Register Count: <span className="font-normal">00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-3 flex items-center justify-end">
                        <Link to={`/marathon_details/${marathon?._id}`} className="flex items-center justify-center gap-2 font-roboto text-base text-head-charleston-green font-medium transition-all ease-linear duration-150 hover:underline group">See Details</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

MarathonsCard.propTypes = {
    marathon: PropTypes.object.isRequired,
};

export default MarathonsCard;