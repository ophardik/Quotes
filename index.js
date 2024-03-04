const express=require("express");

const {connectToMongoDb}=require("./connections")
const userRoute=require("./routes/userRoute")
const app=express();


const PORT=8002;

app.use(express.json());

connectToMongoDb("mongodb://127.0.0.1:27017/QUOTES")
.then(()=>console.log("Connected to MongoDb"))
.catch((error)=> console.log("Error connecting to MongoDb",error));

app.use("/api",userRoute);

app.listen(PORT,()=>{
    console.log("Connected successfully");
})

