import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Auth from "../pages/auth/Auth";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
        ],
    },
]);

export default router;