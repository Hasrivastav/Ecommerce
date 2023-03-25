const express =require("express");
const { getAllProducts,createproduct } = require("../controllers/productController");

const router=express.Router();


router.route("/product").get(getAllProducts);

router.route("/product/new").post(createproduct);


module.exports  = router ;

