import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import Dashboard from "../Layout/Dashboard";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>

        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"signUp",
          element:<SignUp></SignUp>
        },
        {
          path:"instructors",
          element:<Instructors></Instructors>,
          loader:()=>fetch('http://localhost:5000/instructors'),
          
        },
        {
          path:"classes",
          element:<Classes></Classes>
        }
      ]
      
    },
    {
      path:"dashboard",
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:"mycart",
          element:<MyCart></MyCart>,

        }
        
      ]
    }
  ]);