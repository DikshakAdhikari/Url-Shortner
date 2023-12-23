import express from 'express'
import { userModel } from '../models/user'
import jwt from 'jsonwebtoken'
import { vertifyJwt } from '../middleware/verifyJwt'
const router= express.Router()
const secret= 'secret'



router.post('/', async(req,res)=>{
    try{
        const {email, password}= req.body
        await userModel.insertMany({email, password})
        res.sendStatus(200)
    }catch(err){
        res.status(404).json(err)
    }
})

router.get('/signin', async(req,res)=> {
    try{
        const {email, password}= req.body
        const user = await userModel.findOne({email, password})
        if(!user){
            return res.status(400).json('User does not exist!')
        }
        if(!process.env.SECRET_KEY){
            return res.sendStatus(403)
        }
        const token= jwt.sign({id:user._id}, process.env.SECRET_KEY , {expiresIn:"1h"})
        //console.log(token);
        res.cookie('token',token, {httpOnly:true})
        res.json({message:"Logged In successfully!"})
        
        
    }catch(err){
        res.status(400).json(err)
    }
})


export default router
