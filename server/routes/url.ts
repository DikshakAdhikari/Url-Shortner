import express from 'express'
import { urlModel } from '../models/url'
import { nanoid } from 'nanoid';

const router= express.Router()


router.post('/', async(req,res)=> {
    console.log("dfssddgfs");
    
    try{
        const {redirectUrl}= req.body
        console.log(redirectUrl);
        
        const shortId: string = "dfgdsdsdsdsdsddfg";
       // console.log(shortId);
        
        const savedUser=  await urlModel.insertMany({redirectUrl,shortId})
      
        

    }catch(err){
            res.status(404).json(err)
    }


})



export default router