function Products({handleClick}){
    return(
        <div onClick={()=>handleClick()} className="flex items-center justify-center fixed bg-black opacity-40 w-full h-full">
        <h1 className="text-white">Hello</h1>
        </div>
        
    )
}

export default Products