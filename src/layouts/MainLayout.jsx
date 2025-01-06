import { Outlet, useLocation, useParams } from "react-router-dom";
import '../styles/custom.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubFooter from "../components/SubFooter";

const MainLayout = () => {

    // hooks declare here ---->
    const location = useLocation();
    const params = useParams();

    return (
        <>
            <div className="w-full h-screen flex flex-col items-center">
                {
                    location.pathname === '/' || location.pathname === '/about_us' || 
                    location.pathname === '/contact' || location.pathname === '/marathons' ||
                    location.pathname === '/auth/login' || location.pathname === '/auth/register' ||
                    location.pathname === `/marathon_details/${params.id}` || 
                    location.pathname === `/marathon_registration/${params.id}`
                    ?
                        <div className="w-full">
                            <Header></Header>
                        </div>
                    :
                        ''
                }
                <div className="w-full">
                    <Outlet></Outlet>
                </div>
                <div className="w-full mt-auto">
                    {
                        location.pathname === '/' || location.pathname === '/about_us' || 
                        location.pathname === '/marathons' || location.pathname === '/auth/login' || 
                        location.pathname === '/auth/register' || location.pathname === '/contact' ||
                        location.pathname === `/marathon_details/${params.id}` || 
                        location.pathname === `/marathon_registration/${params.id}`
                        ?
                            (
                                location?.pathname === '/auth/login' || location?.pathname === '/auth/register'
                                ?
                                    <SubFooter></SubFooter>
                                :
                                    <Footer></Footer>
                            )
                        :
                            ''
                    }
                </div>
            </div>
        </>
    );
};

export default MainLayout;