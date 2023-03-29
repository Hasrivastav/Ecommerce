const mongoose = require('mongoose');
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken")
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter your name"],
        maxLength:[30,"Name cannot exceed 30 charachters"],
        minLength:[4,"name should have more than 4 characters"],

    },

    email :{
        type:String,
        required:[true,"please enter your email"],
        unique:true,
        validate:[validator.isEmail,"Please enter valid detail"]

    },

    password:{
        type:String,
        required:[true,"Please enter your password"],
        minLength:[8,"Password should be greater than 8 charachters"],
        select:false  //password will not be displaed in response in database

     },

     avatar:{
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
    },

    role:{
        type:String,
        default:"user"
    },

    resetPasswordToken:String,
    resetPasswordExpire:Date,
     
})

//encrypting the password

userSchema.pre("save",async function(next){

    if(!this.isModified("password")){
  next();
    }
this.password =await bcryptjs.hash(this.password,10)
});

//JWT token
userSchema.methods.getJWTToken = function(){
    return  jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRE,
    })
}



module.exports = mongoose.model("User",userSchema)