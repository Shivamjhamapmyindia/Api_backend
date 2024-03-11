import DataModel from "../model/data.model.js";

async function getUserDetails (req, res) {
    try {
        const user = await DataModel.findOne({ "userDetails.UserId": req.params.userId });
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

async function getAllDetails (req, res) {
    try {
        const user = await DataModel.find();
        console.log(user)
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}
export { getUserDetails, getAllDetails }