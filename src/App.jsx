import { Route, Routes } from "react-router-dom"
import {Products} from './pages/Products'
import {Product} from './pages/Product'
import {Cart} from './pages/Cart'
import {NotFound} from './pages/404'
import {Navbar} from "./component/Navbar/Navbar"



function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />}/>
        <Route path="/product" element={<Product />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
