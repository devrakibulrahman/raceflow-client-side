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
import AddMarathonTab from "../pages/dashboard-tabs/AddMarathonTab";
import MyMarathonListTab from "../pages/dashboard-tabs/MyMarathonListTab";
import MyApplyListTab from "../pages/dashboard-tabs/MyApplyListTab";
import PrivatePage from "../pages/private/PrivatePage";

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
                element: <PrivatePage><MarathonPage></MarathonPage></PrivatePage>
            },
            {
                path: '/dashboard',
                element: <PrivatePage><DashboardPage></DashboardPage></PrivatePage>,
                children: [
                    {
                        path: '/dashboard',
                        element: <PrivatePage><AddMarathonTab></AddMarathonTab></PrivatePage>
                    },
                    {
                        path: '/dashboard/my_marathon',
                        element: <PrivatePage><MyMarathonListTab></MyMarathonListTab></PrivatePage>
                    },
                    {
                        path: '/dashboard/my_apply',
                        element: <PrivatePage><MyApplyListTab></MyApplyListTab></PrivatePage>
                    }
                ],
            },
            {
                path: '/contact',
                element: <ContactPage></ContactPage>
            },
            {
                path: '/marathon_details/:id',
                element: <PrivatePage><DetailsPage></DetailsPage></PrivatePage>,
            },
            {
                path: '/marathon_registration/:id',
                element: <PrivatePage><RegistrationPage></RegistrationPage></PrivatePage>,
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