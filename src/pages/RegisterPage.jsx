import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
    return (
        <>
            <div className="w-full bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <div className="w-full min-h-[calc(100vh-176px)] flex items-center justify-center">
                        <div className="w-full min-h-[600px] grid grid-cols-1 md:p-10 lg:p-10 lg:grid-cols-2">
                            <div className="w-full h-[350px] bg-register bg-cover bg-center bg-no-repeat relative md:min-h-full">
                                <div className="w-full h-full p-6 bg-black/40 absolute top-0 left-0 flex flex-col justify-center">
                                    <div className="w-full mb-5">
                                        <h3 className="font-roboto text-[32px] text-white font-bold leading-tight tracking-normal uppercase transition-all ease-linear duration-200 md:text-[38px] xl:text-[50px]">Join the Race!</h3>
                                    </div>
                                    <div className="w-full max-w-[400px]">
                                        <p className="font-roboto text-xl text-[#F4F4F5] font-normal leading-snug md:text-[22px]">Register now to start your marathon journey, track your progress, and connect with a community of runners.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full min-h-[240px] p-6 md:min-h-full">
                                <div className="w-full">
                                    <h3 className="font-roboto text-head-charleston-green text-3xl font-bold uppercase dark:text-white">Register</h3>
                                </div>
                                <div className="w-full mt-7">
                                    <RegisterForm></RegisterForm>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;