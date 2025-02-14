import { Form, Input, Button, message } from "antd";
import useCreateOrder from "../hooks/useCreateOrder";
import useCart from "../hooks/useCart";

const Checkout = () => {
  const { data: cartItems } = useCart();
  const { mutate: createOrder } = useCreateOrder();

  const onFinish = (values: any) => {
    const orderData = {
      ...values,
      items: cartItems,
    };
    createOrder(orderData);
    message.success("Đơn hàng đã được tạo!");
  };

  return (
    <div>
      <h1>Thanh toán</h1>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Tên">
          <Input name="name" required />
        </Form.Item>
        <Form.Item label="Địa chỉ">
          <Input name="address" required />
        </Form.Item>
        <Form.Item label="Số điện thoại">
          <Input name="phone" required />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Thanh toán
        </Button>
      </Form>
    </div>
  );
};

export default Checkout;
