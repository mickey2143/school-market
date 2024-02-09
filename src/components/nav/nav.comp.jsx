import "./nav.style.css"
import { Link } from "react-router-dom"
function Nav(){



    return(
    
    <nav >
    <span className="logo"><Link to={"/"}> HandOrder</Link></span>
    <ul>
        
        <li><a href="/">Catalogue</a></li>
        <li><a href="#" id="signup">Open a Business Profile</a></li>
        <li><Link to={"/login"}>Login in</Link></li>
        <li><a href="#">Report</a></li>
    </ul>

    <span className="ham">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
         </svg>  
    </span>
</nav>

    )
}


export default Nav