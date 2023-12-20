import mongoose from "mongoose";

const urlSchema= new mongoose.Schema({
    shortId : {
        type:String,
        required:true,
        unique:true
    },
    redirectUrl: {
        type:String,
        required:true,
        unique:true
    },
    visitHistory: [{
        timestamp: {
            type:Number,
            required:true
        }
    }]
}, { timestamps:true})

export const urlModel = mongoose.model('url', urlSchema)