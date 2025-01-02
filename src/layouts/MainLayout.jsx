import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <>
            <div className="w-full h-screen flex flex-col items-center justify-center">
                <div className="w-full">
                    <Header></Header>
                </div>
                <div className="w-full">
                    <Outlet></Outlet>
                </div>
                <div className="w-full mt-auto">
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default MainLayout;