import { FaCalendarAlt, FaClock } from "react-icons/fa";

const MarathonEventCard = () => {
    return (
        <>
            <div className="w-full min-h-[325px] bg-[url('/img/card.jpg')] bg-cover bg-center bg-no-repeat relative">
                <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-black/80 p-5 flex items-end dark:to-dark-black">
                    <div className="w-full">
                        <div className="w-full">
                            <h1 className="font-roboto text-white text-lg font-black uppercase mb-2 xl:text-xl">Marathon training program</h1>
                            <p className="font-roboto text-white text-base font-normal leading-relaxed dark:text-light-gray">Lorem, ipsum dolor sit amet consectetur...</p>
                        </div>
                        <div className="w-full flex items-center gap-3 mt-3">
                            <div className="w-auto">
                                <FaCalendarAlt className="text-white text-xl mb-1 dark:text-primary-yellow"></FaCalendarAlt>
                            </div>
                            <div className="w-auto">
                                <div className="w-auto">
                                    <p className="font-roboto text-white text-base font-semibold dark:text-dark-gray">Reg Date: <span className="font-normal dark:text-light-gray">April 5, 2025</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex items-center gap-3 mt-3">
                            <div className="w-auto">
                                <FaClock className="text-white text-xl mb-1 dark:text-primary-yellow"></FaClock>
                            </div>
                            <div className="w-auto">
                                <div className="w-auto">
                                    <p className="font-roboto text-white text-base font-semibold dark:text-dark-gray">Started At: <span className="font-normal dark:text-light-gray">6:00 AM - 7:00 AM</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-5 md:flex md:items-center md:justify-end">
                            <button className="font-roboto text-base text-primary-yellow font-medium tracking-wider uppercase transition-all ease-linear duration-200 hover:underline">Explore More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MarathonEventCard;