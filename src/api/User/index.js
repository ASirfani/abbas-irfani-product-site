// src/api/userApi.js

import axios from './instance'; // Import your Axios instance here

const registerUser = async (userData) => {
  try {
    const response = await axios.post('users/register', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const loginUser = async (email, password) => {
  try {
    const response = await axios.post('users/login', { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const getUserProfile = async (userId) => {
  try {
    const response = await axios.get(`users/profile/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const updateUserProfile = async (userId, updatedData) => {
  try {
    const response = await axios.put(`users/profile/${userId}`, updatedData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
};
