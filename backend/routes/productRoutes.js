const express =require("express");
const { getAllProducts,createproduct,updateProduct,deleteProduct,getProductDetails} = require("../controllers/productController");

const router=express.Router();


router.route("/productss").get(getAllProducts);

router.route("/product/new").post(createproduct);

router.route("/product/:id").put(updateProduct);

router.route("/product/:id").put(deleteProduct).delete(deleteProduct).get(getProductDetails);

module.exports  = router ;

