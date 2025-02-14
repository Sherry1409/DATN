import { useMutation } from "@tanstack/react-query";
import { createOrder } from "../services/product/orderService";

const useCreateOrder = () => {
  return useMutation(createOrder);
};

export default useCreateOrder;
