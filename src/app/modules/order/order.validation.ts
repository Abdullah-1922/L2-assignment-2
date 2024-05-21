import { z } from "zod";
const orderValidationSchema = z.object({
  email: z.string().email(),
  productId: z.string(),
  price: z.number(),
  quantity: z.number().min(1, "Quantity can not be less than 1"),
});

export default orderValidationSchema;
