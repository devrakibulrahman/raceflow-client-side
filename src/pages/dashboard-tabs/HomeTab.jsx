
const HomeTab = () => {
    return (
        <div className="w-full max-w-[calc(100%-256px)] h-[calc(100vh-70px)] ml-64 p-10">
            <div className="w-full min-h-[100px] flex items-center justify-between">
                <div className="w-auto flex items-center justify-center gap-5">
                    <div className="w-[60px] h-[60px] bg-black rounded-full overflow-hidden p-1">
                        <div className="w-full h-full bg-white rounded-full">

                        </div>
                    </div>
                    <div className="w-auto space-y-1">
                        <h1 className="font-roboto text-xl font-bold text-head-charleston-green">Rakibul Rahman</h1>
                        <p className="font-roboto text-base font-medium text-para-gray">devrakibulrahman@gmail.com</p>
                    </div>
                </div>
                <div className="w-auto">
                    <button className="font-roboto text-base font-medium uppercase text-red-500">Sign Out</button>
                </div>
            </div>
            <div className="w-full min-h-[600px] mt-4 flex items-center justify-center">
                <div className="w-full text-center">
                <h1 className="font-roboto font-bold text-[32px] text-head-charleston-green transition-all ease-linear duration-200 md:text-[38px] lg:text-[50px]">Coming <span className="bg-primary-yellow">Soon!</span></h1>
                </div>
            </div>
        </div>
    );
};

export default HomeTab;