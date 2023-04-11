import mongoose from "mongoose";
// import User from "./UserSchema.js"

const RoomSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
    type :{
        type : String,
        required : true
    }  ,
    room_no : {
        type : String ,
        required : true 
    },
    area:{
        type:String ,
        required:true 
    },
    city :{
        type : String,
        required : true
    }  ,
    state:{
        type : String,
        required : true
    },
    pincode :{
        type : String,
        required : true
    }  ,
    
    max_people : {
        type : Number ,
        required : true ,
        min : 1 ,
        max : 10
    },
    distance_to_station : {
        type : Number,
        required : true
    }  ,
    rent : {
        type : Number,
        required : true
    }  ,
    security : {
        type : String,
        required : true
    }  ,
    facilities : {
        type : String,
    }  ,
    rating : {
        type : Number,
        min : 0 ,
        max : 5 
    }  ,
    size : {
        type : String,
        required : true 
    }  ,
    available_for : {
        type : String,
        required : true 
    }  ,
    isAvailable : {
        type : Boolean ,
        required : true ,
        default : false 
    },
    photos : {
        type : [String],
        required : true
    }  ,
})


export default mongoose.model( "Room" ,  RoomSchema);