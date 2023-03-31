const mongoose=require('mongoose')
const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true
        },

        userImage:{
            type:Image,
            
        },

        phoneNo:
        {
            type:Number,
            required:true
        },

        emilId:
        {
            type:String,
            required:true
        },

    }
)

const user=mongoose.model('User',userSchema)
module.exports=user