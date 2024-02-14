import "./nav.style.css"
import { Link } from "react-router-dom"
import { useState } from "react"

function Nav(){
    const [nav,setNav] = useState(false)

    function handleNav(){
        setNav(!nav)
    }
    return(
    
    <nav >
        <span className="logo"><Link to={"/"}> HandOrder</Link></span>
    
        <ul className={(nav)?"active":""}>
            <li><a href="/">Catalogue</a></li>
            <li><Link to="/register">Open a Business Profile</Link></li>
            <li><Link to={"/login"}>Login in</Link></li>
            <li><Link to={"/login"}>Report</Link></li>
        </ul>

        <span className="ham" onClick={handleNav}>
            {
                (!nav)?(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg> ):(<svg id="close" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>)
            }
             
        </span>
    </nav>

    )
}


export default Nav