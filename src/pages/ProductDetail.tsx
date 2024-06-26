import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProductById, getSingleProduct } from "../api/productApi";
import { IoStarSharp } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import p1 from "../assets/pd1.png";
import p2 from "../assets/pd2.png";
import p3 from "../assets/pd3.png";
import p4 from "../assets/pd4.png";
import { cartStore } from "../store/cartStore";
import { Rating } from "@mui/material";

const ProductDetail = () => {
  const detailImg = [p1, p2, p3, p4];

  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const getSingleProductHandler = async () => {
    setLoading(true);
    const data = await getSingleProduct(id);
    setProduct(data);
    setLoading(false);
  };

  useEffect(() => {
    getSingleProductHandler();
  }, []);

  const increaseCartHandler = cartStore((state) => state.increaseItem);

  const navigate = useNavigate();

  const deleteProductHandler = async (id) => {
    const data = await deleteProductById(id);
    console.log(data);
    navigate("/products");
  };

  return (
    <div style={{ background: "#FFF" }}>
      {!loading ? (
        <div className="l-wrap-inner">
          <h2 className="title">Product Details</h2>
          <div style={{ display: "flex", gap: "50px" }}>
            <div style={{ height: "400px", width: "50%" }}>
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
              <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                {detailImg.map((img) => (
                  <div
                    style={{
                      border: "2px solid #f4f2f2",
                      height: "130px",
                      width: "25%",
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      src={img}
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                        margin: "0 auto",
                        objectFit: "contain",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div style={{ width: "50%" }}>
              <h4
                style={{
                  fontSize: "23px",
                  fontWeight: "700",
                  marginBottom: "15px",
                }}
              >
                {product?.title}
              </h4>
              <div>
                {product.rating && (
                  <span>
                    <Rating
                      name="half-rating-read"
                      defaultValue={product.rating?.rate}
                      precision={0.5}
                      readOnly
                    />
                    {/*   */}
                  </span>
                )}
              </div>
              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  margin: "20px 0",
                }}
              >
                ${product?.price}
              </h4>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  style={{
                    backgroundColor: "#363caf",
                    color: "white",
                    border: 0,
                    borderRadius: "5px",
                    padding: "10px 20px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProductHandler(product.id)}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: 0,
                    borderRadius: "5px",
                    padding: "10px 15px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
              {/* <button onClick={increaseCartHandler} style={{backgroundColor: "#068179", color: "white", border: 0, borderRadius: "5px", padding: "15px", display: "inline-flex", alignItems: "center", gap: "10px", cursor: "pointer"}}>Add to cart <FaCartPlus /></button> */}
              {/* <p style={{lineHeight: "2", marginTop: "20px"}}>{product?.description}</p> */}
              <ul className="detail-list">
                <li>Crafted with premium quality materials.</li>
                <li>Made from soft and breathable.</li>
                <li>Relaxed fit with adjustable drawstring hood.</li>
                <li>Available in a range of sizes and colors.</li>
                <li>
                  Versatile enough to pair with jeans, leggings, or joggers.
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
