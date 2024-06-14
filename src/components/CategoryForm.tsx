import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../config/axios";

const CategoryForm = () => {
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const addCategoryHandler = async (e) => {
    e.preventDefault();
    const res = await api.post("/saveCategory", { name: category });
    if (res.status == 200) {
      navigate("/category-list");
    }
  };

  return (
    <div>
      <form
        onSubmit={addCategoryHandler}
        action=""
        style={{
          background: "#fcfcfc",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          borderRadius: "10px",
          width: "30%",
          margin: "0 auto",
          padding: "50px",
        }}
      >
        <h1 className="title">Add Category</h1>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text_input"
            style={{ padding: "0 5px" }}
            required
          />
        </div>
        <div style={{ margin: "30px 0" }}>
          <button
            type="submit"
            style={{
              padding: "15px 0",
              width: "100%",
              backgroundColor: "#068179",
              color: "#FFF",
              border: 0,
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
