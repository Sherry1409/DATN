import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/product/homePage'
import ProductPage from './pages/product/productsPage'
import CartPage from './pages/product/cartpage'
import CheckoutPage from './pages/product/checkoutPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
      </Routes>
    </Router>
  )
}

export default App
