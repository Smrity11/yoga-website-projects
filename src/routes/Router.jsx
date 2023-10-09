import { createBrowserRouter } from "react-router-dom";
import Main from "../mainbase/Main";

import Login from "../components/Login";
import Home from "../pages/home/Home";
import Register from "../components/Register";
import Blog from "../pages/blog/Blog";
import Trainers from "../pages/trainers/Trainers";
import AboutUs from "../pages/aboutUs/AboutUs";
import Services from "../pages/services/Services";
// import PrivateRoute from "./PrivateRoute";
import Events from "../pages/events/Events";
import ShowServices from "../components/ShowServices";
import Error from "../components/Error";
import PrivateRoute from "./PrivateRoute";
import CommingSoon from "../components/CommingSoon";
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
        loader:() => fetch("blog.json")

      },
      {
        path: "/trainers",
        element:<PrivateRoute><Trainers></Trainers></PrivateRoute> ,
        loader:() => fetch("services.json")
      },
      {
        path: "/aboutus",
        element:<AboutUs></AboutUs>,
      },
      {
        path: "/commingsoon",
        element:<CommingSoon></CommingSoon>,
      },
      {
        path: "/event",
        element:<PrivateRoute> <Events></Events></PrivateRoute> ,
        loader:() => fetch("events.json")
      },
      {
        path: "/services",
        element:<PrivateRoute> <Services></Services></PrivateRoute>,
        loader:() => fetch("services.json")
      },
      {
        path: "/service/:id",
        element:<PrivateRoute> <ShowServices></ShowServices></PrivateRoute>,
      }
    ],
  },
]);
export default router;