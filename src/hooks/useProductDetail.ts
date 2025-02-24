import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../services/product/productService";

const useProductDetail = (id: string) => {
    return useQuery(["product", id], () => fetchProductById(id))
};


export default useProductDetail;
