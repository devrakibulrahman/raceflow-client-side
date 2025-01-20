import { IoIosSearch } from "react-icons/io";
import MyApplyListTable from "../../components/MyApplyListTable";
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchProvider";

const MyApplyListTab = () => {

    //? context declare here ----------------------->
    const {setSearch} = useContext(SearchContext); 

    return (
        <div className="w-full min-h-[calc(100vh-70px)] bg-white p-7 xl:max-w-[calc(100%-256px)] xl:ml-64 dark:bg-black">
            <div className="w-full flex flex-col gap-y-5 md:flex-row md:items-center justify-between">
                <h1 className="font-roboto text-3xl font-bold text-head-charleston-green uppercase dark:text-white">My <span className="bg-primary-yellow dark:text-black">Apply</span> List</h1>
                <div className="w-full h-9 md:max-w-[300px] relative">
                    <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="search" autoComplete="off" className="w-full h-full py-[5px] pl-3 pr-10 font-roboto font-normal text-base text-head-charleston-green bg-white border border-slate-200 rounded-md focus:outline-none placeholder:text-[#A1A1AA] placeholder:font-light dark:bg-transparent dark:text-light-gray dark:placeholder:text-dark-gray dark:border-dark-black"/>
                    <button className="w-9 h-9 bg-white border border-slate-200 rounded-tr-md rounded-br-md absolute top-0 right-0 flex items-center justify-center dark:bg-transparent dark:border-dark-black">
                        <IoIosSearch className="text-slate-500 text-lg dark:text-dark-gray"></IoIosSearch>
                    </button>
                </div>
            </div>
            <div className="w-full min-h-[650px] mt-8">
                <MyApplyListTable></MyApplyListTable>
            </div>
        </div>
    );
};

export default MyApplyListTab;