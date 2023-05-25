
import { ListContext } from "./Lister"
import { useContext } from "react"
function List ({func,decrease,increase}){
const items = useContext(ListContext)

    if(items.length > 0){
    return(
                <table className="transit">
                    <thead className="bg-blue-500 text-white ">
                        <tr>

                            <th className="p-4">S/N</th>
                            <th className="p-4">Item</th>
                            <th className="p-4">Quantity</th>
                            <th className="p-4" colSpan="3">Action</th>
                        

                        </tr>
                    </thead>

                    <tbody>

                    { items.map((goods,i)=>{
                        return(
                                <tr key={goods.item} className="font-bold border-b text-md text-center">
                                    
                                        <td className="p-4 text-blue-500">{i+1}</td>
                                        <td className="p-4 text-blue-500">{goods.item}</td>
                                        <td className="p-4 text-blue-500">{goods.quantity}</td>
                                        <td onClick={()=>increase(i)} className="p-4 text-green-500 cursor-pointer">Increase</td>
                                        <td onClick={()=>decrease(goods.item)} className="p-4 text-orange-500 cursor-pointer">Decrease</td>
                                        <td onClick={()=>func(i)} className="p-4 text-red-500 cursor-pointer">Remove</td>
                                        
                                    
                                </tr>
                                )
                        }) } 




                    </tbody>
             
                </table>
            
            )
    
            }else{
                return (
                    <h1 className="text-center">No item Found</h1>
                )
            }
        

}

export default List
