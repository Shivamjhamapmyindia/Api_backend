import express from "express";
import { upload } from "../../middleware/multer.middleware.js";
import { getAllFiles, getUserFile} from "../../controller/getFiles.controller.js";
import uploadMedia from "../../controller/uploadMedia.controller.js";

const router = express.Router();

router.post("/", upload.array("file", 20),uploadMedia)

router.get("/", getAllFiles)
router.get("/:userId",(getUserFile))    
export default router;
