
import { NavLink } from 'react-router-dom'
import logo from "../images/1.png"
const Navbar = () => {



  return (
    <nav className='flex flex-col  lg:flex-row justify-between  px-5   bg-black text-white'>
        <div>
            
<div className='sm:text-white flex justify-center'> 
  <NavLink to="/">
  <img src={logo} alt="#" className='w-[150px] h-[100px]' />
  </NavLink>

  </div>

        </div>
        <div>
        <ul class="flex lg:flex-row  flex-col  items-center justify-center mt-9">
  <li class="mr-6 mb-3">
    <NavLink  exact to="/" className={({ isActive }) =>
    isActive ? 'bg-gray-700  p-2 rounded-full' : 'bg-black '
  } class="p-2" >Home</NavLink>
  </li>
  <li class="mr-6 mb-3">
    <NavLink to="/products"  className={({ isActive }) =>
    isActive ? 'bg-gray-700  p-2 rounded-full' : 'bg-black font-thin'
  } >Menu</NavLink>
  </li>
 
</ul>

        </div>
        
    </nav>
  )
}

export default Navbar