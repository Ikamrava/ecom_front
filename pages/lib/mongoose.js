import mongoose from 'mongoose'; 

export function connect() {
    if(mongoose.connection.readyState >= 1) {
        return;
    }else{
        const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
        return mongoose.connect(uri)
    }
}