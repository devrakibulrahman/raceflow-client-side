import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const DetailsPage = () => {
    return (
        <>
            <div className="w-full min-h-[500px] bg-details bg-center bg-cover bg-no-repeat flex items-center justify-center">
                <div className="w-full">
                    <div className="container mx-auto px-4">
                        <div className="w-full text-center">
                            <h1 className="font-roboto text-[40px] font-bold text-white uppercase transition-all ease-linear duration-200 md:text-[50px] xl:text-[70px]">Marathon Details</h1>
                            <div className="w-full flex items-center justify-center gap-2 mt-4">
                                <div className="w-auto"><Link to='/' className="font-roboto text-sm text-white/80 font-normal transition ease-linear duration-200 hover:text-white">Home</Link></div>
                                <div className="w-auto"><MdKeyboardArrowRight className="text-white"></MdKeyboardArrowRight></div>
                                <div className="w-auto"><Link className="font-roboto text-sm text-white font-normal">Details</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full min-h-[500px] py-16 lg:py-24">
                <div className="w-full max-w-[1150px] mx-auto px-4">
                    <div className="w-full min-h-[500px] grid grid-cols-1 gap-6 lg:grid-cols-3 ">
                        <div className="w-full min-h-[400px] bg-blue-500 lg:col-span-2">

                        </div>
                        <div className="w-full min-h-[400px] bg-blue-500">

                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full min-h-[500px] py-10">
                <div className="w-full">
                    <div className="container mx-auto px-4">
                        <div className="w-full">
                            <div className="w-full pb-6 border-b border-slate-200">
                                <h1 className="font-roboto text-[32px] font-bold text-head-charleston-green uppercase transition-all ease-linear duration-200 md:text-[38px] xl:text-[50px]">Marathon <span className="bg-primary-yellow">Tip&apos;s</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-10">
                    <div className="w-full">
                        <div className="container mx-auto px-4">
                            <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                                <div className="w-full min-h-[280px] bg-tips1 bg-cover bg-top bg-no-repeat p-5 flex items-end">
                                    <div className="w-full">
                                        <h3 className="font-roboto text-base text-primary-yellow font-bold uppercase tracking-widest mb-2">Fuel Properly</h3>
                                        <p className="font-roboto text-base text-white font-normal">Eat balanced meals and maintain proper hydration to stay energized.</p>
                                    </div>
                                </div>
                                <div className="w-full min-h-[280px] bg-tips2 bg-cover bg-top bg-no-repeat p-5 flex items-end">
                                    <div className="w-full">
                                        <h3 className="font-roboto text-base text-primary-yellow font-bold uppercase tracking-widest mb-2">Train Consistently</h3>
                                        <p className="font-roboto text-base text-white font-normal">Build your endurance gradually with a consistent training plan.</p>
                                    </div>
                                </div>
                                <div className="w-full min-h-[280px] bg-tips3 bg-cover bg-top bg-no-repeat p-5 flex items-end">
                                    <div className="w-full">
                                        <h3 className="font-roboto text-base text-primary-yellow font-bold uppercase tracking-widest mb-2">Start Slow</h3>
                                        <p className="font-roboto text-base text-white font-normal">Avoid starting too fast, as it can lead to early fatigue.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsPage;