import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { api } from "../config/axios";
import { useEffect, useState } from "react";

const ProductAdd = ({}) => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    const res = await api.get(`/all-category`);
    setCategories(res.data);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const initialInput = {
    title: "",
    price: "",
    category: "",
  };

  const [input, setInput] = useState(initialInput);

  const inputChangeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { title, price, category } = input;

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const addProductHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("category", category);
    if (selectedFiles && selectedFiles.length > 0) {
      selectedFiles.forEach((file) => {
        formData.append("files", file);
      });
    } else {
      formData.append("files", new Blob([]));
    }

    const res = await api.post(`/saveProduct`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    if (res.status == 200) {
      navigate("/products");
    }
  };

  return (
    <div
      style={{
        background: "#fcfcfc",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        borderRadius: "10px",
        width: "40%",
        margin: "20px auto",
        padding: "30px 0",
      }}
    >
      <form
        style={{ width: "100%" }}
        onSubmit={addProductHandler}
        encType="multipart/form-data"
        method="post"
      >
        <div style={{ width: "70%", margin: "0 auto" }}>
          <div>
            <h3 className="title" style={{ textAlign: "center" }}>
              Add Product
            </h3>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={inputChangeHandler}
              style={{
                padding: "5px",
                marginBottom: "15px",
                borderRadius: "5px",
                width: "100%",
                border: "1px solid #c9c9c9",
              }}
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              value={price}
              onChange={inputChangeHandler}
              style={{
                padding: "5px",
                marginBottom: "15px",
                borderRadius: "5px",
                width: "100%",
                border: "1px solid #c9c9c9",
              }}
            />
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input
              type="file"
              onChange={handleFileChange}
              style={{
                padding: "5px",
                marginBottom: "15px",
                borderRadius: "5px",
                width: "100%",
                border: "1px solid #c9c9c9",
              }}
              multiple
            />
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={inputChangeHandler}
              style={{
                padding: "5px",
                marginBottom: "15px",
                borderRadius: "5px",
                width: "100%",
                border: "1px solid #c9c9c9",
              }}
            >
              <option value="">Select One Category</option>
              {categories &&
                categories.length > 0 &&
                categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
            </select>
          </div>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              type="submit"
              style={{
                background: "#068179",
                color: "white",
                border: 0,
                padding: "10px 25px",
                marginTop: "10px",
                cursor: "pointer",
                display: "inline-flex",
                gap: "5px",
                borderRadius: "5px",
              }}
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductAdd;
