const mongoose = require('mongoose');
const express =require('express');

const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then((data)=>{
        console.log(`mongodb is connected withe server: ${data.connection.host}`);
    })
}
module.exports = connectDatabase;