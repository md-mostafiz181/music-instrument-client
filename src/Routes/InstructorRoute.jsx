import { useContext } from "react";
import UseInstructor from "../Hooks/UseInstructors";
import { AuthContext } from "../Providers/AuthProvider";
import { useLocation } from "react-router-dom";



const InstructorRoute = ({children}) => {

    const [isInstructor,isLoading]=UseInstructor();
    
    const {user,loading}=useContext(AuthContext)
    const location = useLocation();


    if(loading || isLoading){
        return <span className="loading loading-ring loading-lg"></span>
    }


    if(user && isInstructor){
        return children
    }

    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default InstructorRoute;