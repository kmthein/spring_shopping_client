import React, { createRef, useEffect, useState } from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import Product from "../components/Product";
import Button from "./Button";
import AddProduct from "../components/AddProduct";
import { Link } from "react-router-dom";
import { addProduct, getAllProducts } from "../api/productApi";
import { FaPlus } from "react-icons/fa6";
import { api } from "../config/axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const res = await api.get('/all-products');
    setProducts(res.data);  
  }

  useEffect(() => {
    console.log(products);
    
    getAllProducts();
  }, [])

  return (
    <div className="l-wrap-inner" style={{padding: "0"}}>
      {/* <AddProduct
        inputChangeHandler={inputChangeHandler} handleAdd={handleAdd} productInput={productInput}
      /> */}
      <div style={{margin: "30px 0"}}>
        <div style={{display: 'flex', justifyContent: "space-between"}}>
        <h3 className="title center" style={{marginTop: "-30px"}}>All Products</h3>
          <Link to={"/add-new"}>
            <button style={{background: "#068179", color: "white", border: 0, padding: "10px 15px", marginTop: "10px", cursor: "pointer", display: "inline-flex", gap: "5px" }}>Add New Product <FaPlus /></button>
          </Link>
        </div>
        <div
          className="product-container"
          style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
        >
          {
            products && products.length > 0 ? (
              products.map((product) => (
                <Product product={product} key={product.id} />
              ))
            ) : (
              <p>Product Not Found</p>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Products;
