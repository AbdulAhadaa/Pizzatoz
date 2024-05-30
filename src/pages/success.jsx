import React, { useEffect, useState } from 'react'
import {HashLoader}  from "react-spinners"
import { useNavigate } from 'react-router-dom'

const Success = () => {
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  },[])
const Navigate = useNavigate()

  return (
    <div className='flex flex-col items-center  justify-center h-screen text-center text-white'>
{
  loading ?   <HashLoader color="#36d7b7" /> :<div>
  <h2 className='text-3xl fond-semibold mb04'>
    Order Successfull </h2>
    <p>Your order successfully placed</p>
    <button onClick={()=>Navigate("/products")} className='py-2 border-white rounded-full px-2 bg-gray-700 text-white mt-5 cursor-pointer'>
      Continue Shopping
    </button>
</div>
  
}


    </div>
  
  )
}

export default Success