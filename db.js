import mongoose from "mongoose";

const url = "mongodb://localhost:27017";

async function connectDb(){
    await mongoose.connect(url);
    console.log("Connected to DB");
}

export {connectDb};