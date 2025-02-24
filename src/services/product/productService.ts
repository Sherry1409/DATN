import axios from "axios";


export const fetchProducts = async () => {
  const response = await axios.get("/products");
  return response.data;
};

export const fetchProductById = async (id: string) => {
  const response = await axios.get(`/products/${id}`);
  return response.data;
};
