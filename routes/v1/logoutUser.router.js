import express from "express";
// import loginUser from "./loginUser.router.js"

const router = express.Router();


router.get('/',(req,res)=>{
if(req.cookies.AuthToken){
    res.clearCookie("AuthToken")
    res.send("Logout Successful")
}
else{
    res.send("Already Logged Out")
}

})

export default router