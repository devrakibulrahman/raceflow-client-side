import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
    return (
        <>
            <div className="w-full h-screen flex flex-col items-center justify-center">
                <Header></Header>
                <div className="w-full h-screen">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default MainLayout;