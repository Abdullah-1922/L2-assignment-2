import { Product } from "../Product/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrder = async (orderData: TOrder) => {
  // find the product by product ID
  const validIdProduct = await Product.findById(orderData.productId);
  if (!validIdProduct) {
    throw new Error("Product ID not found");
  }

  if (validIdProduct.inventory.quantity < orderData.quantity) {
    throw Error("Insufficient quantity available in inventory");
  }
  // create order
  const result = await Order.create(orderData);
  // if the order is created than ..
  if (result._id) {
    const remainingStock =
      validIdProduct.inventory.quantity - orderData.quantity;
    const inStock = remainingStock > 0;
    await Product.updateOne(
      { _id: orderData.productId },
      { "inventory.quantity": remainingStock, "inventory.inStock": inStock }
    );
  }
  return result;
};

const getAllOrders = async (query: any) => {
  if (query) {
    const result = Order.find({ email: query });
    return result;
  }

  const result = Order.find({});
  return result;
};

export const orderServices = {
  createOrder,
  getAllOrders,
};
