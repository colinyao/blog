const Schema=require('./index.js')
module.exports=new Schema({
     name:String,  //相当于msyql的字段类型定义
     password:String,
     //_id:Schema.Types.ObjectId,
     level:Number,
     update_time:{type:Date,default:Date.now}
})



