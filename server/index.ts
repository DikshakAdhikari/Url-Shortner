import express from 'express'
import urlRouter from './routes/url'
import userRouter from './routes/user'
const app= express();
import cors from 'cors'
import dotenv from 'dotenv'
 dotenv.config()
 const port= process.env.PORT
 import cookieParser from 'cookie-parser'
import { urlModel } from './models/url';
import mongoose from 'mongoose';
 app.use(cors({
     origin: 'http://localhost:3001', 
     credentials: true, 
   })); 

 app.use(cookieParser())
 app.use(express.urlencoded({extended:false})) //It is used to handle form data as request
app.use(express.json())

//@ts-ignore
  mongoose.connect("mongodb+srv://dikshak302000:galatHai@cluster0.xfupaxp.mongodb.net/?retryWrites=true&w=majority").then(console.log('mongodb connected'))
  


app.use('/url', urlRouter)
app.use('/user', userRouter)


app.get('/:id', async(req,res)=> {
  try{
    const tinyUrl = req.params.id;
  const validUrl= await urlModel.findOne({shortId:tinyUrl})
  
    if(validUrl){
      const urlDoc = await urlModel.updateOne(
        { shortId: tinyUrl },
        { $push: { visitHistory: { timestamp: Date.now() } } }
      );
       res.set('Cache-Control', 'no-cache');
       res.redirect(validUrl.redirectUrl)
    }
  
  }catch(err){
    // console.log(err);
    res.status(403).json({message:err})
  }
  
})

app.listen(port, ()=> console.log(`Server is listening on port ${port}`)
)


