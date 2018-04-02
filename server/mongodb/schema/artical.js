const Schema=require('./index.js')
module.exports=new Schema({
     title:String,  //相当于msyql的字段类型定义
     headImg:String,
     //_id:Schema.Types.ObjectId,
     abstract:String,
     content:String,
     reads:{type:Number,default:0},
     messages:{type:Number,default:0},
     type:String,
     month:{type:String},
     update_time:{type:Date}
})
