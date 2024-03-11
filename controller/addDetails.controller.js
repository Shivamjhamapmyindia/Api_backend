import DataModel from "../model/data.model.js";
import { encrypt } from "../util/bcrypt.js";

async function addDetails(req, res) {
    console.log(req.body);
    try {
        const user = await DataModel.findOne({ "userDetails.UserId": req.body.userDetails.UserId });

        if (user) {
            return res.status(201).json( "User already exists");
        } else {
            const userId = req.body.userDetails.UserId;
            const propertyId = userId + '_' + Math.floor(Math.random() * 100);
            console.log(propertyId);

            const hashedPassword = await encrypt(req.body.userDetails.Password);
            req.body.userDetails.Password = hashedPassword;

            
            if (req.body.Property && req.body.Property.property) {
                req.body.Property.property.propertyId = propertyId;
            }

            const data = await DataModel.create({ ...req.body });
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export default addDetails;
