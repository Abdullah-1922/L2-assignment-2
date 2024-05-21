import { Request, Response } from "express";
import { productServices } from "./product.service";
import ProductValidationSchema from "./product.validation";


const createProduct = async (req: Request, res: Response) => {
  try {
    //data validation using zod
    const productData = req.body;
    const zodParsedData = ProductValidationSchema.parse(productData);

    const result = await productServices.createProductToDB(zodParsedData);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Product add failed",
      data: err,
    });
  }
};
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const query = req.query.searchTerm;
    // console.log(query);
    const result = await productServices.getProductFromDB(query);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Products fetched failed",
      data: err,
    });
  }
};
const getProductByID = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getProductByID(productId);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Product fetched failed",
      data: err,
    });
  }
};
const updateProductByID = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;
    const zodParsedData = ProductValidationSchema.parse(productData);

    const result = await productServices.updateProductByID(
      productId,
      zodParsedData
    );
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (err:any) {
    res.status(500).json({
      success: false,
      message: err.message || "Product updated failed",
      data: err,
    });
  }
};
const deleteProductByID = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await productServices.deleteProductByID(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Product deleted  failed",
      data: err,
    });
  }
};

export const productController = {
  createProduct,
  getAllProduct,
  getProductByID,
  updateProductByID,
  deleteProductByID,
};
