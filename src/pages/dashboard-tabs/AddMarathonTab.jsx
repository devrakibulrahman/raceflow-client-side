import AddMarathonForm from "../../components/AddMarathonForm";

const AddMarathonTab = () => {
    return (
        <div className="w-full max-w-[calc(100%-256px)] h-[calc(100vh-70px)] ml-64 p-10">
            <div className="w-full">
                <h1 className="font-roboto text-3xl font-bold text-head-charleston-green uppercase">Create <span className="bg-primary-yellow">Marathon</span> Event</h1>
            </div>
            <div className="w-full max-w-[calc(100%/256px)] min-h-[650px] mt-10 flex flex-col items-center justify-center">
                <AddMarathonForm></AddMarathonForm>
            </div>
        </div>
    );
};

export default AddMarathonTab;