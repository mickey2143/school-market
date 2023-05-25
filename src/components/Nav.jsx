import SearchBox from "./SearchBox"
import Cart from "./Cart"
const Nav = ({search}) => {
    
  return (
    <nav
    className="w-full shadow-sm md:px-10 px-3 h-20 flex sticky justify-between top-0 items-center 
    "
  >
   <div  className="flex">
   <span>ShopIT</span>
   <ul className="flex">
   <li>Men</li>
   <li>Women</li>
   </ul>
   </div>
   <div className="flex">
   <SearchBox search = {search} />
   <Cart />
   </div>
  </nav>
  )
}

export default Nav
