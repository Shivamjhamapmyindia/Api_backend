import exprss from "express";
import updateDetails from "../../controller/updateDetails.controller.js";
const router = exprss.Router();

router.post("/", updateDetails);

export default router

