import express from "express";
import apiRoutes from "./routes/index.js";
import {connectDb} from "./db.js";
import cors from "cors";
import "dotenv/config.js"
import cookieParser from "cookie-parser";
const app = express();
// const port = process.env.PORT || 5000;
const port = 5000


connectDb();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({ extended: true })
);


app.get("/", (req, res) => {
    setTimeout(() => {
        res.send("Hello World!");
    },240000)
}) 

app.post("/", (req, res) => {
    setTimeout(() => {
        res.send("Hello World!");
    },60000)
})
app.use("/api",apiRoutes);

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})