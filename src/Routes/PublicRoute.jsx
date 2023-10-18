import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Home/Home";
import AddProduct from "../components/AddProduct/AddProduct";
import MyCart from "../components/MyCart/MyCart";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children : [
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/addproduct",
            element:<AddProduct></AddProduct>
        },
        {
            path:"/mycart",
            element:<MyCart></MyCart>
        }
      ]
    },
  ]);
  export default router;