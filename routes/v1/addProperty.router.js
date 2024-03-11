import express from "express";
import addpropertController from "../../controller/addProperty.controller.js";
const router = express.Router();


router.post("/:userId", addpropertController);

export default router