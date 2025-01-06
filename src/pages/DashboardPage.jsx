import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";

const DashboardPage = () => {
    return (
        <>
            <div className="w-full min-h-screen">
                <div className="w-full flex">
                    <DashboardSidebar></DashboardSidebar>
                    <DashboardNavbar></DashboardNavbar>
                </div>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default DashboardPage;