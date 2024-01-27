import express from 'express'
import urlRouter from './routes/url'
import userRouter from './routes/user'
const app= express();
import cors from 'cors'
import dotenv from 'dotenv'
 dotenv.config()
 const port= process.env.PORT
 import { mongooseConnect } from './connection/connect';
 import cookieParser from 'cookie-parser'
import { urlModel } from './models/url';
 app.use(cors({
     origin: 'http://localhost:3001', 
     credentials: true, 
   })); 

 app.use(cookieParser())
 app.use(express.urlencoded({extended:false})) //It is used to handle form data as request
app.use(express.json())
mongooseConnect()

app.use('/url', urlRouter)
app.use('/user', userRouter)


app.get('/:id', async(req,res)=> {
  try{
    const tinyUrl = req.params.id;
  const validUrl= await urlModel.findOne({shortId:tinyUrl})
    if(validUrl){
      res.redirect(validUrl.redirectUrl)
    }
  
  }catch(err){
    res.status(403).json(err)
  }
  
})

app.listen(port, ()=> console.log(`Server is listening on port ${port}`)
)


