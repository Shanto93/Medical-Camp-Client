import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = (children) => {
    const [user, loading] = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <span className="loading loading-spinner text-error"></span>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default AdminRoute;