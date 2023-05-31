import mongoose from 'mongoose'; 

export function connect() {
    if(mongoose.connection.readyState >= 1) {
        return;
    }else{
        const uri = "mongodb+srv://ecom:Kian9530@cluster0.rsaf8na.mongodb.net/?retryWrites=true&w=majority";
        return mongoose.connect(uri)
    }
}