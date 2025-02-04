import mongoose from "mongoose";

const schema = new mongoose.Schema({
    work: {
        type: String,
        required: true
    },
    place:{
        type:String,
        required:true
    },
    pics:{
        type:Array,
        required:true
    }
})
const Pics=mongoose.model("PICS",schema)
export {Pics}