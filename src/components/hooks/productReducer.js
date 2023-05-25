
const productReducer = (state,action) => {
   switch(action.type)   {
        case "ADD_TO_CART":
            localStorage.setItem("cart",JSON.stringify([...action.cart]))
            return state
        
        case "FILTER":
            if(action.param.trim() === "") return action.intialData
            let filtered = action.intialData.filter((prod)=>prod.price === +action.param.trim() || prod.product_name.toLocaleLowerCase().includes(action.param.toLocaleLowerCase()))
    
            return filtered

        default:
            return state
   }
}

export default productReducer
