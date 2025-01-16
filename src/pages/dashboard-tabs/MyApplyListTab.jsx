import MyApplyListTable from "../../components/MyApplyListTable";

const MyApplyListTab = () => {
    return (
        <div className="w-full min-h-[calc(100vh-70px)] p-7 xl:max-w-[calc(100%-256px)] xl:ml-64">
            <div className="w-full">
                <h1 className="font-roboto text-3xl font-bold text-head-charleston-green uppercase">My <span className="bg-primary-yellow">Apply</span> List</h1>
            </div>
            <div className="w-full min-h-[650px] mt-8">
                <MyApplyListTable></MyApplyListTable>
            </div>
        </div>
    );
};

export default MyApplyListTab;