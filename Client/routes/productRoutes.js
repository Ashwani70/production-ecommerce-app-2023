import express from "express"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js"
import { brainTreePaymentController, braintreeTockenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, realtedProductController, searchProductController, updateProductController } from "../controllers/productController.js"
import formidable from "express-formidable"

const router = express.Router()

//routes
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController)

router.put('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController)
//get products
router.get('/get-product', getProductController)

//single product
router.get('/get-product/:slug', getSingleProductController)

//get photo
router.get('/product-photo/:pid', productPhotoController)

//delet product
router.delete("/delete-product/:pid", deleteProductController)

//filter Product

router.post('/product-filters', productFiltersController)

//product cout
router.get('/product-count', productCountController)

//product per page
router.get('/product-list/:page', productListController)

//serch producr
router.get('/search/:keyword', searchProductController)

//similar product
router.get('/related-product/:pid/:cid', realtedProductController)

//category wise product

router.get('/product-category/:slug', productCategoryController)

//payments routes
//tocken
router.get('/braintree/token', braintreeTockenController)

//payment
router.post('/braintree/payment', requireSignIn, brainTreePaymentController)

export default router;