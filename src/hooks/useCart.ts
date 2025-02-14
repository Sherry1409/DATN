import { useQuery } from "@tanstack/react-query";
import { fetchCart } from "../services/product/cartService";

const useCart = () => {
  return useQuery(["cart"], fetchCart);
};

export default useCart;
