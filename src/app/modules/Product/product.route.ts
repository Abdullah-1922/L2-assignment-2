import express from  'express'
import { productController } from './product.controller'

const router = express.Router()

router.post('/',productController.createProduct)
router.get('/',productController.getAllProduct)
router.get('/:productId',productController.getProductByID)  
router.put('/:productId',productController.updateProductByID)  
router.delete('/:productId',productController.deleteProductByID)  



export const  productRouter = router


