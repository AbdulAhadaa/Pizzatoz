import React from 'react'
import Product from '../components/product'
import data from "../data/data"
import { useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';
import Category from "../components/Category"
import { useNavigate } from 'react-router-dom';
import Search from '../components/Search';
import Cart from "../components/cart"
const Products = () => {
  const category = useSelector(state=>state.category.category)
  const search = useSelector(state=>state.search.search)
  const Navigate= useNavigate()
  const handletoast=(name)=> toast.success(`Item added to Cart ${name} `)
{ return (
  <>
        <Toaster position="top-center" reverseOrder={false} />
  
       
   <br />
        <Category/>
        <br />
        <Search/>

    <div className='flex flex-wrap justify-center'>
  

{

  // data.filter((food)=>{
  // if(category="All"){
  //   return food
  // }else{
  //   return  category =food.category
  // }
  // }).map((food)=>{
  //   return <Product key={food.id} {...food} qty={1}/>
  // })

  data.filter((food) => {
    if (category === "All") {
      return food.name.toLowerCase().includes(search.toLowerCase())
    } else {
      return (
        category === food.category && food.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  }).map((food) => (
    <Product
      key={food.id}
      id={food.id}
      name={food.name}
      price={food.price}
      desc={food.desc}
      rating={food.rating}
      img={food.img}
      handleToast={handletoast}
    />
  ))
  // data.map(

  //   (product)=> <Product key={product.id} {...product} qty={1} />
    

  // )
}
    
    </div>
    <Cart/>
    </>
  )}
}

export default Products