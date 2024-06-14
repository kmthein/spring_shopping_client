import React from "react";
import { Link } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";

const Product = ({ product }) => {
  return (
    <div className="product" style={{ marginBottom: "20px" }}>
      <div style={{ width: "300px", height: "300px" }}>
        <Link to={`/products/${product.id}`}>
          {product.images && product.images.length > 0 ? (
            <img
              src={`http://localhost:8080/${product?.images[0]?.filePath}`}
              alt={product.title}
              style={{
                objectFit: "contain",
                objectPosition: "center",
                width: "80%",
                height: "250px",
                margin: "0 auto",
              }}
            />
          ) : (
            <img
              src="https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg"
              alt={product.title}
              style={{
                objectFit: "contain",
                objectPosition: "center",
                width: "80%",
                height: "250px",
                margin: "0 auto",
              }}
            />
          )}
        </Link>
      </div>
      <div className="product-info">
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 600,
            margin: "10px 0",
            lineHeight: "1.5",
          }}
        >
          {product.title.slice(0, 30)}
          {product.title.length > 30 && "..."}
        </h3>
        {/* <div>
          <span>
            {
              [...Array(Math.floor(product.rating.rate))].map(() => (
                <IoStarSharp style={{color: "#FAC406", marginRight: "5px", fontSize: "20px"}} />
              ))
            }
          </span>
        </div> */}
        <p style={{ fontSize: "18px", fontWeight: 600, margin: "10px 0" }}>
          ${product.price}
        </p>
        {/* <div style={{ display: "flex", alignItems: "center" }}>
          <span>Size: </span>
          <span style={{ display: "flex", alignItems: "center" }}>
            <input
              type="radio"
              name="size"
              id="S"
              value="S"
              style={{ marginLeft: "5px" }}
            />
            <label style={{ marginLeft: "2px" }} htmlFor="S">
              S
            </label>
            <input
              type="radio"
              name="size"
              id="M"
              value="M"
              style={{ marginLeft: "5px" }}
            />
            <label style={{ marginLeft: "2px" }} htmlFor="M">
              M
            </label>
            <input
              type="radio"
              name="size"
              id="L"
              value="L"
              style={{ marginLeft: "5px" }}
            />
            <label style={{ marginLeft: "2px" }} htmlFor="L">
              L
            </label>
          </span>
        </div>
        <div>
          <Link to={`/products/${product.id}`}><button style={{background: "black", color: "white", border: 0, padding: "10px 20px", margin: "10px 0", marginRight: "10px", cursor: "pointer"}}>View</button></Link>
          <button onClick={() => handleDelete(product.id)} style={{background: "red", color: "white", border: 0, padding: "10px 15px", margin: "10px 0", cursor: "pointer"}}>Delete</button>
        </div> */}
      </div>
    </div>
  );
};

export default Product;
