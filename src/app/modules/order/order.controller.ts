import { Request, Response } from "express";
import { orderServices } from "./order.service";

import orderValidationSchema from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    // console.log(req.body);

    const zodValidateData = orderValidationSchema.parse(req.body);
    // console.log(zodValidateData);
    const result = await orderServices.createOrder(zodValidateData);

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      date: result,
    });
  } catch (err: any) {
    res.status(200).json({
      success: false,
      message: err.message || "Order create failed!",
      date: err,
    });
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  try {
    // console.log(req.body);
    const query = req.query.email;

    const result = await orderServices.getAllOrders(query);

    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      date: result,
    });
  } catch (err: any) {
    res.status(200).json({
      success: false,
      message: err.message || "Orders fetched failed!",
      date: err,
    });
  }
};

export const orderController = {
  createOrder,
  getAllOrder,
};
