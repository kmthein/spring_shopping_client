import './App.css'
import Main from './layout/Main';
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import Register from './pages/Register.tsx'
import CreateProduct from './pages/Products.tsx'
import Home from './pages/Home.tsx'
import ProductDetail from './pages/ProductDetail.tsx'
import ProductAdd from './pages/ProductAdd.tsx'
import Products from './pages/Products.tsx';
import { addProduct, getAllProducts } from './api/productApi.ts';
import { useEffect, useState } from 'react';
import Login from './pages/Login.tsx';
import About from './pages/About.tsx';
import Cart from './pages/Cart.tsx';
import AddCategory from './pages/AddCategory.tsx';
import CategoryList from './pages/CategoryList.tsx';

function App() {
  const [products, setProducts] = useState([]);

  const initialProduct = {
    id: "",
    title: "",
    price: "",
    stock: "",
    image: "",
    category: "",
    description: ""
  }
  const [productInput, setProductInput] = useState(initialProduct);

  const inputChangeHandler = (e) => {
    setProductInput((prev) => ({...prev, [e.target.name]: e.target.value}));
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/products',
          element: <Products products={products} setProducts={setProducts} />
        },
        {
          path: '/add-new',
          element: <ProductAdd products={products} setProducts={setProducts} productInput={productInput} setProductInput={setProductInput} inputChangeHandler={inputChangeHandler} initialProduct={initialProduct} />
        },
        {
          path: '/products/:id',
          element: <ProductDetail />
        },
        {
          path: '/cart',
          element: <Cart />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/add-category',
          element: <AddCategory />
        },
        {
          path: '/category-list',
          element: <CategoryList />
        }
      ]
    }, 
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
