import express from "express";
import {
  getUserDetails,
  getAllDetails,
} from "../../controller/getDetails.controller.js";
import addDetails from "../../controller/addDetails.controller.js";
// import {validationCheck,validationError} from "../../util/validator.js"
import validator from "../../util/validator.js";
import { body } from "express-validator";
const router = express.Router();

router.post(
  "/",
  body("userDetails.Name").isLength({ min: 3 }),
  body("userDetails.UserId").isLength({ min: 3 }).isAlphanumeric(),
  body("userDetails.Password").isLength({ min: 8 }),
  validator,
  addDetails
);
router.get("/:userId", getUserDetails);
router.get("/", getAllDetails);

export default router;
