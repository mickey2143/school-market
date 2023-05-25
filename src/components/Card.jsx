import {useContext} from 'react'
import { GlobalContext } from './Context/Global'

import tea from "../assets/tea.jpg"

const Card = ({data}) => {
    const { addToCart } = useContext(GlobalContext)
   
  return (
    <div className="bg-white shadow-2xl flex justify-center w-48 rounded-xl flex-col py-5">
    <div className='w-full flex items-center justify-center'>
        <img src={tea} alt=""  className="w-40"/>
       
    </div>
    <div className="px-4 py-5">
        <h1 className="font-bold">{data.title}</h1>
        <h1 className="font-normal">{data.category}</h1>
        <p className="">Price : {new Intl.NumberFormat(navigator.language,{style:"currency",currency:"USD"}).format(data.price)}</p>
    </div>

    <div className="px-4 flex items-center justify-between">
        <span>
            {data.rating}
        </span>
        <span  onClick={()=>addToCart(data)} className="select-none text-center cursor-pointer px-4 py-2 flex justify-center  bg-black text-white items-center rounded-3xl">
           {data.cart ? "Check Out":"Add to Cart"}
        </span>
    </div>
  
    </div>
  )
}

export default Card
