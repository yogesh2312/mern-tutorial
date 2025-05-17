import { timeStamp } from "console";
import mongoose from "mongoose";

const goalSchema=mongoose.Schema(
    {
    text:{
        type:String,
        required:[true,'Please add text value']
        }
    },
    {
    timeStamps:true
    }
)

const User = mongoose.model('Goal', goalSchema);
export default User;