import { useState } from "react";
import {RenderUI} from "./components/renderUI";
import Searchbar from "./components/Searchbar";
import ClipLoader from "react-spinners/ClipLoader"

export function App() {
 

  const getData = async function(url){
    try{

    }catch(err){
  console.log(err)

    }
  }


const [loading,updateLoad] = useState(false)
const [gitUser,newSearch] =  useState(null)
const search = (username)=>{
  
  fetch(`https://api.github.com/users/${username}`)
  .then((res)=>{
    updateLoad(true)
    return res.json()
  })
  .then((data)=>{
    
  updateLoad(false)
  newSearch(data)
})

}
  
 
  return (
    <>

    <Searchbar search={(e)=>{
      search(e)}} />

    <RenderUI  user = {gitUser} loading = {loading}/>
    
    </>
  )
}