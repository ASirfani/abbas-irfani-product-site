import { axios } from '../Instance';

const getOrders = async () => {
    try {
        const response = await axios.get('orders');
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

const getOrderById = async (orderId) => {
    try {
        const response = await axios.get(`orders/${orderId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

const createOrder = async (userId, orderItems) => {
    try {
        const response = await axios.post('orders', { userId, orderItems });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

const updateOrder = async (orderId, order) => {
    try {
        const response = await axios.put(`orders/${orderId}`, order);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

const deleteOrder = async (orderId) => {
    try {
        const response = await axios.delete(`orders/${orderId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

const checkOrder = async (userId, cropId, status) => {
    try {
      const response = await axios.post('/orders/checks', { userId, cropId, status });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  };


export { getOrders, getOrderById, createOrder, updateOrder, deleteOrder,checkOrder};
