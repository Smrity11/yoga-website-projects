import { createBrowserRouter } from "react-router-dom";
import Main from "../mainbase/Main";

import Login from "../components/Login";
import Home from "../pages/home/Home";
import Register from "../components/Register";
import Blog from "../pages/blog/Blog";
import Trainers from "../pages/trainers/Trainers";
import Shop from "../pages/shop/Shop";
import Services from "../pages/services/Services";
// import PrivateRoute from "./PrivateRoute";
import Class from "../pages/classws/Class";
import ShowServices from "../components/ShowServices";
import Error from "../components/Error";
// import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:() => fetch("services.json")
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/trainers",
        element: <Trainers></Trainers>,
        loader:() => fetch("services.json")
      },
      {
        path: "/shop",
        element:<Shop></Shop>,
      },
      {
        path: "/class",
        element: <Class></Class>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader:() => fetch("services.json")
      },
      {
        path: "/service/:id",
        element: <ShowServices></ShowServices>,
      }
    ],
  },
]);
export default router;