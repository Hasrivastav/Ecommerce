
//create token and savin gin cookie



const sendToken =(user,satusCode,res) =>{
    const token = user.getJWTToken();

    //options for cookies

    const options  = {
        expires:new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 *1000
        ) ,
        httpOnly :true
    }
    res.status(satusCode).cookie("token",token,options).json({
        success:true,
        user,token,
    })
}

module.exports = sendToken;