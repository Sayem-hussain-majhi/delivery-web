import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layout/Dashboard/Dachboard";
import BookParcel from "../Pages/Dashboard/BookParcel/BookParcel";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import MyDeliveryList from "../Pages/Dashboard/MyDeliveryList/MyDeliveryList";
import MyRevews from "../Pages/Dashboard/MyRevews/MyRevews";
import AllParcels from "../Pages/Dashboard/AllParcels/AllParcels";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AllDeliveryMan from "../Pages/Dashboard/AllDeliveryMan/AllDeliveryMan";
import Statistics from "../Pages/Dashboard/Statistics/Statistics";
import MyParcels from "../Pages/Dashboard/MyParcels/MyParcels";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },

    {
        path: '/dashboard',
        element:<Dashboard></Dashboard> ,
        children:[
            {
                path: '/dashboard'
            },

            // user
            {
                path: '/dashboard/bookParcel',
                element: <BookParcel></BookParcel>
            },
            {
                path: '/dashboard/myParcels',
                element: <MyParcels></MyParcels>
            },
            {
                path: '/dashboard/myProfile',
                element: <MyProfile></MyProfile>
            },

            // Delivary Man
            {
                path: '/dashboard/myDeliveryList',
                element: <MyDeliveryList></MyDeliveryList>
            },
            {
                path: '/dashboard/myReviews',
                element: <MyRevews></MyRevews>
            },

            // admin 
            {
                path: '/dashboard/allParcels',
                element: <AllParcels></AllParcels>
            },
            {
                path: '/dashboard/allUsers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/allDeliveryMan',
                element: <AllDeliveryMan></AllDeliveryMan>
            },
            {
                path: '/dashboard/statistics',
                element: <Statistics></Statistics>
            },
        ]
    }
])