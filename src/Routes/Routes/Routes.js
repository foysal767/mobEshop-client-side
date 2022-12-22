import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyBooked from "../../Pages/Dashoboard/MyBooked/MyBooked";
import Products from "../../Pages/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
import MyProducts from "../../Pages/Dashoboard/MyProducts/MyProducts";
import AdminRoute from "../AdminRoute/AdminRoute";
import AllBuyers from "../../Pages/Dashoboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashoboard/AllSellers/AllSellers";
import AddProducts from "../../Pages/Dashoboard/AddProducts/AddProducts";
import ReportedItems from "../../Pages/Dashoboard/ReportedItems/ReportedItems";
import Payment from "../../Pages/Dashoboard/Payment/Payment";
import DisplayErrorPage from "../../Pages/Shared/DisplayErrorPage/DisplayErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayErrorPage></DisplayErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/category/:name',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: async ({ params }) => {
                    return fetch(`https://mob-shop-server-foysal767.vercel.app/category/${params.name}`)
                }
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayErrorPage></DisplayErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <MyBooked></MyBooked>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/reported',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params})=> fetch(`https://mob-shop-server-foysal767.vercel.app/bookings/${params.id}`) 
            }
        ]
    }
])

export default router;