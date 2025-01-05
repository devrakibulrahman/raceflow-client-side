import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const MarathonPage = () => {
    return (
        <>
            <div className="w-full min-h-[500px] bg-marathon bg-center bg-cover bg-no-repeat flex items-center justify-center">
                <div className="w-full">
                    <div className="container mx-auto px-4">
                        <div className="w-full text-center">
                            <h1 className="font-roboto text-[40px] font-bold text-white uppercase transition-all ease-linear duration-200 md:text-[50px] xl:text-[70px]">Marathons</h1>
                            <div className="w-full flex items-center justify-center gap-2 mt-4">
                                <div className="w-auto"><Link to='/' className="font-roboto text-sm text-white/80 font-normal transition ease-linear duration-200 hover:text-white">Home</Link></div>
                                <div className="w-auto"><MdKeyboardArrowRight className="text-white"></MdKeyboardArrowRight></div>
                                <div className="w-auto"><Link className="font-roboto text-sm text-white font-normal">Marathon</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MarathonPage;