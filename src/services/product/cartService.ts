

export const fetchCart = async () => {
  // Giả lập giỏ hàng (có thể lưu trữ trong localStorage hoặc state)
  return [];
};

export const addToCart = async (productId: string) => {
  // Giả lập thêm sản phẩm vào giỏ hàng
  return { success: true, productId };
};

export const removeFromCart = async (cartItemId: string) => {
  // Giả lập xóa sản phẩm khỏi giỏ hàng
  return { success: true, cartItemId };
};
