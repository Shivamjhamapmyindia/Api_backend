import express from "express";
import detailsRoute from "./details.router.js";
import uploadFileRoute from "./uploadFile.router.js";
import updateDetailsRoute from "./updateDetails.router.js";
import loginUser from "./loginUser.router.js";
import logoutUser from "./logoutUser.router.js"
import addPropertyRoute from "./addProperty.router.js";
const router = express.Router();

router.use("/details",detailsRoute)
router.use("/uploadFile",uploadFileRoute)
router.use("/updateDetails",updateDetailsRoute)
router.use('/getFiles',uploadFileRoute) 
router.use('/loginUser',loginUser)  
router.use('/logoutUser',logoutUser)
router.use('/addProperty',addPropertyRoute)

export default router