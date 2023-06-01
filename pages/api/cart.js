import { connect } from '../lib/mongoose'
import { Product } from '../lib/products'

// export async function handler(req,res) {
//     console.log(req.body)
// //  await  connect()
// //   const ids = req.body.ids
// //   res.json(await Product.find({_id:ids}))
// }   


export  default async function handler(req, res) {

    
        await connect()
        const ids = await req.body.ids
        console.log(ids)
        
        // const p = 
        res.json(await Product.find({_id:ids}))
        // 

        // res.json(await Product.find({_id:ids}))
      // Process a POST request
   
    
  }
    

  