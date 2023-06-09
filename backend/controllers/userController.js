const ErrorHandler = require("../Utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors")
const User = require("../models/userModel");
const sendToken = require("../Utils/jwtToke");

//register a user
exports.registerUser =  catchAsyncErrors(async(req,res,next)=>{
    const {name,email,password}= req.body;
    
    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:"this is a sample id",
            url:"profilePicUrl"
        }
    });
    sendToken(user,201,res);

    
}) 

//login user
exports.loginUser = catchAsyncErrors(async(req,res,next)=>{
    const {email,password}=req.body;

    //checking if   user has given password and wmial both

    if(!email || !password){
        return next("Please Enter Email & password",400);
    }

const user = await User.findOne({email}).select("+password");

        if(!user) {
            return next(new ErrorHandler("Invalid email or password",401));

        }

    const isPasswordMatched = user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or password",404));
    }
    sendToken(user,200,res);
})