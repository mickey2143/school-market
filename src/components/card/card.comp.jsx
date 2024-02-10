import { Link } from "react-router-dom"
import './card.css'

function Card({business}){
    return(
        <Link to={`/business/${business.id}`} >
            <div class="card">
            
            <button class="like-btn">
                <img src="./icons/like.svg" alt="" />
            </button>
            <div class="card-head">
                <img src="./images/img1.jpg" alt="" />
            </div>
            <div class="card-details">

                <h2>{business.businessName}</h2>
                <p>{business.short}</p>
                
                <div class="socials">
                {business.socials.map((social)=>(
                    <a href={social.link} key={social.type}>
                        <img src={`./icons/${social.type}.svg`} alt={social.type} />
                    </a>
                )) }
                </div>

            </div>

            </div>
        </Link>
    )
}

export default Card