import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductToDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getProductFromDB = async (query: any) => {
  console.log(query);
  // if there is a searchTerm query
  if (query) {
    const result = await Product.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
        { tags: { $regex: query, $options: "i" } },
      ],
    });
    return result;
  }

  const result = await Product.find({});

  return result;
};
const getProductByID = async (productId: string | number) => {
  const result = await Product.findOne({ _id: productId });
  return result;
};
const updateProductByID = async (
  productId: string | number,
  updateData: any
) => {
  const result = await Product.findByIdAndUpdate(
    { _id: productId },
    updateData,
    {
      new: true,
    }
  );
  return result;
};
const deleteProductByID = async (productId: string | number) => {
  const result = await Product.deleteOne({ _id: productId });
  return result;
};

export const productServices = {
  createProductToDB,
  getProductFromDB,
  getProductByID,
  updateProductByID,
  deleteProductByID,
};
