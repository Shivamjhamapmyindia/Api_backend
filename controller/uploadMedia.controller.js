import DataModel from "../model/data.model.js";
import path from "path";

const currentModuleDir = new URL("../", import.meta.url).pathname;

async function uploadMedia(req, res) {
  try {
    const filePaths = req.files.map((file) => file.path);
    const userFile = filePaths.filter((items) =>
      items.includes(req.query.UserId)
    );
    // console.log(filePaths)
    // console.log(userFile);
    let userImg = userFile.filter((items) => items.includes("imgs"));
    let userVideo = userFile.filter((items) => items.includes("videos"));
    let userModel = userFile.filter((items) => items.includes("model"));
    // console.log(userImg, userVideo, userModel);

    // Join current directory path before full paths
    const joinCurrentDir = (files) =>
      files.map((file) => path.join(currentModuleDir, file));

    // Apply the function to userImg and userVideo
    userImg = joinCurrentDir(userImg);
    userVideo = joinCurrentDir(userVideo);   
    userModel = joinCurrentDir(userModel); 
    // console.log(userImg,userVideo,userModel)   
   
// const Data= await DataModel.findOne({"Property.propertyId":"shivam121_74"});
// console.log(Data)

  const user=await DataModel.updateOne({ "Property.propertyId": req.query.propertyId},
  {  
      $addToSet:{
      "Property.$.mediaDetails.Image":{ $each: userImg},
      "Property.$.mediaDetails.video":{ $each: userVideo },
      "Property.$.mediaDetails.model":{ $each: userModel },
    }
  },{new:true,upsert:false});
    
    res.send(user)
  }
   catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

export default uploadMedia;
