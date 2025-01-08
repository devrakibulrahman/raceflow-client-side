
const UpdateMyApplyListForm = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleFormSubmit} className="w-full">
            <div className="w-full grid grid-cols-1 gap-6">
                <div className="w-full flex flex-col items-center justify-center gap-4 md:flex-row">
                    <div className="w-full">
                        <div className="w-full mb-3 text-left">
                            <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug">First Name</label>
                        </div>
                        <div className="w-full">
                            <input type="text" placeholder="first name" name="fname" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"/>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full mb-3 text-left">
                            <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug">Last Name</label>
                        </div>
                        <div className="w-full">
                            <input type="text" placeholder="last name" name="lname" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"/>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-4 md:flex-row">
                    <div className="w-full">
                        <div className="w-full mb-3 text-left">
                            <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug">Email</label>
                        </div>
                        <div className="w-full">
                            <input type="text" placeholder="email" name="email" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"/>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full mb-3 text-left">
                            <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug">Phone</label>
                        </div>
                        <div className="w-full">
                            <input type="number" placeholder="number" name="phone" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"/>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-4 md:flex-row">
                    <div className="w-full">
                        <div className="w-full mb-3 text-left">
                            <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug">Marathon Title</label>
                        </div>
                        <div className="w-full">
                            <input type="text" placeholder="marathon title" disabled name="title" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"/>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full mb-3 text-left">
                            <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug">Marathon Start Date</label>
                        </div>
                        <div className="w-full">
                            <input type="text" placeholder="marathon start date" disabled name="date" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light"/>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default UpdateMyApplyListForm;