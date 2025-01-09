import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAppRegistration } from "react-icons/md";
import { format } from 'date-fns';
import img from "../assets/img/card.jpg";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const MarathonsCard = ({marathon}) => {
    
    // hooks declare here ------------------------>
    const navigate = useNavigate();

    // event handler declare here ---------------->
    const handleSeeDetails = (id) => {
        navigate(`/marathon_details/${id}`);
    };

    return (
        <>
            <div className="w-full min-h-[450px] bg-slate-50">
                <div className="w-full h-[225px] bg-blue-300">
                    <img src={img} alt="marathon image" className="w-full h-full object-cover" />
                </div>
                <div className="w-full min-h-[225px] bg-pattern bg-cover bg-center bg-no-repeat p-5">
                    <div className="w-full">
                        <h1 className="font-roboto text-head-charleston-green text-lg font-black uppercase mb-2 xl:text-xl">{marathon?.marathonTitle}</h1>
                        <p className="font-roboto text-para-gray text-base font-normal leading-relaxed">{`${marathon?.description.substring(1, 40)}...`}</p>
                    </div>
                    <div className="w-full flex items-center gap-3 mt-5">
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
                                <p className="font-roboto text-para-gray text-base font-semibold">Reg End Date: <span className="font-normal">{format(new Date(marathon?.registrationEndDate), 'PPP')}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-2 mt-3">
                        <div className="w-auto">
                            <MdAppRegistration className="text-head-charleston-green text-[26px] mb-1"></MdAppRegistration>
                        </div>
                        <div className="w-auto">
                            <div className="w-auto">
                                <p className="font-roboto text-para-gray text-base font-semibold">Register Count: <span className="font-normal">{marathon?.regCount}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-5 md:flex md:items-center md:justify-end">
                        <button onClick={() => handleSeeDetails(marathon?._id)} className="font-roboto text-base text-primary-yellow font-normal border border-head-charleston-green bg-head-charleston-green px-5 py-2 w-full transition-all ease-linear duration-200 hover:text-white md:w-full xl:max-w-[130px]">See Details</button>
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