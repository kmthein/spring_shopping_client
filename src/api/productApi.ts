import { api } from "../config/axios";

export const getAllProducts = async () => {
    const response = await api.get("/products");
    return response.data;
}

export const getSingleProduct = async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
}

export const addProduct = async (product) => {
    const response = await api.post(`/products`, product);
    return response;
}

export const userLogin = async (user) => {
    try {
        const response = await api.post('/auth/login', user);
        return response;
      } catch (error) {
        return error.response;
      }
}