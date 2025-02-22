import { Routes, Route } from 'react-router-dom'
import Products from '../Layout/Products/Products'
import Home from '../Layout/Home/Home'
import ProductsDetail from '@/Layout/ProductsDetail/ProductsDetail'
import Cart from '../Layout/Cart/Cart'
import Checkout from '../Layout/Checkout/Checkout'
import Contact from '../Layout/Contact/Contact'
import Blog from '../Layout/Blog/Blog'
import Found from '../Layout/Found/Found'
import About from '../Layout/About/About'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/product-detail/:id' element={<ProductsDetail />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout/:userId' element={<Checkout />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<Found />} />
    </Routes>
  )
}

export default AppRoutes
