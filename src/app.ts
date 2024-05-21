import express, { Request, Response } from "express";
import { productRouter } from "./app/modules/Product/product.route";
import { orderRouter } from "./app/modules/order/order.route";

const app = express();

//parsers
app.use(express.json());

//routers
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
