import { api } from "../config/axios";

export const getAllProducts = async () => {
  const response = await api.get("/all-products");
  return response.data;
};

export const getSingleProduct = async (id) => {
  const response = await api.get(`/product/${id}`);
  return response.data;
};

export const userLogin = async (user) => {
  try {
    const response = await api.post("/auth/login", user);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const deleteProductById = async (id) => {
  const response = await api.get(`/delete-product/${id}`);
  return response;
};
