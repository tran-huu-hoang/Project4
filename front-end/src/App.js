import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './page/Cart';
import Category from './page/Category';
import Checkout from './page/Checkout';
import CheckoutPayment from './page/CheckoutPayment';
import CheckoutShipping from './page/CheckoutShipping';
import ForgottenPassword from './page/ForgottenPassword';
import Home from './page/Home';
import Login from './page/Login';
import Product from './page/Product';
import Register from './page/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/category' element={<Category />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkoutPayment' element={<CheckoutPayment />} />
          <Route path='/checkoutShipping' element={<CheckoutShipping />} />
          <Route path='/forgottenPassword' element={<ForgottenPassword />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product' element={<Product />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
