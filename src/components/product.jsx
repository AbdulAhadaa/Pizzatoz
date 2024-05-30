import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { add } from '../redux/cartSlice';

const Product = ( {id,img,
  name,
  rating,
  desc,
  price,handleToast}) => {

  
  const dispatch = useDispatch()
  return (
    <>
  

    <div className='shadow-md shadow-gray-700 font-normal w-[250px] flex flex-col rounded-lg my-10 mx-5 p-2'>
          
       
        <img src={img} alt=""  className='w-auto h-[140px] cursor-grab transition-all duration-500 ease-in-out hover:scale-110'/>
       <div className='flex justify-between py-1'>
        <h1 className='text-white'>{name}</h1>
        <span className='text-white'>Rs {price}</span>

    
       </div>
       <p className='text-white'>{desc.slice(0,80)}...</p>
       <div className='flex justify-between'>
       <span className='flex justify-center items-center text-white'>
        <FaStar  className='mr-1 text-yellow-400'/> 
        {rating}</span>
       <button className='p-1 text-white bg-gray-700 rounded-md hover:bg-black hover:text-white border border-gray-700 transition-all ease-in-out ease-linear' onClick={()=>{

        dispatch(add({id,name,rating,price,img,qty:1}))
        handleToast(name)
      }
        
       }>Add to cart</button>
       </div>

    </div>
    </>
  )
}

export default Product