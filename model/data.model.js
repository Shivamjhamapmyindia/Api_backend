import mongoose from "mongoose";
const detailsSchema = new mongoose.Schema({
    Uid2: String,
    state: String,
    city: String,
    area: String,
    pinCode: Number,
    sector: String,
    name: String,
    developerName: String,
    categories: String,
    sub_categories: String,
    eLoc: String,
    lng: Number,
    lat: Number,
    mapBound: {
      type: [Number],
    },
    mapHeading: Number,
    code: String,
    mapPitch: Number,
    mapZoom: Number,
    labelInfoBoard: [String],
    Boundary: {
      type: [[Number]],
      default: [[], []],
    },
    boundaryColor: String,
    realViewTripId: String,
    IndoorRealViewTripId: String,
  });
  
  // Define the schema for mediaDetails within the Property
  const mediaDetailsSchema = new mongoose.Schema({
    model: [String],
    Image: [String],
    video: [String],
  });
  
  // Define the schema for the Property
  const propertySchema = new mongoose.Schema({
    propertyId: String,
    status:Boolean,
    details: detailsSchema,
    mediaDetails: mediaDetailsSchema,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  
  // Define the schema for userDetails
  const userDetailsSchema = new mongoose.Schema({
    Name: String,
    UserId: String,
    Password: String,
    Number: String,
    Location: String,
    otherDetails: String,
  },{strict:false,collection:"datas"});
  
  // Define the main schema incorporating userDetails and Property
  const dataSchema = new mongoose.Schema({
    userDetails: userDetailsSchema,
    Property: [{
      propertyId: String,
      type: Object,
      of: propertySchema,
  }],

  },{strict:false,collection:"datas",toJSON: { virtuals: true }});
  
  // Create the Mongoose model
  const DataModel = mongoose.model('Datas', dataSchema);

export default DataModel;
