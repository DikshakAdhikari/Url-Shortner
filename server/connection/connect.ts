import mongoose from "mongoose"
export const mongooseConnect = async()=> {
    try{
       await mongoose.connect('mongodb://localhost:27017')
       console.log('Connected Successfully');
       
    }catch(err){
        console.log('Db Error' + err);
        
    }
    
}