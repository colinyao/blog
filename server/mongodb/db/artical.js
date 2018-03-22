const AricalSchema=require('../schema/artical.js')
const mongoose=require('mongoose')

// UserSchema.statics.findUser=(name)=>{
//      Model.find({name:name})
// }







const Model=mongoose.model('artical',AricalSchema)   //入参:collection,schema


module.exports=Model
