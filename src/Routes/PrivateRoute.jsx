import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (user) {
       return children;
    }
    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoute;