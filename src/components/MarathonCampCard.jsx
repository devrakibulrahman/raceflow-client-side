import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { format } from 'date-fns';
import PropTypes from "prop-types";

const MarathonsCard = ({marathon}) => {

    return (
        <>
            <div className="w-full h-full bg-slate-50 bg-pattern bg-cover bg-center bg-no-repeat flex flex-col items-center gap-2 dark:bg-head-charleston-green dark:bg-dark-pattern">
                <div className="w-full h-[225px]">
                    <img src={marathon?.marathonImage} alt="marathon image" className="w-full h-full object-cover" />
                </div>
                <div className="w-full min-h-[225px] flex flex-col items-center p-5">
                    <div className="w-full min-h-[30px]">
                        <div className="w-full">
                            <h1 className="font-roboto text-head-charleston-green text-lg font-black uppercase xl:text-xl dark:text-white">{marathon?.marathonTitle}</h1>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-3 mt-3">
                        <div className="w-auto">
                            <FaLocationDot className="text-head-charleston-green text-xl dark:text-primary-yellow"></FaLocationDot>
                        </div>
                        <div className="w-auto">
                            <div className="w-auto">
                                <p className="font-roboto text-para-gray text-base font-semibold dark:text-light-gray">Start Line: <span className="font-normal dark:text-dark-gray">{marathon?.location}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-3 mt-3">
                        <div className="w-auto">
                            <FaCalendarAlt className="text-head-charleston-green text-xl mb-1 dark:text-primary-yellow"></FaCalendarAlt>
                        </div>
                        <div className="w-auto">
                            <div className="w-auto">
                                <p className="font-roboto text-para-gray text-base font-semibold dark:text-light-gray">Reg Start Date: <span className="font-normal dark:text-dark-gray">{
                                    marathon?.registrationEndDate
                                    &&
                                    format(new Date(marathon?.registrationStartDate), 'PPP')
                                }</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-3 mt-3">
                        <div className="w-auto">
                            <FaClock className="text-head-charleston-green text-xl mb-1 dark:text-primary-yellow"></FaClock>
                        </div>
                        <div className="w-auto">
                            <div className="w-auto">
                                <p className="font-roboto text-para-gray text-base font-semibold dark:text-light-gray">Reg End Date: <span className="font-normal dark:text-dark-gray">{
                                    marathon?.registrationEndDate
                                    &&
                                    format(new Date(marathon?.registrationEndDate), 'PPP')
                                }</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-8 flex items-center justify-end">
                        <Link to={`/marathon_details/${marathon?._id}`} className="flex items-center justify-center gap-2 font-roboto text-base text-head-charleston-green font-medium transition-all ease-linear duration-150 hover:underline group dark:text-primary-yellow">See Details</Link>
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