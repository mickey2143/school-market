import { useRef,useReducer } from "react"
import Button from "./Button"
const min = 1

export const Form = function({handleInput,addToList,handleQuantity}){
    const inpCont = useRef()
    const inpQty = useRef()
    return (
          <form className="w-full" onSubmit={(e)=>{
                addToList(e)
                inpCont.current.value = ''
                inpQty.current.value = ''
            }}>

                <div className="block mt-10">
                     <label htmlFor="itemToBuy">Item</label>
      
                    <input
                    
                    className="border border-blue-500 w-full h-10 bg-transparent inp rounded-sm outline-none pl-3 my-2"
                    type="text"
                    id="itemToBuy"
                    placeholder="Item to buy"
                    autoFocus
                    onChange={(e)=>{handleInput(e.target.value)}} ref={inpCont}
                    
                    />
      
            
                </div>
                <div className="block mt-2">
                     <label htmlFor="quantity">Quantity</label>
      
                    <input
                    
                    className="border border-blue-500 w-full h-10 bg-transparent inp rounded-sm outline-none pl-3 my-2"
                    type="number"
                    min={min}
                    id="quantity"
                    placeholder="Quantity"
                    onChange={(e)=>{handleQuantity(e.target.value)}} ref={inpQty}
                    
                    />
      
            
                </div>

                <Button color="blue-500">Add</Button>
            </form>
    )

}