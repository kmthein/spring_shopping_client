import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import { api } from "../config/axios";
import { useEffect, useState } from "react";
import { getSingleProduct } from "../api/productApi";
import { MdDeleteForever } from "react-icons/md";

const ProductForm = ({ editMode }) => {
  const navigate = useNavigate();

  const { id: pId } = useParams();

  const [oldProduct, setOldProduct] = useState({});

  const initialInput = {
    title: "",
    price: "",
    category: "",
  };

  const getOldProductDetail = async () => {
    const data = await getSingleProduct(pId);
    console.log(data);

    setInput({
      ...input,
      title: data.title,
      price: data.price,
      category: data.category.id,
    });
    setOldProduct({ ...oldProduct, images: data.images, id: data.id });
  };

  const [categories, setCategories] = useState([]);
  const getAllCategories = async () => {
    const res = await api.get(`/all-category`);
    setCategories(res.data);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const [input, setInput] = useState(initialInput);

  useEffect(() => {
    if (editMode) {
      getOldProductDetail();
    }
  }, []);

  const inputChangeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { id, title, price, category } = input;

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const deleteImageHandler = (id) => {
    const filterImage = oldProduct.images.filter((img) => img.id != id);
    setOldProduct({ ...oldProduct, images: filterImage });
  };

  console.log(oldProduct.images);

  const productSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("category", category);
    if (!editMode) {
      if (selectedFiles && selectedFiles.length > 0) {
        selectedFiles.forEach((file) => {
          formData.append("files", file);
        });
      } else {
        formData.append("files", new Blob([]));
      }
    } else {
      formData.append("id", oldProduct.id);
      formData.append("category", category);
      if (oldProduct.images.length > 0) {
        oldProduct.images.forEach((img) => {
          formData.append("existingImgIds", img.id);
        });
      }
      if (selectedFiles.length > 0) {
        selectedFiles.forEach((file) => {
          formData.append("files", file);
        });
      } else {
        formData.append("files", new Blob([]));
      }
    }
    try {
      const res = await api.post(`/saveProduct`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.status == 200) {
        navigate("/products");
      }
    } catch (error) {
      console.error("Something went wrong: ", error);
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
        onSubmit={productSubmitHandler}
        encType="multipart/form-data"
        method="post"
      >
        <div style={{ width: "70%", margin: "0 auto" }}>
          <div>
            <h3 className="title" style={{ textAlign: "center" }}>
              {editMode ? "Edit" : "Create"} Product
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
            {editMode && oldProduct?.images?.length > 0 && (
              <div style={{ display: "flex", gap: "20px" }}>
                {oldProduct.images.map((img) => (
                  <div style={{ position: "relative" }}>
                    <img
                      src={`http://localhost:8080/${img.filePath}`}
                      alt={img.fileName}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                    <MdDeleteForever
                      onClick={() => deleteImageHandler(img.id)}
                      style={{
                        color: "red",
                        position: "absolute",
                        right: 0,
                        cursor: "pointer",
                        fontSize: "20px",
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
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
              {!editMode && <option value="">Select One Category</option>}

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

export default ProductForm;
