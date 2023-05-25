import {useEffect, useState} from 'react'
import tea from "../../assets/tea.jpg"
const dummy = { products: [
  {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "...",
      images: ["...", "...", "..."]
    },
  {
      id: 14,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "...",
      images: ["...", "...", "..."]
    },
  {
      id: 2,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "...",
      images: ["...", "...", "..."]
    },
  {
      id: 3,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "...",
      images: ["...", "...", "..."]
    },
  {
      id: 4,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "...",
      images: ["...", "...", "..."]
    },
  {
      id: 5,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "...",
      images: ["...", "...", "..."]
    },
  {
      id: 6,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "...",
      images: ["...", "...", "..."]
    },
  {
      id: 7,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "...",
      images: ["...", "...", "..."]
    },
  {
      id: 28,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "...",
      images: ["...", "...", "..."]
    },
  {
      id: 8,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "...",
      images: ["...", "...", "..."]
    },
  {
      id: 9,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "...",
      images: ["...", "...", "..."]
    },
  ]
  }
 
const useFetch = (url) => {
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState(null)
    const [data,setData] = useState(null)
    useEffect(()=>{
    
    // fetch('https://dummyjson.com/products/1')
    // fetch('https://dummyjson.com/products/search?q=phone')
            fetch(url).then((res)=>{
                console.log(res)
                if(!res.ok){
                  throw Error("Oopps.. Cound not fetch data")
                }
                return res.json()
            }).then((data)=>{
                console.log(data)
                setData(dummy.products)
                setIsLoading(false)
                
            }).catch((err)=>{
                setIsLoading(false)
                setData(dummy.products)
                setError("")
              })
        
        
      },[])

    return {isLoading,error,data}
}

export default useFetch
