const UserSchema=require('../schema/user.js')
const mongoose=require('mongoose')

// UserSchema.statics.findUser=(name)=>{
//      Model.find({name:name})
// }





    

const Model=mongoose.model('user',UserSchema)   //入参:collection,schema


module.exports=Model