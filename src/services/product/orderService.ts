import axios from "axios";


export const createOrder = async (orderData: any) => {
  const response = await axios.post("/orders", orderData);
  return response.data;
};
