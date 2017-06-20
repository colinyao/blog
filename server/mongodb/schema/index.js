const mongoose=require('mongoose')
module.exports=function(schema){
     new mongoose.Schema(schema)
}