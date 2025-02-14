import { useParams } from "react-router-dom";
import useProductDetail from "../hooks/useProductDetail";
import { Card, Spin, Button } from "antd";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading } = useProductDetail(id); // Chỉ cần truyền id vào

  if (isLoading) return <Spin size="large" />;

  return (
    <Card title={product.title}>
      <img alt={product.title} src={product.thumbnail} />
      <p>{product.description}</p>
      <p>Giá: {product.price} VNĐ</p>
      <Button onClick={() => {/* handle add to cart */}}>Thêm vào giỏ hàng</Button>
    </Card>
  );
};

export default ProductDetail;
