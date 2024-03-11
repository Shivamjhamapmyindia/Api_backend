import  {imgsPath,videosPath} from "../middleware/pathFinder.js"
async function getAllFiles (req, res) {
    try {
    res.send({img:imgsPath,video:videosPath})
       
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}


async function getUserFile (req, res) {
    try {
        const user=req.params.userId  
    //    console.log(req.params.userId)
       let userImg = imgsPath.filter(items => items.includes(user));
        let userVideo = videosPath.filter(items => items.includes(user));
        res.send({img:userImg,video:userVideo})
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}



export {getAllFiles,getUserFile}