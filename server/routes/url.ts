import express from 'express'
import { urlModel } from '../models/url'
import { nanoid } from 'nanoid'
const router= express.Router()


router.post('/', async(req,res)=> {
    try{
        const {redirectUrl}= req.body;
        const shortId: string = nanoid(7);
        await urlModel.insertMany({redirectUrl,shortId})
        res.sendStatus(200)    

    }catch(err){
            res.status(404).json(err)
    }
})


router.get('/:id', async(req,res)=> {
    try{
        const id =  req.params.id
        console.log(id);
        const urlDoc = await urlModel.findOneAndUpdate({shortId:id},{$push:{visitHistory:Date.now()}})        
        console.log(urlDoc);       
    }catch(err){
        res.status(404).json(err)
    }
})

router.get('/analytics/:id', async(req,res)=> {
    try{
        const id= req.params.id
        const dateArray = await urlModel.findOne({shortId:id})
        //console.log(dateArray?.visitHistory.length);
        res.status(200).json(dateArray?.visitHistory.length)
        
    }catch(err){
        res.status(404).json(err)
    }
})



export default router