import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Home/Home";
import AddProduct from "../components/AddProduct/AddProduct";
import MyCart from "../components/MyCart/MyCart";
import Error from "../components/Error/Error";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Navbar from "../components/shared/Navbar/Navbar";
import DisplayProduct from "../components/AddProduct/DisplayProduct";
import AuthProvider from "../Provider/AuthProvider";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/brand.json')
      },
      {
        path: "/addproduct",
        element: <AuthProvider><AddProduct></AddProduct></AuthProvider>
      },
      {
        path: "/foods",
        element: <DisplayProduct></DisplayProduct>,
      loader:()=>fetch(`http://localhost:5000/foods`),
      },
      {
        path: "/mycart",
        element: <AuthProvider><MyCart></MyCart></AuthProvider>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);
export default router;