import { Button, List, Spin } from "antd";
import useCart from "../hooks/useCart";

const Cart = () => {
  const { data: cartItems, isLoading } = useCart();

  if (isLoading) return <Spin size="large" />;

  return (
    <div>
      <h2>Giỏ hàng của bạn</h2>
      <List
        itemLayout="horizontal"
        dataSource={cartItems}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.title}
              description={`Giá: ${item.price} VNĐ`}
            />
          </List.Item>
        )}
      />
      <Button type="primary">Thanh toán</Button>
    </div>
  );
};

export default Cart;
