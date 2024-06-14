import "./App.css";
import Main from "./layout/Main";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register.tsx";
import CreateProduct from "./pages/Products.tsx";
import Home from "./pages/Home.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import ProductAdd from "./pages/ProductForm.tsx";
import Products from "./pages/Products.tsx";
import { addProduct, getAllProducts } from "./api/productApi.ts";
import { useEffect, useState } from "react";
import Login from "./pages/Login.tsx";
import About from "./pages/About.tsx";
import Cart from "./pages/Cart.tsx";
import AddCategory from "./pages/AddCategory.tsx";
import CategoryList from "./pages/CategoryList.tsx";
import EditProduct from "./pages/EditProduct.tsx";
import AddProduct from "./pages/AddProduct.tsx";

function App() {
  const [products, setProducts] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/add-product",
          element: <AddProduct />,
        },
        {
          path: "/edit-product/:id",
          element: <EditProduct />,
        },
        {
          path: "/products/:id",
          element: <ProductDetail />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/add-category",
          element: <AddCategory />,
        },
        {
          path: "/category-list",
          element: <CategoryList />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
