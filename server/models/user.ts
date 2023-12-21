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
})

export const userModel= mongoose.model('user', userSchema)