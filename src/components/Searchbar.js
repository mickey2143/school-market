import React, { useState } from 'react'


export default function Searchbar({search}) {
  let [inpState,updateInp] = useState('')

  return (
    
      <div className="flex justify-center items-center mt-4">
        
      <form className=" w-96 relative" onSubmit={(event)=>{
        event.preventDefault();
        search(inpState) 
      }}>
       
        <input
          type="text"
          placeholder="Search User"
          className=" rounded-3xl w-full bg-black outline-none p-4 text-white"
          onChange = {(e)=>updateInp(e.target.value.trim())} />

          
        <button type = "submit"  >
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fff"
            className="w-6 h-6 absolute right-3 top-4 cursor-pointer">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

        </button>
    
      </form>

      </div>
    )


}


