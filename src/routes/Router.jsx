import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Register/Register";
import PopularCampDetails from "../pages/Home/PopularCamps/PopularCampLayout/PopularCampDetails/PopularCampDetails";
import Errorpage from "../components/SectionTitle/Errorpage";
import AvailableCamps from "../pages/AvailableCamps/AvailableCamps";
import ContactUs from "../pages/ContactUs/ContactUs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path:'/popularcamp/:_id',
                element:<PopularCampDetails></PopularCampDetails>,
                loader: () => fetch('http://localhost:5000/popularcamp')
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>,
            },
            {
                path:'/availableCamps',
                element:<AvailableCamps></AvailableCamps>,
                loader:() => fetch('http://localhost:5000/popularcamp')
            },
            {
                path:'/contactUs',
                element:<ContactUs></ContactUs>
            }
        ]
    },
]);