import express from "express";
import loginUserController from "../../controller/loginUser.controlller.js";
import validator from "../../util/validator.js";
import { body } from "express-validator";   

const router = express.Router();

router.post(
  "/",
  body("UserId").isLength({ min: 3 }).isAlphanumeric(),
  body("Password").isLength({ min: 8 }),
  validator,
  loginUserController
);

export default router;
