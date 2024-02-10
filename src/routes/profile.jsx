import Products from "../components/products/products"
import Button from "../components/libs/button"
import { useState } from "react"

function BusinessProfile(){
    const [prodVisib,setprodVisib] = useState(false)


    return(
        <>
        {(prodVisib)?(<div className="flex items-center justify-center fixed bg-black opacity-40 w-full h-full">
        <Products />
    </div>):("")}
        
       <main >

            <div class="title">
                <h1 className="text-3xl">Mona's Kitchen</h1>
                <Button 
                text={"View Products"}
                handleClick={()=>{setprodVisib(true)}}
                />
                
            </div>
             <div class="product-img">
                <div class="main-img">
                    <img src="../images/img2.jpg" alt="" />
                </div>
                <div class="secondary-img">
                    <div class="img-container">
                        <img src="../images/img1.jpg" alt="" />
                    </div>
                    <div class="img-container">
                        <img src="../images/img1.jpg" alt="" />
                    </div>
                    <div class="img-container">
                        <img src="../images/img1.jpg" alt="" />
                    </div>
                    <div class="img-container">
                        <img src="../images/img1.jpg" alt="" />
                    </div>
                    
                </div>
             </div> 
             
             <div class="about-us">
                <div class="about">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum temporibus officiis facere sequi mollitia dolorem beatae atque voluptate deserunt repudiandae nesciunt magni, blanditiis inventore placeat eum consequuntur amet. Laborum, minima.</p>
                </div>
                <div class="contact">
                    <a href="#">
                        <img src="../icons/facebook.svg" alt="" />
                        <p>@facebook.com</p>
                    </a>
                    <a href="#">
                        <img src="../icons/instagram.svg" alt="" />
                        <p>@facebook.com</p>
                    </a>
                    <a href="#">
                        <img src="../icons/twitter.svg" alt="" />
                        <p>@facebook.com</p>
                    </a>
                    <a href="mailto:">
                        <img src="../icons/mail.svg" alt="" />
                        <p>@gmail.com</p>
                    </a>
                </div>
             </div>
    
    
    
             
             <div class="reviews responsive-grid">
                <div >
                    <div class="user-detail">
                        <span class="profile-img">
                            <img src="../images/profile1.jpg" alt="" />
                        </span>
                        <div>
                            <span>
                                <p>Michael Ani</p>
                                <address>Enugu,Nigeria</address>
                            </span>
                        </div>
                    </div>
                    <div class="rating">
                        &star;
                        &star;
                        &star;
                        <p>October,2023</p>
                    </div>
                    <div>
                        <p>Everything was great! The house is super good both inside and the outdoor area! Recommended</p>
                    </div>
                </div>
                <div >
                    <div class="user-detail">
                        <span class="profile-img">
                            <img src="../images/profile1.jpg" alt="" />
                        </span>
                        <div>
                            <span>
                                <p>Michael Ani</p>
                                <address>Enugu,Nigeria</address>
                            </span>
                        </div>
                    </div>
                    <div class="rating">
                        &star;
                        &star;
                        &star;
                        <p>October,2023</p>
                    </div>
                    <div>
                        <p>Everything was great! The house is super good both inside and the outdoor area! Recommended</p>
                    </div>
                </div>
                <div >
                    <div class="user-detail">
                        <span class="profile-img">
                            <img src="../images/profile1.jpg" alt="" />
                        </span>
                        <div>
                            <span>
                                <p>Michael Ani</p>
                                <address>Enugu,Nigeria</address>
                            </span>
                        </div>
                    </div>
                    <div class="rating">
                        &star;
                        &star;
                        &star;
                        <p>October,2023</p>
                    </div>
                    <div>
                        <p>Everything was great! The house is super good both inside and the outdoor area! Recommended</p>
                    </div>
                </div>
             </div>
       </main>
       </>
    )
}

export default BusinessProfile