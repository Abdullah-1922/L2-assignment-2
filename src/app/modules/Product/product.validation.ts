import { z } from "zod";
// Zod schema for TVariant
const VariantValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
});

// Zod schema for TInventory
const InventoryValidationSchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

// Zod schema for TProduct
const ProductValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(VariantValidationSchema),
  inventory: InventoryValidationSchema,
});

export default ProductValidationSchema;
