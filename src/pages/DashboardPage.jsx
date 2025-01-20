import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";
import { useState } from "react";

const DashboardPage = () => {

    const [active, setActive] = useState(false);

    const handleActive = () => {
        setActive(!active);
    };

    return (
        <>
            <div className="w-full min-h-screen overflow-x-hidden">
                <div className="w-full flex">
                    <DashboardSidebar handleActive={handleActive} active={active}></DashboardSidebar>
                    <DashboardNavbar handleActive={handleActive} active={active}></DashboardNavbar>
                </div>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default DashboardPage;