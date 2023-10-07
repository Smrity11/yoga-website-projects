/* eslint-disable react/prop-types */
import { useContext } from "react";

import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user ,loading} =useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner loading-lg flex h-[90vh] items-center my-auto mx-auto"></span>
    }
    if(user){
        return children
    }

    return (
        <div>
            <Navigate to="/login"></Navigate>
        </div>
    );
};

export default PrivateRoute;