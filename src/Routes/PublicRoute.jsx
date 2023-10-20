import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Home/Home";
import AddProduct from "../components/AddProduct/AddProduct";
import MyCart from "../components/MyCart/MyCart";
import Error from "../components/Error/Error";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Navbar from "../components/shared/Navbar/Navbar";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children : [
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch('/brand.json')
        },
        {
            path:"/addproduct",
            element:<AddProduct></AddProduct>
        },
        {
            path:"/mycart",
            element:<MyCart></MyCart>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        }
      ]
    },
  ]);
  export default router;