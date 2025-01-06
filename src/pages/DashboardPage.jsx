import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";

const DashboardPage = () => {
    return (
        <>
            <div className="w-full">
                <DashboardNavbar></DashboardNavbar>
                <DashboardSidebar></DashboardSidebar>
            </div>
        </>
    );
};

export default DashboardPage;