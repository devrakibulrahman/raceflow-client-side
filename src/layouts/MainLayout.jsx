import { Outlet, useLocation } from "react-router-dom";
import '../styles/custom.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubFooter from "../components/SubFooter";

const MainLayout = () => {

    // hooks declare here ---->
    const location = useLocation();

    return (
        <>
            <div className="w-full h-screen flex flex-col items-center">
                <div className="w-full">
                    <Header></Header>
                </div>
                <div className="w-full">
                    <Outlet></Outlet>
                </div>
                <div className="w-full mt-auto">
                    {
                        location?.pathname === '/auth/login' || location?.pathname === '/auth/register'
                        ?
                            <SubFooter></SubFooter>
                        :
                            <Footer></Footer>
                    }
                </div>
            </div>
        </>
    );
};

export default MainLayout;