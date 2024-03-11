import DataModel from "../model/data.model.js";

async function addProperty(req, res) {
    const userId = req.params.userId
    const number = Math.floor(Math.random() * 100);
    // const propertyNo = `property${number}`;

    try {   
        const user = await DataModel.findOne({ "userDetails.UserId": userId });
        console.log(user)

        if (user) {
          
         
               
                
                // user.Property.set(propertyNo, req.body);
                user.Property.push({
                    ...req.body,
                    propertyId: userId + '_' + number,
                  });              


                await user.save();
                res.status(200).json(user);
            
        } else {
            res.status(404).send("User not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

export default addProperty;
