import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const Protectedroute = ({element}) => {


    const items = useSelector(state=>state.cart.cart)


  return items.length>0 ? element : <Navigate to="/"/>
  
}

export default Protectedroute