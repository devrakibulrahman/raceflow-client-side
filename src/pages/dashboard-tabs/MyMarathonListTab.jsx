import MyMarathonListTable from "../../components/MyMarathonListTable";

const MyMarathonListTab = () => {
    return (
        <div className="w-full max-w-[calc(100%-256px)] min-h-[calc(100vh-70px)] ml-64 p-7">
            <div className="w-full">
                <h1 className="font-roboto text-3xl font-bold text-head-charleston-green uppercase">My <span className="bg-primary-yellow">Marathon</span> List</h1>
            </div>
            <div className="w-full max-w-[calc(100%/256px)] min-h-[650px] mt-8 flex flex-col items-center justify-center">
                <MyMarathonListTable></MyMarathonListTable>
            </div>
        </div>
    );
};

export default MyMarathonListTab;