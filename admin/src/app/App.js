import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from '../features/Dashboard';
import Layout from '../components/layout/Layout';
import ListProducts from '../features/products/ListProducts';
import AddProduct from '../features/products/AddProduct';
import ProductDetails from '../features/products/ProductDetails';
import Cart from '../features/products/Cart';
import Checkout from '../features/products/Checkout';
import WishList from '../features/products/WishList';
import Customers from '../features/cutomers/Customers';
import ListAllCategories from '../features/category/ListAllCategories';
import AddCategory from '../features/category/AddCategory';
import AddSubCategory from '../features/category/AddSubCategory';
import ListMainCategories from '../features/category/ListMainCategories';
import Invoices from '../features/invoices/Invoices';
import InvoiceDetails from '../features/invoices/InvoiceDetails';

function App() {

  useEffect(() => {
    console.warn = () => {}
  }, [])
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='customers' element={<Customers />} />
          {/* Products */}
            <Route path='allproducts' element={<ListProducts />} />
            <Route path='addproducts' element={<AddProduct />} />
            <Route path='productsdetails' element={<ProductDetails />} />
            <Route path='productscart' element={<Cart />} />
            <Route path='productscheckout' element={<Checkout />} />
            <Route path='productswishlist' element={<WishList />} />
            {/* Categories */}
            <Route path='maincategories' element={<ListMainCategories />} />
            <Route path='addcategory' element={<AddCategory />} />
            <Route path='addsubcategory' element={<AddSubCategory />} />
            <Route path='allcategories' element={<ListAllCategories />} />
            {/* Invoices */}
            <Route path='allinvoices' element={<Invoices />} />
            <Route path='invoicedetails' element={<InvoiceDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
