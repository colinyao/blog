const Schema=require('./index.js')
module.exports=new Schema({
     type:String,//相当于msyql的字段类型定义
     update_time:{type:Date,default:Date.now}
})
