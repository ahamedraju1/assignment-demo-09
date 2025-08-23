import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import Auth from "../Layouts/Auth";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Slider from "../HomeLayout/Slider";
import SubscriptionBox from "../HomeLayout/SubscriptionBox";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SubscriptionDetails from "../Pages/SubscriptionDetails/SubscriptionDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import AccessPlus from "../HomeLayout/AccessPlus";
import Password from "../Component/Password/Password";
// import Slider from "../Component/Navigation/Slider";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            Component: Home,
            children: [
                {
                    path: '',
                    element: <Slider></Slider>
                },
                {
                    path: '/subscription',
                    element: <SubscriptionBox></SubscriptionBox>
                },
                {
                    path: '/',
                    element: <AccessPlus></AccessPlus>
                }


            ]
        },
        {
            path: '/dashboard',
            element: <Dashboard></Dashboard>
        },
        {
            path: '/profile',
            element: <PrivateRoute>
                <Profile></Profile>
            </PrivateRoute>
        },
        {
            path: '/auth',
            element: <Auth></Auth>,
            children: [
                {
                    path: '/auth/login',
                    element: <Login></Login>
                },
                {
                    path: '/auth/register',
                    element: <Register></Register>
                }
            ]
        },
        {
            path: '/auth/password',
            element: <Password></Password>
        },
        {
            path: '/subDetails/:id',
            element: <PrivateRoute>
                <SubscriptionDetails></SubscriptionDetails>
            </PrivateRoute>
        },
        {
            path: '/*',
            element: <h2>Error/404 not page </h2>
        }
    ]
)