import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../../contexts/AuthProvider';
import MyMarathonListTable from "../../components/MyMarathonListTable";
import axios from "axios";

const MyMarathonListTab = () => {

    // state declare here ----------------->
    const [marathonUserData, setMarathonUserData] = useState([]);

    // hooks declare here ----------------->
    const {user} = useContext(AuthContext);

    // useEffect declare here ------------->
    useEffect(() => {
        fetchMarathonData();
    }, []);

    // specific user marathon fetch declare here -------------->
    const fetchMarathonData = async () => {
        try{
            const {data} = await axios.get(`${import.meta.env.VITE_HOST}/marathon_user/${user?.email}`);
            setMarathonUserData(data);
        }catch(err) {
            console.log(err);
        };
    };

    return (
        <div className="w-full max-w-[calc(100%-256px)] min-h-[calc(100vh-70px)] ml-64 p-7">
            <div className="w-full">
                <h1 className="font-roboto text-3xl font-bold text-head-charleston-green uppercase">My <span className="bg-primary-yellow">Marathon</span> List</h1>
            </div>
            <div className="w-full max-w-[calc(100%/256px)] min-h-[650px] mt-8 flex flex-col items-center justify-center">
                <MyMarathonListTable marathon={marathonUserData}></MyMarathonListTable>
            </div>
        </div>
    );
};

export default MyMarathonListTab;