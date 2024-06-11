import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";
import { getAllProducts } from "../api/productApi";
import { FaPlus } from "react-icons/fa6";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getAllProductsHandler = async () => {
    const data = await getAllProducts();
    setProducts(data);  
  }

  useEffect(() => {
    getAllProductsHandler();
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
