
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import Homepage from "./routes/homepage";
import BusinessProfile from "./routes/profile";
import Root from "./routes/root";
import Login from "./routes/Login";
import Signup from "./routes/Signup";

import "./index.css";

const routes = createBrowserRouter([{
  path:"/",
  element:<Root/>,
  errorElement:"opps not found",
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
errorElement:"opps not found",},
{path:"/register",
element:<Signup/>,
errorElement:"opps not found",}])

function App(){
    return (
      <div>
        <RouterProvider router={routes}/>
      </div>
    )
}

export default App