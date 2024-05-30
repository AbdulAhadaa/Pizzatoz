import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/searchSlice'
const Search = () => {
const dispatch= useDispatch()
  return (
    <div className=' flex  justify-center' >
<input onChange={(e)=>dispatch(setSearch(e.target.value))} type="search" name='search' placeholder='search here' className='border  rounded-md border-black border-2  w-[350px] h-[40px] p-2 '  />


        
    </div>
  )
}

export default Search