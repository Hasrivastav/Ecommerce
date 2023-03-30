const cookieParser = require('cookie-parser');
const express = require('express');
const app=express();
const errorMiddleware = require("./middleware/error")

app.use(express.json());
app.use(cookieParser());
//route import
 const product = require("./routes/productRoutes")
 const user = require("./routes/userRoute");
 
 app.use("/api/v1",product);
 app.use("/api/v1",user);

 //midddele ware for error;
app.use(errorMiddleware);



module.exports = app;