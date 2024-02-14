
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import Homepage from "./routes/homepage";
import BusinessProfile from "./routes/profile";
import Root from "./routes/root";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import ErrorPage from "./routes/Error";

import "./index.css";

const routes = createBrowserRouter([{
  path:"/",
  element:<Root/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path:"/",
      element:<Homepage/>
   },{
    path:"/business/:id",
    element:<BusinessProfile/>
 },
  ]
},{path:"/login",
element:<Login/>,
errorElement:<ErrorPage/>,},
{path:"/register",
element:<Signup/>,
errorElement:<ErrorPage/>,}])

function App(){
    return (
      <div>
        <RouterProvider router={routes}/>
      </div>
    )
}

export default App