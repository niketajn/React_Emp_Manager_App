import React from "react";
import { UserAuthContext } from '../Context/UserAuthContext';
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
    let { user } = UserAuthContext();
    
    if(!user.isLogin){
        return  <Navigate to="/"/>
    }
    return children;
}

export default ProtectedRoutes;