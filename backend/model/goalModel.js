import { timeStamp } from "console";
import mongoose from "mongoose";
import { type } from "os";

const goalSchema=mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'User'
        },
        text:{
        type:String,
        required:[true,'Please add text value']
        }
    },
    {
        timestamps:true
    }
);

const Goal = mongoose.model('Goal', goalSchema);
export default Goal;