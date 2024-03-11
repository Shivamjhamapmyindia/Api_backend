import express from "express";
import multer from "multer";
const app = express();

// Set dynamic destination based on file type

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let uploadPath = "";

    // Determine the destination based on file type or other criteria
    if (file.mimetype.includes("image")) {
      uploadPath = "./public/imgs";
    } else if (file.mimetype.includes("video")) {
      uploadPath = "./public/videos";
    } else {
      uploadPath = "./public/modelType";
    }

    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    // Customize the filename logic as needed
    cb(null, req.query.propertyId + "_" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "model/glb-binary" ||
      file.mimetype == "model/gltf+json" ||
      file.mimetype == "model/gltf-binary" ||
      file.mimetype == "video/mp4" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/png"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(
        new Error(
          "only .png , .jpg for images or  .mp4 for videos and .gltf and .glb format for model is allowed!"
        )
      );
    }
    // console.log("file.path",file)
  },
});

export { upload };
