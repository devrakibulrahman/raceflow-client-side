
const SubFooter = () => {
    return (
        <>
            <div className="w-full">
                <div className="container mx-auto px-4">
                    <div className='w-full py-8 flex flex-col items-start gap-2 md:gap-0 md:items-center md:justify-between md:flex-row'>
                        <div className='w-auto'>
                            <p className='font-roboto text-sm text-head-charleston-green font-normal uppercase'>&copy; 2025 - {new Date().getFullYear()} all right reserved. <span className='text-head-charleston-green'>raceflow</span></p>
                        </div>
                        <div className='w-auto'>
                            <p className='font-roboto text-sm text-head-charleston-green font-normal uppercase'>Terms & Condition</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubFooter;