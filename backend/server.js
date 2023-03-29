const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");


//Handeling Uncaught Exception
process.on("uncaughtException", (err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
})



//config
 dotenv.config({path:"backend/config/config.env"});

connectDatabase();


const server = app.listen(process.env.Port,()=>{
    console.log(`server is working on http://localhost:${process.env.Port}`)
})


//unhandeled Promise Rejectiion
process.on("unhandledRejection",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`shutting down the server due to Unhandled Promise Rejection`);

    server.close(()=>{
        process.exit(1);

    })
})