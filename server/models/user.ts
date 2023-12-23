import mongoose from 'mongoose'

const userSchema= new mongoose.Schema({
    email: {
        type:String,
        required:true,
    },
    password: {
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        default:'NORMAL',
        required:true
    }
},{timestamps:true})

export const userModel= mongoose.model('user', userSchema)