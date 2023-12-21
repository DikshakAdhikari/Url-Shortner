import jwt from 'jsonwebtoken'
import express, { Request,Response, NextFunction } from 'express'

export const vertifyJwt = async(req:Request,res:Response,next:NextFunction)=> {
    try{
        
    }catch(err){
        res.status(403).json({message: 'Jwt verification failed'})
    }
}