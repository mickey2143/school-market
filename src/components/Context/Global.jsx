import { createContext,useEffect,useReducer, useState } from "react";
import productReducer from "../hooks/productReducer";
import tea from "../../assets/tea.jpg"
let intialState

function getData(params) {
  fetch("/d.json").then((d)=>d.json()).then((i)=>{
   
    intialState = i
  
  })
}
 
const Global = ( {children}) => {
  useEffect(getData)
  const [state,dispatch] = useReducer(productReducer)
  const [cart,setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
  useEffect(()=>dispatch(
    {
        type:"ADD_TO_CART",
        cart
    }
  ),[cart])

const addToCart = (product)=>{
  let isInCart = cart.length < 0 || cart.some((g)=>g.id === +product.id)
  if(!isInCart || cart.length === 0){
    setCart([...cart,product])
  }

}
const filterProduct = (param)=>{
  dispatch(
{  
  type:"FILTER",
  param,
  intialData:intialState?.products

}
  )

}


return (
  <GlobalContext.Provider value={{products:state,addToCart,filterProduct,cart}}>
    {children}
  </GlobalContext.Provider>
  )
}

export default Global
export const GlobalContext = createContext(intialState)
