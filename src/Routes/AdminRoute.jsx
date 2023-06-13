import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import { AuthContext } from "../Providers/AuthProvider";


const AdminRoute = ({children}) => {

    const [isAdmin,isLoading]=UseAdmin();
    
    const {user,loading}=useContext(AuthContext)
    const location = useLocation();


    if(loading || isLoading){
        return <span className="loading loading-ring loading-lg"></span>
    }


    if(user && isAdmin?.admin){
        return children
    }

    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default AdminRoute;