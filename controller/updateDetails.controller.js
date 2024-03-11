import DataModel from "../model/data.model.js";

async function updateDetails(req, res) {
  const userId = req.query.UserId;
  const propertyId=req.query.propertyId

  console.table({userId,propertyId})  

  const user = await DataModel.findOne({ "Property.propertyId": propertyId });
  // console.log(user)
 if(user){
  try {
    const data=await DataModel.updateOne({ "Property.propertyId": req.query.propertyId },
    {  
        $set:{
        "Property.$.details":{...req.body},
     
      }
    },{new:true,upsert:false});
    
    res.status(200).json(data);
    
  } catch (error) {
    res.status(500).json({error:error.message});
  }}
  else{
    res.status(404).json({"message":"user not found"});
  }
}

export default updateDetails;
