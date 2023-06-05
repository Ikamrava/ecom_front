import { connect } from '../lib/mongoose'
import { Product } from '../lib/products'


export  default async function handler(req, res) {

    
        await connect()
        const ids = await req.body.ids


        // const p = 
        res.json(await Product.find({_id:ids}))
        // 

        // res.json(await Product.find({_id:ids}))
      // Process a POST request
   
    
  }
    

  