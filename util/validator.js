
import {body,validationResult} from "express-validator";


const validator=(req, res, next)=> {  
  const errors = validationResult(req);
   (!errors.isEmpty())?res.status(400).json(errors.array()):next();
}


export default validator;

