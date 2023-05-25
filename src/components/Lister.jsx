import React, { useState,useContext,useReducer } from "react"
import List from "./List"
import { Form } from "./Form"

export const ListContext = React.createContext()

const itemsReducer = (state,action)=>{
    switch (action.type){
        case "delete":
            
            return state.filter((_,i)=>i !== action.id)

        case "increase":
           
          let arr = state.filter((items,i)=>items.item === action.id)
          if(Number(arr.quantity) === 1){
            return [...state]
          }else{
              arr.quantity =  Number(arr.quantity) - 1
              console.log(Number(arr.quantity) === 1)

          }
  
          return [...state]

          
        case "decrease":
           
          const [clicked] = state.filter((items,i)=>items.item === action.id)
          if(Number(clicked.quantity) === 1){
            return [...state]
          }else{
              clicked.quantity =  Number(clicked.quantity) - 1
              console.log(Number(clicked.quantity) === 1)

          }
  
          return [...state]
        default:
          if(state.some((data)=>data.item.toLowerCase() === action.data.item.toLowerCase())){
                alert(`opps ${action.data.item} is already in the list , you can increase it`)
                return state
        }else{

            return  [...state,action.data]
        }
    }
}
export const Lister = function(){
    const [items,dispatch] = useReducer(itemsReducer,[])
    // const [items,setItems] = useState([])

    const [quantity,setQuantity] = useState([])
    const [inpVal,setInputVal] = useState()
   

    const handleQuantity = (val)=>{
        setQuantity(val.trim())
    }

    const handleInput = (val)=>{
        setInputVal(val.trim())
    }
    
    const handleDelete = (id)=>{
       dispatch({
        id,
        type:"delete"
       })
    }
    const handleDecrease = (id)=>{
       dispatch({
        id,
        type:"decrease"
       })
    }
    const handleIncrease = (id)=>{
       dispatch({
        id,
        type:"increase"
       })
    }

    const handleError =()=>{
        if(!inpVal && !quantity){
            return "inputs must not be empty"
        }else if(!inpVal || !quantity){
            return  `${(inpVal)?'quantity':'item'} must not be empty`
        }
    }

    const addToList = function(e){
        
        e.preventDefault()
        if(!inpVal || !quantity){
            alert(handleError())
        }else{
            dispatch({
                type:"add",
                data:{item:inpVal,quantity}
            })
        }
        // setItems([...items,{item:inpVal.trim(),quantity}])
        setInputVal()
        setQuantity()

    }

    

    return (
       
        <ListContext.Provider value={items}>
            <div className="flex flex-col">
                
                <List func={ handleDelete} decrease={handleDecrease} increase={handleIncrease}/>

                <Form addToList={(e)=>addToList(e)}  handleInput={handleInput}  handleQuantity={handleQuantity}  />

            </div>
        </ListContext.Provider>

    )
    
}
