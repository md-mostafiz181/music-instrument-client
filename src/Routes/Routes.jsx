import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import Dashboard from "../Layout/Dashboard";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import NotFound from "../Pages/NotFound/NotFound";
import AddAClass from "../Pages/Dashboard/Instructor/AddAClass";
import MyClass from "../Pages/Dashboard/Instructor/MyClass";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses";





export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<NotFound></NotFound>,
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
          path:"menageUsers",
          element:<ManageUsers></ManageUsers>,

        },
        {
          path:'addaClass',
          element:<AddAClass></AddAClass>,
        },
        {
          path:"myClass",
          element:<MyClass></MyClass>
        },
        {
          path:"manageClass",
          element:<ManageClasses></ManageClasses>,
        }

        
      ]
    }
  ]);