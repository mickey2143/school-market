import { Link } from "react-router-dom"
import FormInput from "../components/libs/FormInput"
import { Component} from "react"

class Signup extends Component{
    constructor(){
        super()
        this.state = {
            biz:'',
            password:"",
            desc:"",
            owner:"",
            location:"",
            email:""
        }
    }

    
   handleChange(e){
        const {name,value} = e.target
        this.setState({[name]:value})
    }

   handleSubmit(e){
        e.preventDefault()
        console.log(this.state)
    }

    render(){
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

            <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                    <FormInput 
                        label={"Business Name"}
                        type={"text"}
                        placeholder={"Enter business name"}
                        name={"biz"}
                        handleInput={(e)=>{this.handleChange(e)}}
                        required={true}
                    />
                    <FormInput 
                        label={"Business Owner"}
                        type={"text"}
                        placeholder={"Enter business owner name"}
                        name={"owner"}
                        handleInput={(e)=>{this.handleChange(e)}}
                        required={true}
                    />
                    
                    <div className="block">
                        <label htmlFor="desc">Business Description</label>
                        <textarea name="desc" maxLength={240} placeholder="Brief description" onInput={(e)=>{this.handleChange(e)}}></textarea>
                    </div>
                
                    <FormInput 
                        label={"Email Address"}
                        type={"email"}
                        placeholder={"Enter email address"}
                        name={"email"}
                        handleInput={(e)=>{this.handleChange(e)}}
                        required={true}
                    />
                    
                    <FormInput 
                        label={"Business Location"}
                        type={"text"}
                        placeholder={"Enter business Location"}
                        name={"location"}
                        handleInput={(e)=>{this.handleChange(e)}}
                        required={true}
                    />

                    <FormInput 
                        label={"Password"}
                        type={"password"}
                        placeholder={"Enter password"}
                        name={"password"}
                        handleInput={(e)=>{this.handleChange(e)}}
                        required={true}
                    />

                    <button type="submit">Submit</button>
            </form>
        </div>
    </div>
        )
    }
}


export default Signup