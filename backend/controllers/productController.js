
const Product = require("../models/productModel");
const bodyParser = require("body-Parser");
const ErrorHandler = require("../Utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors")
const Apifeatures = require("../Utils/apifeatures")

//Create product
exports.createproduct = catchAsyncErrors(async(req,res,next)=>{
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })

}) 

//get All Product
exports.getAllProducts = catchAsyncErrors (async (req,res) => {
    const resultPerPage = 5;  //5 product on each page
    //it helps to shwo produc tin dashboard
    const productCount = await Product.countDocuments();

    // creating a opject apifeatur of  Apifeature class passing arguements in method
   const apiFeature = new Apifeatures(Product.find(),req.query).search().filter().pagination(resultPerPage);
     const products = await apiFeature.query;

    res.status(200).json({
        success:true,
        products,
        productCount
        })
})



exports.updateProduct = catchAsyncErrors (async (req,res,next) =>{
    let product = await  Product.findById(req.params.id)
    
    
    if(!product){
        return next(new ErrorHandler("product not found",404) );
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,
    runValidators:true,
useFindAndModify:false});

res.status(200).json({success:true,
    product
})}
)


//get Product details 
exports.getProductDetails = catchAsyncErrors (async(req,res,next)=>{

    const product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("product not found",404) );
    }

    res.status(200).json({
        success:true,
        product,
        productCount
       })

})


//Update product --admin
exports.deleteProduct = catchAsyncErrors (async(req,res)=>{
    let product = await Product.findById(req.params.id);
    
    if(!product){
        return next(new ErrorHandler("product not found",404) );
    }
   await  product.remove();

   res.status(200).json({
    success:true,
    message:"product deleted successfully"
   })

})