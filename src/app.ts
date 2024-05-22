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
  res.send("server is running!");
});
app.use("*", (req: Request, res: Response) => {
  res.send({
    Error: true,
    message: "Route not Found",
    validRoutes: "/api/products and /api/orders",
  });
});
export default app;
