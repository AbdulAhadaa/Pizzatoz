import image from "../images/image.png"
import { useNavigate } from "react-router-dom"
const Home = () => {
  const Navigate= useNavigate()
  return (
    <div className="h-full bg-black   text-white"> 
   <div className="container pb-8 sm:pb-0 ">
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-9 flex justify-center items-center">
      {/* text content */}

      <div className="order-2 sm:order-1 mx-auto">
<h1 className="text-5xl sm-text-6xl lg-text-7xl  font-bold w-[340px] sm:w-[330px]">We serve the best <span className="text-gray-700 italic">Pizza</span> in the city</h1>
<div>
  <button className="rounded-full px-4 py-2 mt-7 text-white hover:scale-105 duration-200 border-gray-700 bg-gray-700 " onClick={()=>Navigate("/products")}>
    Order Now
  </button>
</div>
      </div>

      {/* img  */}
      <div className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 my-5 ">
        <img src={image} alt="" 
        className="w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin"/>

      </div>
    </div>
   </div>

  
     
    </div>
  )
}

export default Home