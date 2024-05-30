import React from 'react'

import { FiMinus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';

import { FaPlus } from "react-icons/fa6";

import { remove,increment,decrement} from '../redux/cartSlice';
const ItemCard = ({id,name,price,img,qty}) => {
const dispatch = useDispatch()


  return (

    <div className='flex gap-2 shadow-md rounded-md p-2'>
        <MdDelete className='absolute right-7 text-white cursor-pointer' onClick={()=>dispatch(remove(id))}/>
<img src={img} alt="" className='w-[50px] h-[50px]'/>
<div>
    <h2 className='font-bold text-gray'>{name}</h2>
    <div className="flex justify-between">
        <span>Rs {price}</span>
    <div className='flex justify-center items-center gap-2 absolute right-7'>
    <FiMinus className='border-2 border-white text-white hover:text-white hover:bg-black text-2xl cursor-pointer p-1 transition-all ease-in-out ease-linear' onClick={()=>qty>1 ?dispatch(decrement({id})): (qty=0)}/>
    <span>{qty}</span>

   
    <FaPlus className='border-2 border-white text-white hover:text-white hover:bg-black text-2xl cursor-pointer p-1 transition-all ease-in-out ease-linear' onClick={()=>dispatch(increment({id}))}/>
    </div>
    </div>
</div>
    </div>
  )
}

export default ItemCard