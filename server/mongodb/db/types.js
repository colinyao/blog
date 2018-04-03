const TypesSchema=require('../schema/types.js')
const mongoose=require('mongoose')

// UserSchema.statics.findUser=(name)=>{
//      Model.find({name:name})
// }







const Model=mongoose.model('types',TypesSchema)   //入参:collection,schema


module.exports=Model
