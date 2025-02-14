import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/product/productService";
import { Product } from "@/types/Product"; // Đảm bảo đường dẫn này đúng

const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"], // Cách xác định khóa truy vấn
    queryFn: fetchProducts, // Hàm lấy dữ liệu
  });
};

export default useProducts;
