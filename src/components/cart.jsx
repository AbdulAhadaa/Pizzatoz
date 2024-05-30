import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import ItemCard from './ItemCard'

const Cart = () => {
  const navigate= useNavigate()
  const [activecart,setActivecart]=useState(false)
  const items = useSelector(state=>state.cart.cart)


  const totalquantity= items.reduce((accum,curVal)=>{
  return accum+curVal.qty 
},0)
  
  const totalprice = items.reduce((accum,curVal)=> accum + curVal.price*curVal.qty ,0)

  

    return (
    <>
    <div className={`  fixed top-0 right-0 bg-gray-700 text-white w-full lg:w-[20vw] h-full p-5 ${
      activecart?"translate-x-0" : "translate-x-full"
    }`}>
     
       <div className='flex justify-between  items-center my-3'>
        <span className='text-xl font-bold text-white'>My Order</span>
        
        <IoClose className='cursor-pointer text-xl ' onClick={()=>setActivecart(!activecart)} />
        
       </div>
      {
        totalquantity>0?(
        items.map((product)=>{
         return <ItemCard 
         key={product.id} 
         id={product.id} 
         img={product.img} 
         name={product.name} 
         price={product.price} 
         qty={product.qty}/>})):(
          <h2 className="text-center text-xl font-bold text-white">
          Your cart is empty
        </h2>
         )
      }
      
       <div className='absolute bottom-0'>
      <h3>Items: {totalquantity}</h3>
      <h3>Total Amount: {totalprice}</h3>
      <hr className='w-[80vw] lg:w-[18vw] my-2'/>
      <button onClick={()=>navigate("/success")} className='bg-black text-white border-2 rounded border-black hover:bg-white hover:text-black mb-6 w-[90vw] lg:w-[17vw] transition-all ease-in-out ease-linear' >
      Checkout
      
      </button>

       </div>
     
    </div>
{/* 
    <IoCartSharp onClick={()=>setActivecart(!activecart)}  className={`rounded-full bg-white shadow-md  text-5xl p-3 fixed  bottom-4 right-5 ${!activecart? "translate-x-0" : "translate-x-full"}`} /> */}

    
     <FaShoppingCart       onClick={() => setActivecart(!activecart)}

        className={`rounded-full bg-gray-700 text-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${
          totalquantity > 0 && "animate-bounce delay-500 transition-all duration-500"
          
        } ${!activecart? "translate-x-0" : "hidden"} `}

      />
   
    </>
  )
}

export default Cart