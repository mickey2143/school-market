function SearchBox({search}){
    return(
        <div className="search-box">
        <input type="text" onChange={search} name="" id="" placeholder="Search by Business name,product name" />
        <span className="icon-holder">
            <img src="./icons/search.svg" alt="" />
        </span>
    </div>
    )
}

export default SearchBox