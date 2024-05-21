import { boolean } from "zod";
import { Product } from "../Product/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrder = async (orderData: TOrder) => {

    // find the product by product ID
  const validIdProduct: any = await Product.findOne({
    _id: orderData.productId,
  });
    
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

const getAllOrders=async()=>{
    
}


export const orderServices = {
  createOrder,
};
