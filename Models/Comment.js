const mongoose=require('mongoose')
const User=require('./User')
const comment = new mongoose.Schema(
    {
        commentAuthor:
        {
            type:mongoose.Types.ObjectId,
            ref:User,
            required:true
        },
        commentText:{
            type:String,
            required:true
        },
        commentDate:{
            type:Date,
            default:Date.now
        },
        commentLike:{
            type:Number,
            default:0
        }

        

     
    }
)
const Comment=mongoose.model('Comment',comment)
module.exports=Comment