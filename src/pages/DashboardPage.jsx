import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";

const DashboardPage = () => {
    return (
        <>
            <div className="w-full min-h-screen flex">
                <DashboardSidebar></DashboardSidebar>
                <DashboardNavbar></DashboardNavbar>
            </div>
        </>
    );
};

export default DashboardPage;