import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import { Product } from "@/types/Product"; // Đảm bảo import kiểu Product nếu cần
import { Card, Col, Row, Spin } from "antd";

const ProductList = () => {
  const { data: products, isLoading, isError } = useProducts();

  // Hiển thị Spinner khi đang tải dữ liệu
  if (isLoading) return <Spin size="large" />;

  // Hiển thị thông báo lỗi nếu có
  if (isError) return <div>Có lỗi xảy ra khi tải dữ liệu.</div>;

  return (
    <Row gutter={16}>
      {products?.map((product: Product) => (
        <Col span={8} key={product.id}> 
          <Card
            hoverable
            cover={<img alt={product.title} src={product.thumbnail} />}
          >
            <Card.Meta title={product.title} description={`Giá: ${product.price.toLocaleString()} VNĐ`} />
            <Link to={`/product/${product.id}`}>Xem chi tiết</Link>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
