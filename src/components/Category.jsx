import React, { useEffect, useState } from 'react'
import FoodData from '../data/data'
import { useDispatch } from 'react-redux'
import { setcategory } from '../redux/categorySlice'
import { useSelector } from 'react-redux'


const Category = () => {
  const [categories,setCategories]= useState([])
  const listuniqueCategories=()=>{
   const uniquecategories=[...new Set(FoodData.map((food)=>food.category))]
    setCategories(uniquecategories)
  }
  useEffect(()=>{
    listuniqueCategories()
  },[])

  const dispatch = useDispatch()
  const selectedCategory = useSelector((state) => state.category.category);
  return (
    <div  className='mx-6 flex gap-3 md:overflow-x-hidden overflow-x-scroll scroll-smooth lg:overflow-x-hidden  lg:justify-center sm:justify-center' >


      <button
       onClick={()=>dispatch(setcategory("All"))}
        className={`border border-2 border-gray-700 rounded-md text-white hover:bg-gray-700 hover:text-white px-3 py-2 transition-all ease-in-out ease-linear ${selectedCategory==="All" && "bg-gray-700 text-white"}`}>All</button>


      { categories.map((category,index)=> <button onClick={()=>dispatch(setcategory(category))} key={index} className={`border border-2 text-white border-gray-700 rounded-md  hover:bg-gray-700 hover:text-white px-3 py-2 transition-all ease-in-out ease-linear ${selectedCategory===category && "bg-gray-700 text-white"}`}>{category}</button>
        )
     
        }
       

    </div>
  )
}

export default Category