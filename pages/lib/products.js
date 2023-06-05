
import mongoose , {model,Schema,models} from 'mongoose';
import {schema} from "./schema.js"


export const Product = mongoose.models.Product || mongoose.model('Product', schema);
      


  
  