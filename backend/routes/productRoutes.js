const express =require("express");
const { getAllProducts,createproduct,updateProduct,deleteProduct,getProductDetails} = require("../controllers/productController");
const isAuthenticatedUser = require("../middleware/auth")
const router=express.Router();


router.route("/productss").get( isAuthenticatedUser , getAllProducts);

router.route("/product/new").post(createproduct);

router.route("/product/:id").put(updateProduct);

router.route("/product/:id").put(deleteProduct).delete(deleteProduct).get(getProductDetails);

module.exports  = router ;

