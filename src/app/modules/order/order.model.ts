import mongoose from "mongoose";
import { TOrder } from "./order.interface";

export const orderSchema = new mongoose.Schema<TOrder>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: {
    type: Number,
    required: true,
  },
});

export const Order= mongoose.model<TOrder>('Order',orderSchema)
 