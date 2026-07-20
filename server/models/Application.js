import mongoose from "mongoose";


const applicationSchema = new mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:false
    },


    fullName:{
        type:String,
        required:true
    },


    email:{
        type:String,
        required:true
    },


    phone:{
        type:String
    },


    age:{
        type:String
    },


    gender:{
        type:String
    },


    category:{
        type:String
    },


    location:{
        type:String
    },


    education:{
        type:String
    },


    cgpa:{
        type:String
    },


    skills:{
        type:String
    },


    experience:{
        type:String
    },


    selectedInternships:[String],



    status:{
        type:String,
        enum:["Draft","Submitted"],
        default:"Draft"
    }


},{
    timestamps:true
});


export default mongoose.model(
    "Application",
    applicationSchema
);