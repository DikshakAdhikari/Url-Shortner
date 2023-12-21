import express from 'express'
import { userModel } from '../models/user'
import jwt from 'jsonwebtoken'
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
        const token= jwt.sign({id:user._id}, secret, {expiresIn:"1h"})
        //console.log(token);
        res.cookie('token',token, {httpOnly:true})
        res.json(token)
        
        
    }catch(err){
        res.status(400).json(err)
    }
})


export default router
