import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Success from './pages/success'
import Protectedroute from './components/protectedroute'
import Products from './pages/products'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/success" element={<Protectedroute element={<Success/>}/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App