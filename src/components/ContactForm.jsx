
const ContactForm = () => {
    return (
        <>
            <form className="w-full">
                <div className="w-full grid grid-cols-1 gap-7">
                    <div className="w-full flex flex-col items-center justify-center gap-5 md:flex-row">
                        <div className="w-full">
                            <div className="w-full mb-3">
                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase dark:text-white">First Name</label>
                            </div>
                            <div className="w-full">
                                <input type="text" placeholder="First Name" name="fname" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light dark:bg-transparent dark:text-light-gray dark:placeholder:text-dark-gray dark:border-dark-black"/>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full mb-3">
                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase dark:text-white">Last Name</label>
                            </div>
                            <div className="w-full">
                                <input type="text" placeholder="Last Name" name="lname" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light dark:bg-transparent dark:text-light-gray dark:placeholder:text-dark-gray dark:border-dark-black"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-5 md:flex-row">
                        <div className="w-full">
                            <div className="w-full mb-3">
                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase dark:text-white">Email</label>
                            </div>
                            <div className="w-full">
                                <input type="text" placeholder="example@gmail.com" name="email" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light dark:bg-transparent dark:text-light-gray dark:placeholder:text-dark-gray dark:border-dark-black"/>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full mb-3">
                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase dark:text-white">Phone</label>
                            </div>
                            <div className="w-full">
                                <input type="text" placeholder="Number" name="phone" autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light dark:bg-transparent dark:text-light-gray dark:placeholder:text-dark-gray dark:border-dark-black"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-5 md:flex-row">
                        <div className="w-full">
                            <div className="w-full mb-3">
                                <label className="font-roboto text-base text-head-charleston-green font-bold leading-snug uppercase dark:text-white">Message</label>
                            </div>
                            <div className="w-full">
                                <textarea type="text" placeholder="Message" name="message" rows={5} cols={10} autoComplete="off" className="w-full p-4 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 transition ease-linear duration-200 hover:border-head-charleston-green focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light dark:bg-transparent dark:text-light-gray dark:placeholder:text-dark-gray dark:border-dark-black"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <button className="font-roboto text-sm text-black uppercase font-medium tracking-widest border border-head-charleston-green bg-head-charleston-green py-4 px-6 transition ease-linear duration-200 hover:bg-white hover:text-primary-yellow dark:bg-primary-yellow dark:hover:bg-dark-black dark:border-dark-black">Submit message</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;