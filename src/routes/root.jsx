import Nav from "../components/nav/nav.comp"
import { Outlet } from "react-router-dom"
function Root(){
    return (
        <div>
            <Nav/>
            <Outlet/>
        </div>
    )
}

export default Root