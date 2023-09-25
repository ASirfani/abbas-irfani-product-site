// src/api/productApi.js

import axios from './instance'; // Import your Axios instance here

const getAllProducts = async () => {
  try {
    const response = await axios.get('products');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const getProductById = async (productId) => {
  try {
    const response = await axios.get(`products/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const createProduct = async (productData) => {
  try {
    const response = await axios.post('products', productData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const updateProduct = async (productId, updatedData) => {
  try {
    const response = await axios.put(`products/${productId}`, updatedData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`products/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
