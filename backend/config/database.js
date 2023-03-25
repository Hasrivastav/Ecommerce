const mongoose = require('mongoose');
const express =require('express');

const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then((data)=>{
        console.log(`mongodb is connected withe server: ${data.connection.host}`);
    }).catch((error)=>{
        console.log(error);
    })
}
module.exports = connectDatabase;