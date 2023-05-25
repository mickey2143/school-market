import Nav from "./Nav";
import Products from "./Products"
import Global from "./Context/Global";
import useFetch from "./hooks/useFetch";


const OnlineStore = () => {
  const search = (data)=>{
    console.log(data)
  }
  let products = useFetch("https://dummyjson.com/products")
  

  return (
    <Global>
      <div className="flex flex-col items-center justify-center w-full">
        <Nav search = {search}/>
        <Products data={products}/>
      </div>
    </Global>
  );
};

export default OnlineStore;
