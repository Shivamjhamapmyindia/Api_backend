import { cookie } from "express-validator";
import DataModel from "../model/data.model.js";
import { decrypt } from "../util/bcrypt.js";
import jwt from "jsonwebtoken";
const SECRET_KEY="shivamjha"


async function loginUserController(req, res) {
    if(!req.cookies.AuthToken){     
        try{
            const user=await DataModel.findOne({ "userDetails.UserId": req.body.UserId});
            const password= user.userDetails.Password
            const iscorrect=await decrypt(req.body.Password,password)
            if(iscorrect){
                //Genrate token
                const token=jwt.sign({UserId:user.userDetails.UserId},SECRET_KEY,{expiresIn:"1h"})
                user.userDetails.token=token    
               
                return res.status(200).cookie("AuthToken",token,{httpOnly:true,}).json({message:"login Successful",user,token});
            }
            else{
                return res.status(404).json("Wrong Password");
            }
        }catch(error){
            res.status(500).json({ message: "Wrong UserId", error: error.message });
        }}
    else{
        res.send("Already Logged In")
    }
}

export default loginUserController