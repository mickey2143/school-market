import { useState ,useEffect,useContext } from "react"
import { GlobalContext } from "./Context/Global"

const SearchBox = ({search}) => {
  const {filterProduct} = useContext(GlobalContext)
  const [searchVal,setSearchVal] = useState('')
  
  useEffect(()=>{
    search(searchVal)
  },[searchVal])

  return (
    
    <div className=" relative h-10 ">
    <span className="absolute right-4 h-full top-3 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
    </span>
      <input type="text" className="w-full outline-none h-full bg-slate-50 pl-4 pr-11 border rounded-md" placeholder="Search" value={searchVal} onChange={(e)=>setSearchVal(e.target.value)}/>
    </div>
  )
}

export default SearchBox
