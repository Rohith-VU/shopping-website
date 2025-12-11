import axios from 'axios';
const API_URL = 'https://dummyjson.com/products';

export const getProducts = (limit=12) => axios.get(`${API_URL}?limit=${limit}`);
export const getProduct = (id) => axios.get(`${API_URL}/${id}`);
