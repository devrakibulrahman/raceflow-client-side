import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Auth from "../pages/auth/Auth";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ContactPage from "../pages/ContactPage";
import MarathonPage from "../pages/MarathonPage";
import ErrorPage from "../pages/ErrorPage";

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
                path: '/marathons',
                element: <MarathonPage></MarathonPage>
            },
            {
                path: '/contact',
                element: <ContactPage></ContactPage>
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