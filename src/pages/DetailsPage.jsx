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
                <div className="w-full max-w-[1120px] mx-auto px-4">
                    <div className="w-full min-h-[500px] grid grid-cols-1 gap-6 lg:grid-cols-3 ">
                        <div className="w-full min-h-[400px] bg-blue-500 lg:col-span-2">
                            
                        </div>
                        <div className="w-full min-h-[400px] bg-blue-500">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsPage;