
import mongoose , {model,Schema,models} from 'mongoose';
import {schema} from "./schema.js"


export const Product = mongoose.models.Product || mongoose.model('Product', schema);
      

//     if(method === 'POST'){
        
//         await Product.create({ name:name,description:description,price:price,images:images,category:category,properties:properties});
        
//         res.status(200).json("The product has been added")

//    }if(method === 'GET'){

//        if(req.query?.id){
//            res.status(200).json(await Product.findOne({_id:req.query.id}))
//        }else{
           
//            res.status(200).json(await Product.find())
//        }
//    }if(method === 'DELETE'){
//        const {id} = req.query;
//        res.status(200).json(await Product.deleteOne({_id:id}))

//    }if(method === 'PUT'){
//     const {name,description,price,_id,images} = req.body;
//        res.status(200).json(await Product.updateOne({_id},{name,description,price,_id,images,category,properties}))
//    }
// }

  
  