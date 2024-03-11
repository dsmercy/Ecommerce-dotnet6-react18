import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Login from './account/Login';
import Register from './account/Register';
import './App.css';
import Privacy from './components/Privacy';
import Trending from './components/Trending';
import Basket from './features/Basket/Basket';

import Home from './features/Home';
import ProductDetails from './features/Product/ProductDetails';
import ProductList from './features/Product/ProductsList';
import CustomerLayout from './layout/CustomerLayout';

function App() {

  // set default theme
  useEffect(() => {
    document.documentElement.setAttribute('class', 'dark');
    localStorage.setItem('theme', 'dark');
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<CustomerLayout />}>
          <Route index element={<Home />} />
          <Route path='/productslist' element={<ProductList />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/productdetails' element={<ProductDetails />} />
          <Route path='/cart' element={<Basket />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>

    </>
  );
}

export default App;
