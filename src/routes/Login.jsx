import { Link } from "react-router-dom"


function Login(){
    return(
        <div className="cover">
    <div className="form-box">
        <div className="model-detail">
        <Link to={"/"}>
            <span className="close" >
                <svg id="close" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </span>
        </Link>
            <p>Login/Signup</p>
        </div>
    
        <div className="welcome">
            <h2>Welcome To HandleOrder </h2>
        </div>
    
    
     <form action="">
        <div className="block">
            <label for="username">Business Name</label>
            <input type="tel" name="" required id="username" />
        </div>
    
        <div className="block">
            <label for="password">Password</label>
            <input type="password" name="" id="password"  required />
        </div>

        <p>Sign up</p>
    
        <button type="submit">Submit</button>
    </form> 
    </div>
    </div>
    )
}


export default Login