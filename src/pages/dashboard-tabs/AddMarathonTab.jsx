import AddMarathonForm from "../../components/AddMarathonForm";

const AddMarathonTab = () => {
    return (
        <div className="w-full min-h-[calc(100vh-70px)] bg-white p-7 xl:ml-64 xl:max-w-[calc(100%-256px)] transition-all ease-linear duration-500 dark:bg-black">
            <div className="w-full">
                <h1 className="font-roboto text-3xl font-bold text-head-charleston-green uppercase dark:text-white">Create <span className="bg-primary-yellow dark:text-black">Marathon</span> Event</h1>
            </div>
            <div className="w-full max-w-[calc(100%/256px)] min-h-[650px] mt-8 flex flex-col items-center justify-center">
                <AddMarathonForm></AddMarathonForm>
            </div>
        </div>
    );
};

export default AddMarathonTab;