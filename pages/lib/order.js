
import mongoose, { models } from 'mongoose';
export const order_schema = new mongoose.Schema({
    line_items:{
        type: Object,
        required: true,
    },
    name:{
        type: String,
        required: true,

    },
    email:{
        type: String,
        required: true,
    
    },
    city:{

        type: String,
        required: false,
    },
    postcode:{
        type: String,   
        required: true,

    },
    street:{
        type: String,
        required: false,
    
    },
    country:{
        type: String,
        required: false,
    
    },
    paid:{

        type: Boolean,
        required: true,
        
    }
  },{
    timestamps: true
  });

  export const Order = models?.Order || mongoose.model('Order', order_schema);


