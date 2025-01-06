import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Auth from "../pages/auth/Auth";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ContactPage from "../pages/ContactPage";
import MarathonPage from "../pages/MarathonPage";
import ErrorPage from "../pages/ErrorPage";
import AboutPage from "../pages/AboutPage";
import DetailsPage from "../pages/DetailsPage";
import RegistrationPage from "../pages/RegistrationPage";
import DashboardPage from "../pages/DashboardPage";
import HomeTab from "../pages/dashboard-tabs/HomeTab";
import AddMarathonTab from "../pages/dashboard-tabs/AddMarathonTab";
import MyMarathonListTab from "../pages/dashboard-tabs/MyMarathonListTab";
import MyApplyTab from "../pages/dashboard-tabs/MyApplyTab";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about_us',
                element: <AboutPage></AboutPage>
            },
            {
                path: '/marathons',
                element: <MarathonPage></MarathonPage>
            },
            {
                path: '/dashboard',
                element: <DashboardPage></DashboardPage>,
                children: [
                    {
                        index: true,
                        element: <HomeTab></HomeTab>
                    },
                    {
                        path: '/dashboard/add_marathon',
                        element: <AddMarathonTab></AddMarathonTab>
                    },
                    {
                        path: '/dashboard/my_marathon',
                        element: <MyMarathonListTab></MyMarathonListTab>
                    },
                    {
                        path: '/dashboard/my_apply',
                        element: <MyApplyTab></MyApplyTab>
                    }
                ],
            },
            {
                path: '/contact',
                element: <ContactPage></ContactPage>
            },
            {
                path: '/marathon_details/:id',
                element: <DetailsPage></DetailsPage>,
            },
            {
                path: '/marathon_registration/:id',
                element: <RegistrationPage></RegistrationPage>
            },
            {
                path: '/auth',
                element: <Auth></Auth>,
                children: [
                    {
                        path: '/auth/login',
                        element: <LoginPage></LoginPage>
                    },
                    {
                        path: '/auth/register',
                        element: <RegisterPage></RegisterPage>
                    }
                ],
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ],
    },
]);

export default router;