import express, { Request,Response, NextFunction } from 'express'
import { urlModel } from '../models/url'
import { nanoid } from 'nanoid'
const router= express.Router()

export const postUrlData = async (req: Request, res: Response): Promise<void> => {
    try {
      const { redirectUrl }: { redirectUrl: string } = req.body;
      const shortId: string = nanoid(7);
  
     await urlModel.create({ redirectUrl, shortId });

      res.sendStatus(200);
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  export const redirectToUrl= async(req:Request, res:Response)=> {
    try{
        const id =  req.params.id
        console.log(id);
        const urlDoc = await urlModel.findOneAndUpdate({shortId:id},{$push:{visitHistory:Date.now()}})        
        console.log(urlDoc);       
    }catch(err){
        res.status(404).json(err)
    }
  }

  export const getAnalytics= async (req:Request, res:Response)=> {
    try{
        const id= req.params.id
        const dateArray = await urlModel.findOne({shortId:id})
        //console.log(dateArray?.visitHistory.length);
        res.status(200).json(dateArray?.visitHistory.length)
        
    }catch(err){
        res.status(404).json(err)
    }
  }