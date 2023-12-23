import jwt from 'jsonwebtoken'
import express, { Request,Response, NextFunction } from 'express'

const secret= 'secret'
export const vertifyJwt = async(req:Request,res:Response,next:NextFunction)=> {
    try{
        const reqHeader = req.headers.authorization;
        if(reqHeader){
        const token = reqHeader?.split(' ')[1]
        if(!process.env.SECRET_KEY){
            return res.sendStatus(403);
         }

         jwt.verify(token, process.env.SECRET_KEY, (err, payload)=> {
            if(err){
                return res.status(400).json(err)
            }
            if(!payload){
                return res.sendStatus(403)
            }

            if(typeof payload === "string"){
                return res.sendStatus(403)
            }

            req.headers["userId"]= payload.id
            next()

         })
       
    }else{
        res.sendStatus(401)
    }

    }catch(err){
        res.status(403).json({message: 'Jwt verification failed'})
    }
}