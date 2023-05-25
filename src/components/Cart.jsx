import React,{ useState,useEffect ,useContext} from 'react'
import { GlobalContext } from './Context/Global'

const Cart = () => {
    const {cart} = 

  return (
    <div className=" text-xl flex items-center justify-center gap-2 select-none">
        <p>cart</p>
        <span className="w-4 h-4 p-3 rounded-full flex items-center justify-center bg-black text-white text-base">{cart.length}</span>
    </div>
  )
}

export default Cart
